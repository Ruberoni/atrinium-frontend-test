"use client";

import pokeapi from "@/src/services/pokeapi";
import Image from "next/image";

export default function PokemonDetails({ params }: { params: { id: string } }) {
  const { data: pokemon } = pokeapi.usePokemonsDetailsQuery(params.id);
  const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`;

  if (!pokemon) {
    return (
      <section className="container pt-primary">
        <h1 className="text-center text-2xl">Pokemon no encontrado</h1>
      </section>
    );
  }

  return (
    <article className="">
      <Hero name={pokemon.name} image={pokemonImage} />
      <section className="container mt-10">
        <ul className="mx-auto flex max-w-[500px] flex-wrap justify-center gap-10">
          {pokemon.stats.map((stat) => (
            <li
              key={stat.name}
              className="flex h-[120px] w-[120px] flex-col items-center justify-center rounded-full border-2 border-[#661800] bg-[#FFB8A2] text-lg font-bold text-[#661800] shadow-sm shadow-[#FFD7CA] transition duration-700 hover:-translate-y-3 hover:shadow-xl hover:shadow-[#FFD7CA]"
            >
              <span>{stat.translatedName}</span>
              <span>{stat.value}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="container mt-10 flex flex-wrap justify-center gap-16">
        <Card
          title="Tipo"
          items={pokemon.types.map((type) => ({
            id: type.id,
            text: type.translatedName,
          }))}
        />
        <Card
          title="Habilidades"
          items={pokemon.abilities.map((ability) => ({
            id: ability.name,
            text: ability.translatedName,
          }))}
        />
      </section>
    </article>
  );
}

interface HeroProps {
  image: string;
  name: string;
}

function Hero({ image, name }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b-2 border-b-primary-700 bg-primary-100">
      <div className="container relative z-10 flex flex-col items-center gap-4 py-16 md:flex-row md:gap-10">
        <Image src={image} alt={name} width="300" height="300" />
        <h1 className="text-primary-900 md:text-7xl lg:text-9xl">{name}</h1>
      </div>
      <img
        src={image}
        alt={name}
        className="absolute left-1/2 top-1/2 w-[90vh] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover opacity-30 mix-blend-luminosity md:w-4/5"
      />
    </section>
  );
}

interface CardProps {
  title: string;
  items: {
    id: number | string;
    text: string;
  }[];
}

function Card({ title, items }: CardProps) {
  return (
    <div className="w-full max-w-[300px] overflow-hidden rounded-3xl border-2 border-black">
      <h2 className="border-b-2 border-black bg-primary-100 text-center">
        {title}
      </h2>
      <ul className="p-primary text-center text-xl">
        {items.map((item) => (
          <li
            className="mx-auto w-fit after:mx-auto after:block after:h-[1px] after:w-[80%] after:bg-primary-700 last:after:content-none"
            key={item.id}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
