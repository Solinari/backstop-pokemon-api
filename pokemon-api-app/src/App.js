import React from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <div className="App">
      <PokemonCard pokedexId={1} />

      <PokemonCard pokedexId={4} />

      <PokemonCard pokedexId={7} />
    </div>
  );
}

export default App;
