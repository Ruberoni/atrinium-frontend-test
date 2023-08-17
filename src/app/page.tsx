import PokemonsList from "@/src/components/PokemonsList";

export default async function Home() {
  return (
    <>
      <section className="p-primary container">
        <PokemonsList />
      </section>
    </>
  );
}
