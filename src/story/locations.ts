type StoryLocation = {
  x: number;
  y: number;
  name: string;
};

const crime_scene = {
  x: 0.4,
  y: 0.4,
  name: "Scene of the crime",
};

const regular = {
  x: 0.1,
  y: 0.2,
  name: "The Regular",
};

const tatos = {
  x: 0.8,
  y: 0.6,
  name: "Tato's Chicken Shack",
};

const estelles = {
  x: 0.4,
  y: 0.7,
  name: "Estelle's House",
};

const apartment = {
  x: 0.3,
  y: 0.1,
  name: "Clark's Apartment",
};

const bfhouse = {
  x: 0.23,
  y: 0.28,
  name: "Hamish's House",
};

const mansion = {
  x: 0.35,
  y: 0.3,
  name: "Claretta's Mansion",
};

const streetmeet = {
  x: 0.4,
  y: 0.2,
  name: "Corner of 5th and Wyatt",
};

const nova = {
  x: 0.74,
  y: 0.3,
  name: "Nova Colony Solutions",
};

const starport = {
  x: 0.78,
  y: 0.18,
  name: "New Horizons Starport",
};

const victim_work = {
  x: 0.48,
  y: 0.1,
  name: "PentaCorp Bioengineering Division",
};

export const Locations: { [name: string]: StoryLocation } = {
  crime_scene,
  intro: crime_scene,
  loccrimescene: crime_scene,

  regular,
  locregular: regular,

  tatos,
  loctatos: tatos,

  estelles,
  locestelles: estelles,

  apartment,
  locvictimhome: apartment,

  bfhouse,
  locbfhouse: bfhouse,

  mansion,
  locrichass: mansion,

  streetmeet,
  locstreet: streetmeet,

  nova,
  locnova: nova,

  starport,
  locstarport: starport,

  victim_work,
  locvictimwork: victim_work,
};
