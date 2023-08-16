import PokemonCard from "@/components/cards/PokemonCard";
import { pokemonsList } from "@/mocks/pokemonSummary";

export default function Home() {
  return (
    <>
      <section className="p-primary container">
        <ul className="flex gap-y-8 gap-x-9 flex-wrap justify-center md:justify-start">
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
