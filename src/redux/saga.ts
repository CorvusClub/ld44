import { Actions, actionCreators } from "./actions";
import { takeEvery, all, put, call, select, delay, fork } from "@redux-saga/core/effects";
import { story } from "@app/story/ink";
import { Speaker, Character } from "@app/model/characters";
import { shouldBeAdvancable, isTyping, unreadCount, currentLocation, knownLocations } from "./selectors";
import { ListValue } from "inkjs/engine/Value";
import { Locations } from "@app/story/locations";

const SPEAKER_REGEX = /(\w+)(\$?):\s?(.*)/;

function getSpeaker(next: string) {
  let speaker: Speaker = "narrator";
  let message = next;
  let isNarration = true;

  const match = next.match(SPEAKER_REGEX);
  if (match) {
    speaker = match[1] as Character;
    isNarration = !!match[2];
    message = match[3];
  }
  return { speaker, message, isNarration };
}

let skipDebounce = false;

function* debounce() {
  skipDebounce = true;
  yield delay(300);
  skipDebounce = false;
}
function* advanceStory() {
  if (skipDebounce) {
    return;
  }
  const isCurrentlyTyping = yield select(isTyping);
  if (isCurrentlyTyping) {
    yield put(actionCreators.stopTyping());
    yield fork(debounce);
    return;
  }
  if (story.canContinue) {
    const next = story.Continue();
    if (next) {
      const { message, speaker, isNarration } = getSpeaker(next);
      yield put(actionCreators.addStoryBeat({ beatType: "message", message, speaker, isNarration }));
    }
    yield fork(debounce);
  } else {
    const advancable = yield select(shouldBeAdvancable);
    if (advancable && story.currentChoices.length > 0) {
      yield put(
        actionCreators.addStoryBeat({
          beatType: "choices",
          choices: story.currentChoices.map((choice) => {
            const { message, speaker } = getSpeaker(choice.text);
            return { text: message, speaker, index: choice.index };
          }),
        })
      );
    }
    yield fork(debounce);
  }
  const stateUnreadCount = yield select(unreadCount);
  const storyUnreadList = story.variablesState.GetVariableWithName("unread_messages") as ListValue;
  const storyUnreadCount = storyUnreadList.value!.Count;
  if (stateUnreadCount !== storyUnreadCount) {
    yield put(actionCreators.setUnreadCount(storyUnreadCount));
  }
  const stateCurrentLocation = yield select(currentLocation);
  const storyCurrentLocation =
    story.state.currentPathString == null ? stateCurrentLocation : story.state.currentPathString.split(".")[0];
  if (stateCurrentLocation !== storyCurrentLocation && Locations[storyCurrentLocation]) {
    yield put(actionCreators.setCurrentLocation(storyCurrentLocation));
  }

  const stateKnownLocations = yield select(knownLocations);
  const storyKnownLocationsList = story.variablesState.GetVariableWithName("locations") as ListValue;
  const storyKnownLocations = storyKnownLocationsList.value!.orderedItems.map((item) => item.Key.itemName!);
  if (stateKnownLocations !== storyKnownLocations) {
    yield put(actionCreators.setKnownLocations(storyKnownLocations));
  }
}
function* makeChoice({ index }: ReturnType<typeof actionCreators.choose>) {
  if (skipDebounce) {
    return;
  }
  story.ChooseChoiceIndex(index);
  yield call(advanceStory);
}

const sagas = [takeEvery(Actions.PROCEED_IN_STORY, advanceStory), takeEvery(Actions.CHOOSE, makeChoice)];

export function* saga() {
  yield all(sagas);
}
