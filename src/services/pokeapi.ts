import { IPokemonDetail, IPokemonSummary } from "@/src/types";
import { POKEAPI_API_URL, POKEAPI_GET_POKEMONS_URL } from "@/src/constants";
import axios from "axios";
import { formatPokemonDetailsData, formatPokemonsSummaryData } from "../utils";

const pokeapiAxiosInstace = axios.create({
  baseURL: POKEAPI_API_URL,
});

const pokeapi = {
  async getPokemonDetails(pokemonId: number | string): Promise<IPokemonDetail> {
    const pokemonData = await pokeapiAxiosInstace.get(
      POKEAPI_GET_POKEMONS_URL + "/" + pokemonId,
    );

    const abilitiesDataPromise = Promise.all(
      pokemonData.data.abilities.map((ability: any) =>
        axios.get(ability.ability.url),
      ),
    );

    const typesDataPromise = Promise.all(
      pokemonData.data.types.map((type: any) => axios.get(type.type.url)),
    );

    const [abilitiesData, typesData] = await Promise.all([
      abilitiesDataPromise,
      typesDataPromise,
    ]);

    const pokemonDetailsDataFormatted = formatPokemonDetailsData(
      pokemonData.data,
      abilitiesData.map((item) => item.data),
      typesData.map((item) => item.data),
    );

    return pokemonDetailsDataFormatted;
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