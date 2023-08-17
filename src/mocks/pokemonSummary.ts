import { IPokemonSummary } from "@/src/types";

export const bulbasaur: IPokemonSummary = {
  id: 1,
  name: "bulbasaur",
  defense: 3000,
  attack: 40000,
  health: 100,
};
export const ivysaur: IPokemonSummary = {
  id: 2,
  name: "ivysaur",
  attack: 400,
  health: 10,
};
export const venusaur: IPokemonSummary = {
  id: 3,
  name: "venusaur",
  defense: 3000,
  attack: 40000,
};
export const charmander: IPokemonSummary = {
  id: 4,
  name: "charmander",
  defense: 88000,
};

export const pokemonsList = [bulbasaur, ivysaur, venusaur, charmander];
