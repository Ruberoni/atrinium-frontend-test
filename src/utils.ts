import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";
import { IPokemonSummary } from "./types";
import { POKEMON_STATS_NAME } from "./constants";

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
