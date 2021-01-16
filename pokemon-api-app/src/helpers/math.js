export const getRandomPokemonId = () => {
  return Math.floor(Math.random() * Math.max(151)) + 1;
};
