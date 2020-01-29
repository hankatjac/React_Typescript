import React, { useState, ChangeEvent, FormEvent } from 'react';


interface SearchBarProps {
  onSearch: (pokemon: string) => void;

}


export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [pokemonName, setPokemonName] = useState("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  };
  const searchForPokemon = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(pokemonName);
  };
  return (
    <form onSubmit={searchForPokemon}>
      <input
        value={pokemonName}
        placeholder="search for Pokemon"
        onChange={handleNameChange}
      />
      <button type="submit">Search</button>
    </form>

  );
}

