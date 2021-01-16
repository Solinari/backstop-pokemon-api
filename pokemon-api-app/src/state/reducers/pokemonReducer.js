import { SET_NEW_POKEMON } from "../../constants/actionTypes";

const initialState = {
  pokemon: new Map(),
};
function pokemonReducer(state, action) {
  switch (action.type) {
    case SET_NEW_POKEMON: {
      const newState = { ...state };

      const newEntry = action.payload.pokedexEntry;

      if (!newState.pokemon.has(newEntry.id)) {
        newState.pokemon.set(newEntry.id, newEntry);
      }

      return newState;
    }
    default:
      return initialState;
  }
}

export default pokemonReducer;
