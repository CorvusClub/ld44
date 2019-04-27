import { combineReducers } from "redux";
import { RootAction, Actions } from "./actions";
import { StoryBeat, Choice } from "@app/model/story";

type CounterState = Readonly<number>;

const initialCounterState = 0;

function counter(state: CounterState = initialCounterState, action: RootAction) {
  switch (action.type) {
    case Actions.INCREMENT_COUNTER: {
      return state + 1;
    }
    case Actions.DECREMENT_COUNTER: {
      return state - 1;
    }
  }

  return state;
}

type StoryState = {
  log: StoryBeat[];
};

const initialStoryState: StoryState = {
  log: [],
};
function story(state: StoryState = initialStoryState, action: RootAction) {
  switch (action.type) {
    case Actions.ADD_STORY_BEAT: {
      return {
        ...state,
        log: [...state.log, action.beat],
      };
    }
  }

  return state;
}

type TypingState = Readonly<boolean>;
const initialTypingState = false;
function typing(state: TypingState = initialTypingState, action: RootAction) {
  switch (action.type) {
    case Actions.STOP_TYPING: {
      return false;
    }
    case Actions.START_TYPING: {
      return true;
    }
  }
  return state;
}
export const reducer = combineReducers({
  counter,
  story,
  typing,
});

export type RootState = ReturnType<typeof reducer>;
