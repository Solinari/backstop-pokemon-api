import React, { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { getRandomPokemonId } from "./helpers/math";

function App() {
  const [randomPokemonId, setRandomPokemonId] = useState(null);

  function handleClick() {
    setRandomPokemonId(getRandomPokemonId());
  }
  return (
    <div className="App">
      <div className="App-Header">
        <button onClick={handleClick}>Random Pokemon</button>
      </div>
      <PokemonCard pokedexId={1} />
      <PokemonCard pokedexId={4} />
      <PokemonCard pokedexId={7} />
      {randomPokemonId && <PokemonCard pokedexId={randomPokemonId} />}
    </div>
  );
}

export default App;
