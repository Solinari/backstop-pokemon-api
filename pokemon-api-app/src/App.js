import React, { useState, useRef } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import useStickyHook from "./hooks/useStickyHook";
import { getRandomPokemonId } from "./helpers/math";

function App() {
  const [randomPokemonId, setRandomPokemonId] = useState(null);
  const ref = useRef();

  function handleClick() {
    setRandomPokemonId(getRandomPokemonId());
  }
  return (
    <div className="App">
      <div
        className={`App-Header ${
          useStickyHook(ref) ? "App-Header-Sticky" : ""
        }`}
        ref={ref}
      >
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
