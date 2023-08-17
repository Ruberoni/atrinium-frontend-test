"use client";

import { useQuery } from "@tanstack/react-query";
import pokeapi from "@/src/services/pokeapi";
import PokemonCard from "./cards/PokemonCard";

export default function PokemonsList() {
  const { data: pokemonsList } = useQuery({
    queryKey: ["pokemons-list"],
    queryFn: pokeapi.getPokemonsSummaryList,
  });

  return (
    <ul className="flex flex-wrap justify-center gap-x-9 gap-y-8 md:justify-between">
      {pokemonsList?.map((pokemon) => (
        <li key={pokemon.id}>
          <PokemonCard {...pokemon} />
        </li>
      ))}
    </ul>
  );
}
