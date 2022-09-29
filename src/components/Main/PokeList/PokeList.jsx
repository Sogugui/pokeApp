import React, { useEffect, useState, useContext } from 'react';
import {useDebounce} from 'use-debounce';
import { pokeContext } from '../../../context/pokeContext';
import axios from 'axios';
import Card from './Card/Card';

const PokeList = () => {
  const {pokemons, setPokemons} = useContext(pokeContext) //extraccion de estado y funcion globales del contex
  const [input, setInput] = useState(""); // Para guardar los input
  const [debouncedText] = useDebounce(input, 1000);
  const [error, setError] = useState(false) // para poner mensaje de error cuando se repite el pokemon
  const [msg, setMsg] = useState('')

  //el useEffect consta de 3 partes 1= (args)=>  2={ bloque de instrucciones } 3= [ escucha algo ] array de dependencias 
  useEffect(() => {   
   
    if( debouncedText.length>0 ){ // condicional para que no haga peticiones si el input esta vacio
      getPokemon()
      
    }
    //eslint-disable-next-line
  }, [debouncedText]); //equivale a un componentDidUpdate. 
  

  const handlerError = (error) =>{
    setMsg(`Error - ${error}`)
    setError(true)
    setTimeout(() => {
      setError(false)
      setMsg("")
    }, 3500);
  }
  
  const getPokemon = async()=> {
    
    try{
      // Petición HTTP
      const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input.toLocaleLowerCase()}`);

      const newPokemon= { 
        id: data.id,
        name: data.name, 
        type: data.types[0].type.name,
        image: data.sprites.versions['generation-v']['black-white'].animated.front_default, 
        firstMove: data.moves[0].move.name,
        secondMove: data.moves[1].move.name,
        thirdMove: data.moves[2].move.name,
        fourthMove: data.moves[3].move.name,
        weight: data.weight,
        height: data.height,
        experience: data.base_experience,
        ability1: data.abilities[0].ability.name,
        ability2: data.abilities[1].ability.name

      }

        if(!pokemons.map(poke=>poke.name).includes(debouncedText) && !pokemons.map(poke=>poke.id.toString()).includes(debouncedText.trim())){ // condicional para que no se repitan los pokemon ya buscados. Comprobamos por nombre y por id. El id se pasa a string para que no de error la comprobacion y el trim lo pasamos para que no busque al hacer espacio.
          setPokemons( [newPokemon,...pokemons] ) //nuevo dato del imput al principio, viejo detras mejor exp User (ux/ui)
        }else{
          handlerError("This pokemon already exists")
        }

        

        

    }catch(error){
       console.log(error);
    }
    setInput("")// para limpiar el input una vez que se ejecuta la peticion
  }


  const handlerChange = (e) =>{
    if(e.target.value>199){
      handlerError(`416 - Request range. Unable to fetch pokemon: ${e.target.value}`)
    }else{
      setInput(e.target.value)
    }
    
  }

  return (
    <div className='flex flex-col justify-between overflow-auto'> 
      <div className="flex flex-col justify-start items-center gap-4 pt-3">
        <div className='flex flex-col gap-2 items-center'>
          <input placeholder='Search a pokemon...' onChange={(e)=>handlerChange(e)} value={input} type="text"/>
          {
            error 
            ? <p className='bg-red-200 text-red-600 px-3 py-1 rounded-lg'>{msg}</p>
            : ""
          }
        </div>
      </div>
      
      <div className=' flex flex-wrap gap-5 px-2 md:px-24 lg:px-36 justify-center pt-5 h-[80vh] overflow-auto'>
        { 
          pokemons.length !== 0 
          ? pokemons.map((poke, index)=> <Card pokemon={poke} key={index} />)  
          : ""
        }
      </div>
    </div>
    
  )
}

export default PokeList