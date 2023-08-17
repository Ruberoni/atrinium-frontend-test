import PokemonsList from "@/src/components/PokemonsList";

export default async function Home() {
  return (
    <>
      <section className="p-primary container">
        <PokemonsList />
        <ul className="flex gap-y-8 gap-x-9 flex-wrap justify-center md:justify-start">
        </ul>
      </section>
    </>
  );
}
