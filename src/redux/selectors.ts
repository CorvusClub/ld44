import { RootState } from "./reducer";
import { StoryBeat } from "@app/model/story";

export function dialogueLog(state: RootState) {
  return state.story.log;
}
export function currentBeat(state: RootState): StoryBeat | undefined {
  const log = dialogueLog(state);
  return log[log.length - 1];
}
export function shouldBeAdvancable(state: RootState) {
  const current = currentBeat(state);
  if (!current) {
    return true;
  }
  return current.beatType !== "choices";
}
export function isTyping(state: RootState) {
  return state.typing;
}
export function unreadCount(state: RootState) {
  return state.story.unreadCount;
}
export function currentLocation(state: RootState) {
  return state.story.currentLocation;
}
export function knownLocations(state: RootState) {
  return state.story.knownLocations;
}
