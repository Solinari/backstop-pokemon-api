import { SET_NEW_POKEMON } from "../../constants/actionTypes";

export const setNewPokemon = (pokedexEntry) => ({
  type: SET_NEW_POKEMON,
  payload: { pokedexEntry },
});
