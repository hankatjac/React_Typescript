import React from 'react';
import {render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchResult } from './SearchResult';
import { ditto } from '../testing/data/ditto';


test("Show pokemon name ", ()=> {
 
    const {queryByText} = render(<SearchResult pokemon={ditto} />);

    expect(queryByText(ditto.name)).toBeInTheDocument();
});

test("Show pokemon image ", ()=> {
 
    const {queryByAltText} = render(<SearchResult pokemon={ditto} />);

    expect(queryByAltText(ditto.name)).toBeInTheDocument();
});

test("Show pokemon abilities ", ()=> {
 
    const {queryByText} = render(<SearchResult pokemon={ditto} />);

    expect(queryByText(ditto.abilities[0].ability.name)).toBeInTheDocument();
});

test("Pokemon not found ", ()=> {
 
    const {queryByText} = render(<SearchResult pokemon={null} />);

    expect(queryByText("no pokemon found"));
});