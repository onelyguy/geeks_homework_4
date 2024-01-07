import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import classes from "./mainPage.module.css"
import Pagination from '../../components/Pagination/Pagination';

const MainPage = () => {
    const [pokemonList, setPokemonList] = useState([])
    console.log(pokemonList);

    const limit = 20

    const [offset, setOffset] = useState(1)

    let page = Math.floor(offset/limit) + 1

    if (page <= 0) {
        page = 1
        setOffset(1)
    }

    const handlePrev = () => {
        setOffset(prev => prev - limit)
    }

    const handleNext = () => {
        setOffset(prev => prev + limit)
    }

    const getPokemonList = async () => {
        try {
          const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
          return data.results
        } catch(e) {
          console.log('Error', e.message)
        }
    }

    useEffect(() => {
        getPokemonList(limit, offset).then((pokemonList) => setPokemonList(pokemonList))
    }, [limit, offset])

    return (
        <React.Fragment>
            <div className={classes.list}>
                {pokemonList.map(pokemon => <PokemonCard pokemonProps={pokemon}/>)}
            </div>
            <Pagination page={page} handlePrev={handlePrev} handleNext={handleNext}/>
        </React.Fragment>
    )
}

export default MainPage