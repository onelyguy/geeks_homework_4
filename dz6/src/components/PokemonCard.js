import React, { useState, useEffect } from "react";
import classes from './pokemonCards.module.css'

const PokemonCard = ({pokemons}) => {
    const [pokemonDetails, setPokemonDetails] = useState([]);

    useEffect(() => {
      const getPokemonDetails = (index) => {
        if (index < pokemons.length) {
          fetch(pokemons[index].url)
            .then(response => response.json())
            .then(data => {
              setPokemonDetails((prevDetails) => [...prevDetails, data]);
              getPokemonDetails(index + 1);
            })
        }
      };
    
      getPokemonDetails(0);
    }, [pokemons]);
    
    return (
        <div className={classes.cardWrapper}>
            {pokemonDetails.map((details, index) => (
                <div key={index} className={classes.card}>
                    <img 
                      src={details.sprites.other.dream_world.front_default} 
                      alt={details.name} 
                    />
                    <h3>{details.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default PokemonCard