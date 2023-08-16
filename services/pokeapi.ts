import { bulbasaur } from "@/mocks/pokemonDetails";
import { IPokemonDetail, IPokemonSummary } from "@/types";
import { POKEAPI_API_URL, POKEAPI_GET_POKEMONS_URL } from "@/constants";
import axios from "axios";

const pokeapiAxiosInstace = axios.create({
  baseURL: POKEAPI_API_URL,
});

const pokeapi = {
  async getPokemonDetails(pokemonId: number | string): Promise<IPokemonDetail> {
    return new Promise<IPokemonDetail>((resolve) => resolve(bulbasaur));
  },
  async getPokemonsList(): Promise<IPokemonSummary[]> {
    const data = await pokeapiAxiosInstace.get(POKEAPI_GET_POKEMONS_URL);

    return data.data.results as IPokemonSummary[];
  },
};

export default pokeapi;
