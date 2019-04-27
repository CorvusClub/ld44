import { createAction, InferActionFromCreator } from "./action-creators";
import { StoryBeat, Choice } from "@app/model/story";

export enum Actions {
  INCREMENT_COUNTER = "INCREMENT_COUNTER",
  DECREMENT_COUNTER = "DECREMENT_COUNTER",

  ADD_STORY_BEAT = "ADD_STORY_BEAT",
  PROCEED_IN_STORY = "PROCEED_IN_STORY",
  CHOOSE = "CHOOSE",

  START_TYPING = "START_TYPING",
  STOP_TYPING = "STOP_TYPING",
}

export const actionCreators = {
  incrementCounter: createAction(Actions.INCREMENT_COUNTER),
  decrementCounter: createAction(Actions.DECREMENT_COUNTER),

  proceedInStory: createAction(Actions.PROCEED_IN_STORY),
  addStoryBeat: createAction(Actions.ADD_STORY_BEAT, (beat: StoryBeat) => ({ type: Actions.ADD_STORY_BEAT, beat })),
  choose: createAction(Actions.CHOOSE, (index: number) => ({ type: Actions.CHOOSE, index })),

  startTyping: createAction(Actions.START_TYPING),
  stopTyping: createAction(Actions.STOP_TYPING),
};

type ActionMap = typeof actionCreators;
type ActionCreator = typeof actionCreators[keyof ActionMap];

export type RootAction = InferActionFromCreator<ActionCreator>;
