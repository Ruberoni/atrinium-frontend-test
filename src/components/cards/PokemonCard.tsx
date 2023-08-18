"use client";

import Image from "next/image";
import Link from "next/link";
import ButtonLink from "../ButtonLink";
import { IPokemonSummary } from "@/src/types";
import { POKEMON_STATS_NAME } from "@/src/constants";
import { useState } from "react";
import visitedPokemonsService from "@/src/services/visitedPokemons";
import EyeIcon from "../icons/Eye";

export type PokemonCardProps = IPokemonSummary;

export default function PokemonCard({
  image,
  id,
  name,
  health,
  attack,
  defense,
}: PokemonCardProps) {
  let stats = [
    {
      type: POKEMON_STATS_NAME.HP,
      text: "Vida",
      value: health,
    },
    {
      type: POKEMON_STATS_NAME.ATTACK,
      text: "Ataque",
      value: attack,
    },
    {
      type: POKEMON_STATS_NAME.DEFENSE,
      text: "Defensa",
      value: defense,
    },
  ];

  stats = stats.filter((stat) => stat.value);

  const [visited] = useState(() => visitedPokemonsService.isVisited(id));

  if (!image) {
    image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
  }

  return (
    <article className="w-[220px] rounded-lg shadow-lg shadow-gray-300">
      <Link
        href={"/pokemon/" + id}
        className="relative flex h-[100px] items-center justify-center overflow-hidden"
      >
        <Image
          src={image}
          alt={name}
          width="180"
          height="180"
          className="h-[130px] w-full object-contain"
        />
        {visited && (
          <div className="absolute bottom-3 right-3 block rounded-xl bg-primary px-2 py-0.5 text-xs">
            <span className="align-middle">Visto</span>
            <EyeIcon className="ml-1 inline" />
          </div>
        )}
      </Link>
      <div className="flex flex-col items-center justify-center gap-3 p-3">
        <p className="text-lg">{name}</p>
        <ul className="flex flex-col gap-1 text-sm">
          {stats.map((stat) => (
            <li key={stat.type} className="text-center">
              {stat.text} {stat.value}
            </li>
          ))}
        </ul>
        <ButtonLink href={"/pokemon/" + id}>Ver más</ButtonLink>
      </div>
    </article>
  );
}
