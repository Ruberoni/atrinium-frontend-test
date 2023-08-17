import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";
import { IPokemonDetail, IPokemonSummary } from "./types";
import { POKEMON_STATS_NAME, SPANISH_ISO_CODE } from "./constants";

export const getQueryClient = cache(() => new QueryClient());

export function formatPokemonsSummaryData(data: any[]): IPokemonSummary[] {
  return data.map((item) => ({
    id: item.id,
    name: item.name,
    attack: item.stats.find(
      (stat: any) => stat.stat.name === POKEMON_STATS_NAME.ATTACK,
    )?.base_stat,
    defense: item.stats.find(
      (stat: any) => stat.stat.name === POKEMON_STATS_NAME.DEFENSE,
    )?.base_stat,
    health: item.stats.find(
      (stat: any) => stat.stat.name === POKEMON_STATS_NAME.HP,
    )?.base_stat,
  }));
}

export function formatPokemonDetailsData(
  pokemon: any,
  abilities: any[],
  types: any[],
): IPokemonDetail {
  return {
    id: pokemon.id,
    name: pokemon.name,
    height: pokemon.height,
    weight: pokemon.weight,
    experience: pokemon.base_experience,
    abilities: abilities.map((item) => ({
      name: item.name,
      translatedName: item.names.find(
        (item: any) => item.language.name === SPANISH_ISO_CODE,
      )?.name,
    })),
    stats: pokemon.stats.map((item: any) => ({
      name: item.stat.name,
      value: item.base_stat,
      translatedName: getTranslatedPokemonStatName(item.stat.name),
    })),
    types: types.map((item) => ({
      id: item.id,
      name: item.name,
      translatedName: item.names.find(
        (item: any) => item.language.name === SPANISH_ISO_CODE,
      )?.name,
    })),
  };
}

export function getTranslatedPokemonStatName(
  statName: (typeof POKEMON_STATS_NAME)[keyof typeof POKEMON_STATS_NAME],
) {
  switch (statName) {
    case POKEMON_STATS_NAME.ATTACK:
      return "Ataque";
    case POKEMON_STATS_NAME.DEFENSE:
      return "Defensa";
    case POKEMON_STATS_NAME.HP:
      return "Vida";
    case POKEMON_STATS_NAME.SPECIAL_ATTACK:
      return "Ataque E.";
    case POKEMON_STATS_NAME.SPECIAL_DEFENSE:
      return "Defensa E.";
    case POKEMON_STATS_NAME.SPEED:
      return "Velocidad";
    default:
      return statName;
  }
}
