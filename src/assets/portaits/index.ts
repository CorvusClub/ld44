import player from "./Female_01_R.png";
import officer from "./Male_11_R.png";
import cop from "./Male_14_R.png";
import gal from "./Female_06_R.png";
import olivia from "./Female_11_R.png";
import invest from "../invest_logo.png";
import bartender from "./bartender.png";
import dancer from "./Female_04_R.png";
import couple_lady from "./Female_10_R.png";
import couple_man from "./Male_17_R.png";
import guard from "./Male_06_R.png";
import starportman from "./Male_03_R.png";
import { Speaker } from "@app/model/characters";
import clarreta from "./Female_03_R.png";
import bentley from "./Male_13_R.png";
import estelle from "./Female_09_R.png";
import tato from "./Male_07_R.png";
import clark from "./Male_01_R.png";
import hamish from "./Male_10_R.png";
import shipwoman from "./Female_12_R.png";
import novarep from "./Male_12_R.png";

export const portraits: { [name: string]: string } = {
  player,
  narrator: player,
  officer,
  cop,
  gal,
  olivia,
  invest,
  bartender,
  dancer,
  couple_lady,
  couple_man,
  guard,
  starportman,
  clarreta,
  bentley,
  estelle,
  tato,
  clark,
  hamish,
  shipwoman,
  novarep,
};

// preload portraits
Object.values(portraits).forEach((portrait) => (new Image().src = portrait));
