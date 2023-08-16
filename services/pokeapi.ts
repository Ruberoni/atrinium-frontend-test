import { bulbasaur} from "@/mocks/pokemonDetails";
import { IPokemonDetail } from "@/types";

const pokeapi = {
  async getPokemonDetails(pokemonId: number | string): Promise<IPokemonDetail> {
    return new Promise<IPokemonDetail>((resolve) => resolve(bulbasaur));
  },
};

export default pokeapi;
