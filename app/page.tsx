import PokemonCard from "@/components/cards/PokemonCard";
import { pokemonsList } from "@/mocks/pokemon";

export default function Home() {
  return (
    <>
      <section className="p-primary">
        <ul className="flex gap-4 flex-wrap items-center justify-center md:justify-between">
          {pokemonsList.map((pokemon) => (
            <li key={pokemon.id} className="w-fit">
              <PokemonCard {...pokemon} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
