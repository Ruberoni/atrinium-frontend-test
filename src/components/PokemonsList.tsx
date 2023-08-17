"use client";

import { useQuery } from "@tanstack/react-query";
import pokeapi from "@/src/services/pokeapi";

export default function PokemonsList() {
  const { data } = useQuery({
    queryKey: ["pokemons-list"],
    queryFn: pokeapi.getPokemonsList,
  });

  return <p>{JSON.stringify(data)}</p>;
}
