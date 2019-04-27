import { Actions, actionCreators } from "./actions";
import { takeEvery, all, delay, put, call, select } from "@redux-saga/core/effects";
import { story } from "@app/story/ink";
import { Speaker, Character } from "@app/model/characters";
import { shouldBeAdvancable } from "./selectors";

function* foobarSaga() {
  yield delay(1000);
  yield put(actionCreators.decrementCounter());
}
const SPEAKER_REGEX = /(\w+):\s?(.*)/;

function getSpeaker(next: string) {
  let speaker: Speaker = "narrator";
  let message = next;

  const match = next.match(SPEAKER_REGEX);
  if (match) {
    speaker = match[1] as Character;
    message = match[2];
  }

  return { speaker, message };
}

function* advanceStory() {
  if (story.canContinue) {
    const next = story.Continue();
    if (next) {
      const { message, speaker } = getSpeaker(next);
      yield put(actionCreators.addStoryBeat({ beatType: "message", message, speaker }));
    }
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
  }
}
function* makeChoice({ index }: ReturnType<typeof actionCreators.choose>) {
  story.ChooseChoiceIndex(index);
  yield call(advanceStory);
}
const sagas = [
  takeEvery(Actions.INCREMENT_COUNTER, foobarSaga),
  takeEvery(Actions.PROCEED_IN_STORY, advanceStory),
  takeEvery(Actions.CHOOSE, makeChoice),
];

export function* saga() {
  yield all(sagas);
}
