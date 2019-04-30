import { combineReducers } from "redux";
import { RootAction, Actions } from "./actions";
import { StoryBeat } from "@app/model/story";

type StoryState = {
  log: StoryBeat[];
  unreadCount: number;
  currentLocation: string;
  knownLocations: string[];
};

const initialStoryState: StoryState = {
  log: [],
  unreadCount: 0,
  currentLocation: "intro",
  knownLocations: [],
};
function story(state: StoryState = initialStoryState, action: RootAction) {
  switch (action.type) {
    case Actions.ADD_STORY_BEAT: {
      return {
        ...state,
        log: [...state.log, action.beat],
      };
    }
    case Actions.SET_UNREAD_COUNT: {
      return {
        ...state,
        unreadCount: action.count,
      };
    }
    case Actions.SET_CURRENT_LOCATION: {
      return {
        ...state,
        currentLocation: action.currentLocation,
      };
    }
    case Actions.SET_KNOWN_LOCATIONS: {
      return {
        ...state,
        knownLocations: action.locations,
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
  story,
  typing,
});

export type RootState = ReturnType<typeof reducer>;
