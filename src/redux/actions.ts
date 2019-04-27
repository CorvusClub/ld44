import { createAction, InferActionFromCreator } from "./action-creators";
import { StoryBeat } from "./reducer";
import { Choice } from "inkjs/engine/Choice";

export enum Actions {
  INCREMENT_COUNTER = "INCREMENT_COUNTER",
  DECREMENT_COUNTER = "DECREMENT_COUNTER",

  ADD_STORY_BEAT = "ADD_STORY_BEAT",
  PROCEED_IN_STORY = "PROCEED_IN_STORY",
  SET_CHOICES = "SET_CHOICES",
  CHOOSE = "CHOOSE",
}

export const actionCreators = {
  incrementCounter: createAction(Actions.INCREMENT_COUNTER, () => ({ type: Actions.INCREMENT_COUNTER })),
  decrementCounter: createAction(Actions.DECREMENT_COUNTER, () => ({ type: Actions.DECREMENT_COUNTER })),

  proceedInStory: createAction(Actions.PROCEED_IN_STORY, () => ({ type: Actions.PROCEED_IN_STORY })),
  addStoryBeat: createAction(Actions.ADD_STORY_BEAT, (beat: StoryBeat) => ({ type: Actions.ADD_STORY_BEAT, beat })),
  setChoices: createAction(Actions.SET_CHOICES, (choices: Choice[]) => ({ type: Actions.SET_CHOICES, choices })),
  choose: createAction(Actions.CHOOSE, (index: number) => ({ type: Actions.CHOOSE, index })),
};

type ActionMap = typeof actionCreators;
type ActionCreator = typeof actionCreators[keyof ActionMap];

export type RootAction = InferActionFromCreator<ActionCreator>;
