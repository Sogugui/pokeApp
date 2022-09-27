import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card/Card';

const PokeList = () => {
  const [pokemon, setPokemon] = useState([]); // Para guardar el dato a buscar
  const [input, setInput] = useState("pikachu"); // Para guardar los posts
  
  useEffect(() => {   
      //aca tiene que ir el <Card  pokemon={pokemon}/>
  }, [pokemon]); //equivale a un componentDidUpdate. Aqui va todo lo que usemos dentro de useEffect
  
  
  const getPokemon = async()=> {
    
    try{
      // Petición HTTP
      const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
      

      // // Guarda en el state el objeto del resultado. Procesa los datos
      // setPokemon([data.name,data.sprites.front_default,data.moves[0].move,data.moves[1].move,data.id,data.types[0].type,data.weight]) // seteamos el pokemon pasandole data con las propiedades a mostrar (nombre e img)

      setPokemon({
        name: data.name,
        image: data.sprites.front_default,
        firstMove: data.moves[0].move.name,
        secondMove: data.moves[1].move.name,
        id: data.id,
        type: data.types[0].type.name,
        weight: data.weight
      }, )


    }catch(error){
       console.log(error);
    }
    setInput("")// para limpiar el input una vez que se ejecuta la peticion
  }


  const handlerChange = (e) =>{
    setInput(e.target.value)
  }

  return (
    <div className="flex flex-col justify-start items-center h-screen gap-4 mt-10 bg-black/50">
      <div className='flex gap-2'>
        <label htmlFor="info">Pokemon:</label>
        <input onChange={(e)=>handlerChange(e)} value={input} type="text"/>
        <button onClick={getPokemon} className="bg-gray-200 text-red-500 font-semibold tracking-wider" >Buscar</button>
      </div>
      
      { 
        pokemon.length !== 0 ? <Card pokemon={pokemon}/> : ""
        
      }
      
    </div>
  )
}

export default PokeList