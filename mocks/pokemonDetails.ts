import { IPokemonDetail } from "@/types";

export const bulbasaur: IPokemonDetail = {
  id: 1,
  name: "bulbasaur",
  health: 100,
  attack: 200,
  specialAttack: 300,
  defense: 400,
  specialDefense: 500,
  speed: 600,
  height: 700,
  weight: 800,
  experience: 900,
  types: [
    {
      slot: 1,
      type: {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/",
      },
    },
    {
      slot: 2,
      type: {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/",
      },
    },
  ],
};
