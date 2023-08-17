import { bulbasaur } from "@/src/mocks/pokemonDetails";
import { IPokemonDetail, IPokemonSummary } from "@/src/types";
import { POKEAPI_API_URL, POKEAPI_GET_POKEMONS_URL } from "@/src/constants";
import axios from "axios";
import { formatPokemonsSummaryData } from "../utils";

const pokeapiAxiosInstace = axios.create({
  baseURL: POKEAPI_API_URL,
});

const pokeapi = {
  async getPokemonDetails(pokemonId: number | string): Promise<IPokemonDetail> {
    return new Promise<IPokemonDetail>((resolve) => resolve(bulbasaur));
  },
  async getPokemonsSummaryList(): Promise<IPokemonSummary[]> {
    const data = await pokeapiAxiosInstace.get(POKEAPI_GET_POKEMONS_URL);

    const allPokemonsData = await Promise.all(
      data.data.results.map((pokemon: any) => axios.get(pokemon.url)),
    );
    const pokemonsDataFormatted = formatPokemonsSummaryData(
      allPokemonsData.map((axiosResponse) => axiosResponse.data),
    );

    return pokemonsDataFormatted;
  },
};

export default pokeapi;
