import Image from "next/image";
import Link from "next/link";
import ButtonLink from "../ButtonLink";
import { IPokemonSummary } from "@/src/types";
import { POKEMON_STATS_NAME } from "@/src/constants";

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

  if (!image) {
    image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
  }

  return (
    <article className="w-[220px] rounded-lg shadow-lg shadow-gray-300">
      <Link
        href={"/pokemon/" + id}
        className="flex h-[100px] items-center justify-center overflow-hidden"
      >
        <Image
          src={image}
          alt={name}
          width="180"
          height="180"
          className="w-full h-[130px] object-contain"
        />
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
