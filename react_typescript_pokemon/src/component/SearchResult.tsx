import React, { useEffect, useState } from 'react';
import { Pokemon, pokeApi, PokemonSpecies } from '../Api/pokeapi';


interface SearchResultProps {
    pokemon: Pokemon | undefined | null;
}

export const SearchResult: React.FC<SearchResultProps> = ({ pokemon }) => {
    const [species, setSpecies] = useState<PokemonSpecies | undefined>(undefined);
    useEffect(() => {
        const fetchSpecies = async () => {
            if (pokemon) {
                const response = await pokeApi.getPokemonSpecies(pokemon);
                setSpecies(response.data);
            }
        }
        fetchSpecies();
    }, [pokemon])


    if (pokemon === undefined) {
        return <></>
    }
    if (pokemon === null) {
        return <div>no pokemon find</div>
    }
    return (
        <div style={{ width: "18rem", margin: "auto" }}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h1>{pokemon.name}</h1>
            <p>{species?.flavor_text_entries.filter(f => {
                return f.language.name === "en"
            })[0].flavor_text}</p>
            <h2>Abilities</h2>
            <div>
                {pokemon.abilities.map(ability => { return <div key={ability.ability.url}>{ability.ability.name}</div> })}
            </div>
        </div>
    );
}