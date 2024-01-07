import React, { useState, useEffect } from 'react';
import classes from "./pokemonCard.module.css";
import axios from 'axios';
import PokemonInfo from '../../pages/PokemonInfo/PokemonInfo';

const PokemonCard = ({pokemonProps}) => {
    const [imgPokemon, setImgPokemon] = useState([])
    const [isInfoOpen, setIsInfoOpen] = useState(false)

    const getPokemon = async () => {
        try {
          const { data } = await axios.get(pokemonProps.url)
          return data
        } catch(e) {
          console.log('Error', e.message)
        }
    }

    const openInfo = () => {
        setIsInfoOpen(true)
    };
    
    const closeInfo = () => {
        setIsInfoOpen(false)
    };
    
    useEffect(() => {
        getPokemon().then((pokemon) => {
            setImgPokemon(pokemon.sprites.other.dream_world.front_default)
        });
    }, [pokemonProps.url])

    return (
        <div className={`${classes.card} ${isInfoOpen ? classes.open : ''}`}>
            <p>Pokemon name: {pokemonProps.name}</p>
            <img src={imgPokemon} alt={pokemonProps.name}/>
            <button onClick={openInfo}>Подробнее</button>

            {isInfoOpen && (
                <div className={classes.info}>
                    <PokemonInfo pokemonName={pokemonProps.name} />
                <button onClick={closeInfo}>Закрыть</button>
                </div>
            )}    
        </div>
    )
}

export default PokemonCard