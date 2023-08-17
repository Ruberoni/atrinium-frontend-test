import { IPokemonDetail } from "@/src/types";

export const pokemonTypes = {
  grass: {
    id: 1,
    name: "grass",
    translatedName: "Planta",
  },
  poison: {
    id: 2,
    name: "poison",
    translatedName: "Veneno",
  },
};

export const pokemonAbilities = {
  overgrow: {
    name: "overgrow",
    translatedName: "sobrecrecimiento",
  },
  chlorophyll: {
    name: "chlorophyll",
    translatedName: "clorofila",
  },
};

export const bulbasaur: IPokemonDetail = {
  id: 1,
  name: "bulbasaur",
  height: 90,
  weight: 80,
  experience: 80,
  stats: [
    {
      value: 45,
      name: "hp",
      translatedName: "Vida",
    },
    {
      value: 49,
      name: "attack",
      translatedName: "Ataque",
    },
    {
      value: 49,
      name: "defense",
      translatedName: "Defensa",
    },
    {
      value: 65,
      name: "special-attack",
      translatedName: "Ataque E.",
    },
    {
      value: 65,
      name: "special-defense",
      translatedName: "Defensa E.",
    },
    {
      value: 45,
      name: "speed",
      translatedName: "Velocidad",
    },
  ],
  abilities: [pokemonAbilities.chlorophyll, pokemonAbilities.overgrow],
  types: [pokemonTypes.grass, pokemonTypes.poison],
};
