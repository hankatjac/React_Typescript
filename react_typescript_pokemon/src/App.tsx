import React, { useState } from "react";
import "./App.css";
import { pokeApi, Pokemon } from "./Api/pokeapi";
import { SearchBar } from "./component/Searchbar";
import { SearchResult } from "./component/SearchResult";



const App: React.FC = () => {
  // const [pokemonName, setPokemonName] = useState("");
  // const [pokemonImage, setPokemonImage] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon | undefined | null>(undefined);

  // const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setPokemonName(e.target.value);
  // };
  // const searchForPokemon = async(pokemonName:string) => {
  //   const response = await pokeApi.getPokemon(pokemonName);
  //   setPokemonImage(response.data.sprites.front_default)
  // };

  const searchForPokemon = async (pokemonName: string) => {
    try {
      const response = await pokeApi.getPokemon(pokemonName);
      setPokemon(response.data)
    }
    catch{
      setPokemon(null);
    }
  };

  return (
    <div className="App">
      {/* <form onSubmit={searchForPokemon}>
        <input
          value={pokemonName}
          placeholder="search for Pokemon"
          onChange={handleNameChange}
        />
        <button type="submit">Search</button>
      </form> */}
      {/* use component */}
      <SearchBar onSearch={searchForPokemon}></SearchBar>
      {/* <img src= {pokemonImage} alt=""/> */}
      <SearchResult pokemon={pokemon} />
    </div>
  );
};

export default App;
