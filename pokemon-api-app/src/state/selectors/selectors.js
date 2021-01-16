export const hasPokemonById = (id, store) =>
  store.pokemonReducer.pokemon.has(id);

export const getPokemonById = (id, store) =>
  store.pokemonReducer.pokemon.get(id);
