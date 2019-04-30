import { createAction, InferActionFromCreator } from "./action-creators";
import { StoryBeat } from "@app/model/story";

export enum Actions {
  ADD_STORY_BEAT = "ADD_STORY_BEAT",
  PROCEED_IN_STORY = "PROCEED_IN_STORY",
  CHOOSE = "CHOOSE",

  START_TYPING = "START_TYPING",
  STOP_TYPING = "STOP_TYPING",

  SET_UNREAD_COUNT = "SET_UNREAD_COUNT",
  SET_CURRENT_LOCATION = "SET_CURRENT_LOCATION",
  SET_KNOWN_LOCATIONS = "SET_KNOWN_LOCATIONS",
}

export const actionCreators = {
  proceedInStory: createAction(Actions.PROCEED_IN_STORY),
  addStoryBeat: createAction(Actions.ADD_STORY_BEAT, (beat: StoryBeat) => ({ type: Actions.ADD_STORY_BEAT, beat })),
  choose: createAction(Actions.CHOOSE, (index: number) => ({ type: Actions.CHOOSE, index })),

  startTyping: createAction(Actions.START_TYPING),
  stopTyping: createAction(Actions.STOP_TYPING),

  setUnreadCount: createAction(Actions.SET_UNREAD_COUNT, (count: number) => ({
    type: Actions.SET_UNREAD_COUNT,
    count,
  })),
  setCurrentLocation: createAction(Actions.SET_CURRENT_LOCATION, (currentLocation: string) => ({
    type: Actions.SET_CURRENT_LOCATION,
    currentLocation,
  })),
  setKnownLocations: createAction(Actions.SET_KNOWN_LOCATIONS, (locations: string[]) => ({
    type: Actions.SET_KNOWN_LOCATIONS,
    locations,
  })),
};

type ActionMap = typeof actionCreators;
type ActionCreator = typeof actionCreators[keyof ActionMap];

export type RootAction = InferActionFromCreator<ActionCreator>;
