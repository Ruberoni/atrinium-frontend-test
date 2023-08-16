import pokeapi from "@/services/pokeapi";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const pokemon = await pokeapi.getPokemonDetails(params.id);
  const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;

  return (
    <article className="container">
      <section className="flex">
        <div className="w- rounded-lg">
          <Image
            src={pokemonImage}
            alt={pokemon.name}
            width="300"
            height="300"
            className="w-full"
          />
        </div>
        <h1>{pokemon.name}</h1>
        <div>
          <h2>Estadísticas</h2>
          <ul>
            {pokemon.stats.map((stat) => (
              <li key={stat.name}>
                {stat.translatedName}: {stat.value}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Tipo</h2>
          <ul>
            {pokemon.types.map((type) => (
              <li key={type.name}>{type.translatedName}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Habilidades</h2>
          <ul>
            {pokemon.abilities.map((ability) => (
              <li key={ability.name}>{ability.translatedName}</li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
