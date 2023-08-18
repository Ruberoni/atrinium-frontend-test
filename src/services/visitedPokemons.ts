import { LS_KEY_VISITED_POKEMONS } from "../constants";

const visitedPokemonsService = {
  getVisitedPokemons(): number[] {
    return JSON.parse(localStorage.getItem(LS_KEY_VISITED_POKEMONS) || "[]");
  },
  isVisited(id: number): boolean {
    const seenPokemons = this.getVisitedPokemons();
    return seenPokemons.some((item) => item === id);
  },
  addVisited(id: number): void {
    const seenPokemons = this.getVisitedPokemons();
    if (!seenPokemons.find((item) => item === id)) seenPokemons.push(id);
    localStorage.setItem(LS_KEY_VISITED_POKEMONS, JSON.stringify(seenPokemons));
  },
};

export default visitedPokemonsService;
