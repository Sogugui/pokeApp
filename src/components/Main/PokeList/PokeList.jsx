import React, { useContext } from 'react';

import { pokeContext } from '../../../context/pokeContext';

import Card from './Card/Card';

const PokeList = () => {
  const {pokemons, setPokemons} = useContext(pokeContext) //extraccion de estado y funcion globales del contex
  
  return (
      <div className=' flex flex-wrap gap-5 px-2 md:px-24 lg:px-36 justify-center pt-5 h-[80vh] overflow-auto'>
        { 
          pokemons.length !== 0 
          ? pokemons.map((poke, index)=> <Card pokemon={poke} key={index} />)  
          : ""
        }
      </div>    
  )
}

export default PokeList