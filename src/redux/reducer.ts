import { combineReducers } from "redux";
import { RootAction, Actions } from "./actions";
import { Choice } from "inkjs/engine/Choice";

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

type Message = {
  beatType: "message";
  message: string;
};

export type StoryBeat = Message;

type StoryState = {
  log: StoryBeat[];
  choices: Choice[];
};

const initialStoryState: StoryState = {
  log: [],
  choices: [],
};
function story(state: StoryState = initialStoryState, action: RootAction) {
  switch (action.type) {
    case Actions.ADD_STORY_BEAT: {
      return {
        ...state,
        log: [...state.log, action.beat],
      };
    }
    case Actions.SET_CHOICES: {
      return {
        ...state,
        choices: action.choices,
      };
    }
  }

  return state;
}

export const reducer = combineReducers({
  counter,
  story,
});

export type RootState = ReturnType<typeof reducer>;
