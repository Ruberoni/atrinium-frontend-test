"use client";

import { useQuery } from "@tanstack/react-query";
import pokeapi from "@/src/services/pokeapi";
import PokemonCard from "./cards/PokemonCard";
import { POKEAPI_GET_POKEMON_QUERY } from "../constants";

export default function PokemonsList() {
  const { data: pokemonsList, isLoading } = useQuery({
    queryKey: [POKEAPI_GET_POKEMON_QUERY],
    queryFn: pokeapi.getPokemonsSummaryList,
  });

  return (
    <ul className="flex flex-wrap justify-center gap-x-9 gap-y-8 md:justify-between">
      {isLoading &&
        Array(15)
          .fill(1)
          .map((item, i) => (
            <li key={i} className="skeleton h-[268px] w-[180px]"></li>
          ))}
      {pokemonsList?.map((pokemon) => (
        <li key={pokemon.id}>
          <PokemonCard {...pokemon} />
        </li>
      ))}
    </ul>
  );
}
