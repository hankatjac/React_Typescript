import React from "react";

interface PokeMonSearchProps {
    name:string,
    numberofPokeMons:number
}
export const PokeMonSearch: React.FC<PokeMonSearchProps>= (props)=>{

    return (
        <div>
            <p>User {props.name} has {props.numberofPokeMons} pokemon} </p>
            <input type="text"  />
            <button className ="my-button" >

            </button>
        </div>

    )
}