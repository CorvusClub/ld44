import { Actions, actionCreators } from "./actions";
import { takeEvery, all, delay, put, call } from "@redux-saga/core/effects";
import { story } from "@app/story/ink";

function* foobarSaga() {
  yield delay(1000);
  yield put(actionCreators.decrementCounter());
}

function* advanceStory() {
  if (story.canContinue) {
    const next = story.Continue();
    if (next) {
      yield put(actionCreators.addStoryBeat({ beatType: "message", message: next }));
    }
    if (story.currentChoices.length > 0) {
      yield put(actionCreators.setChoices(story.currentChoices));
    }
  }
}
function* makeChoice({ index }: ReturnType<typeof actionCreators.choose>) {
  story.ChooseChoiceIndex(index);
  yield put(actionCreators.setChoices(story.currentChoices));
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
