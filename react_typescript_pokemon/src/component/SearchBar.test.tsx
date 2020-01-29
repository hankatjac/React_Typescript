import React from 'react';
import {render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from './Searchbar';

test("can get pokemon name on submit", ()=> {
    let pokemonName="";
    const {getByRole} = render(<SearchBar onSearch={name => pokemonName = name} />);
    userEvent.type(getByRole("textbox"),"pikachu");
    userEvent.click(getByRole("button"));
    expect(pokemonName).toBe("pikachu");
});