import { RootState } from "./reducer";

export function counterValue(state: RootState) {
  return state.counter;
}

export function dialogueLog(state: RootState) {
  return state.story.log;
}

export function dialogueChoices(state: RootState) {
  return state.story.choices;
}

export function shouldBeAdvancable(state: RootState) {
  return state.story.choices.length === 0;
}
