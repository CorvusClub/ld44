import { Speaker } from "./characters";

export type Message = {
  beatType: "message";
  message: string;
  speaker: Speaker;
  isNarration: boolean;
};
export type Choices = {
  beatType: "choices";
  choices: Choice[];
};
export type StoryBeat = Message | Choices;

export type Choice = {
  text: string;
  speaker: Speaker;
  index: number;
};
