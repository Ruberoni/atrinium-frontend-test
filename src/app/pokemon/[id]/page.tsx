import { getQueryClient } from "@/src/utils";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import PokemonDetails from "./PokemonDetails";
import pokeapi from "@/src/services/pokeapi";
import { POKEAPI_GET_POKEMON_QUERY } from "@/src/constants";

export default async function Page({ params }: { params: { id: string } }) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery([POKEAPI_GET_POKEMON_QUERY, params.id], () =>
    pokeapi.getPokemonDetails(params.id),
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <PokemonDetails params={params} />
    </Hydrate>
  );
}
