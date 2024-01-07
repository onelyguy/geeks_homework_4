import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonInfoPage = ({ pokemonName }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null)
  const [loading, setLoading] = useState(true)

  const getPokemonInfo = async () => {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      setPokemonInfo(data)
    } catch (e) {
      console.log('Ошибка', e.message)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getPokemonInfo()
  }, [pokemonName])

  return (
    <div>
        {
            loading
                ?
                (<p>loading...</p>)
                :
                <>
                    <div>
                        <p>Name: {pokemonInfo.name}</p>
                        <p>Type: {pokemonInfo.types.map(value => value.type.name).join(', ')}</p>
                        <p>Stats: {pokemonInfo.stats.map(value => value.stat.name).join(', ')}</p>
                        <p>Abilities: {pokemonInfo.abilities.map(value => value.ability.name).join(', ')}</p>
                        <p>Some moves: {pokemonInfo.moves.slice(0, 5).map(value => value.move.name).join(', ')}</p>
                    </div>
                </>
        }
    </div>    
  );
};

export default PokemonInfoPage;
