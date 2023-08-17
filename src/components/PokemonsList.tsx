"use client";

import pokeapi from "@/src/services/pokeapi";
import PokemonCard from "./cards/PokemonCard";

export default function PokemonsList() {
  const {
    data: pokemonsList,
    isLoading,
    error,
  } = pokeapi.usePokemonsSummaryListQuery();

  if (error) {
    console.error(error);
    return (
      <section className="container pt-primary">
        <h1 className="text-center text-2xl">Ha ocurrido un error</h1>
      </section>
    );
  }

  if (!isLoading && !pokemonsList?.length) {
    return (
      <section className="container pt-primary">
        <h1 className="text-center text-2xl">No hay resultados</h1>
      </section>
    );
  }

  return (
    <ul className="flex flex-wrap justify-center gap-x-9 gap-y-8 md:justify-between">
      {isLoading
        ? Array(15)
            .fill(1)
            .map((item, i) => (
              <li key={i} className="skeleton h-[268px] w-[180px]"></li>
            ))
        : pokemonsList?.map((pokemon) => (
            <li key={pokemon.id}>
              <PokemonCard {...pokemon} />
            </li>
          ))}
    </ul>
  );
}
