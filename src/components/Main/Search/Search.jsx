import React, { useEffect, useState, useContext } from 'react';
import {useDebounce} from 'use-debounce';
import { pokeContext } from '../../../context/pokeContext';
import axios from 'axios';

const  Search = () => {
  const {pokemons, setPokemons} = useContext(pokeContext) //extraccion array de pokemons  globales del contex
  const [poke, setPoke] = useState("") //estado individual de pokemons para pintar  pokemon este componente search
  const [bg, setBg] = useState('')
  const [input, setInput] = useState(""); // Para guardar los input
  const [debouncedText] = useDebounce(input, 1000);
  const [error, setError] = useState(false) // para poner mensaje de error cuando se repite el pokemon
  const [msg, setMsg] = useState('')

  //el useEffect consta de 3 partes 1= (args)=>  2={ bloque de instrucciones } 3= [ escucha algo ] array de dependencias 
  useEffect(() => {   
   
    if( debouncedText.length>0 ){ // condicional para que no haga peticiones si el input esta vacio
      getPokemon()//buscar y setear dos cosas 1)setear array de pokemonS context - 2) seatear 1 pokemon en state poke
      
      switch (poke.type){
        case "psychic":{ setBg("bg-violet-500/90"); break } //mewtwo
        case "grass":{ setBg("bg-emerald-600/90"); break } // chikorita
        case "electric":{ setBg("bg-amber-500/90"); break } // pikachu
        case "fire":{ setBg("bg-red-500/90"); break } //charizard
        case "water":{ setBg("bg-sky-600/90"); break } // lapras
        case "fighting":{ setBg("bg-red-800/90"); break } //machamp
        case "rock":{ setBg("bg-orange-800/90"); break } //sudowoodo
        case "normal":{ setBg("bg-neutral-400/90"); break } // pidgeotto
        case "bug":{ setBg("bg-green-500"); break } // caterpie
        case "fairy":{ setBg("bg-pink-300/90"); break } // xerneas
        case "dark":{ setBg("bg-slate-600/90"); break } // umbreon 
        case "dragon":{ setBg("bg-indigo-600/90"); break } //dragonite 
        case "flying":{ setBg("bg-blue-500/90"); break } // 
        case "ghost":{ setBg("bg-purple-800/90"); break } // gastly
        case "ground":{ setBg("bg-yellow-800/90"); break } // dugtrio 
        case "ice":{ setBg("bg-cyan-200/90"); break } // articuno
        case "poison":{ setBg("bg-fuchsia-600/90"); break } // muk 
        case "steel":{ setBg("bg-slate-300/90"); break } // steelix 


        
         default:{ break}
    }

    }
    //eslint-disable-next-line
  }, [debouncedText, poke, poke.type, bg]); //equivale a un componentDidUpdate.
  
  
  

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
        experience: data.base_experience

      }

        if(!pokemons.map(poke=>poke.name).includes(debouncedText) && !pokemons.map(poke=>poke.id.toString()).includes(debouncedText.trim())){ // condicional para que no se repitan los pokemon ya buscados. Comprobamos por nombre y por id. El id se pasa a string para que no de error la comprobacion y el trim lo pasamos para que no busque al hacer espacio.
          setPokemons( [newPokemon,...pokemons] ) //nuevo dato del imput al principio, viejo detras mejor exp User (ux/ui)
          setPoke(newPokemon) //setear state indivual de pokemon para ser pintado en este componente search
        }else{
          handlerError("This pokemon already exists")
        }

        

        

    }catch(error){
       console.log(error);
    }
    setInput("")// para limpiar el input una vez que se ejecuta la peticion
  }


  const handlerChange = (e) =>{
    if(e.target.value>300){
      handlerError(`416 - Request range. Unable to fetch pokemon: ${e.target.value}`)
    }else{
      setInput(e.target.value)
    }
    
  }

  return (
    <div className='flex flex-col justify-between overflow-auto'> 
      <div className="flex flex-col justify-start items-center gap-4 pt-3">
        <div className='flex flex-col gap-2 items-center'>
          <div className='flex gap-3 items-center'>
            <input placeholder='Search a pokemon...' onChange={(e)=>handlerChange(e)} value={input} type="text"/>
            <i className="fa-solid fa-magnifying-glass text-white text-2xl"></i>
          </div> 
          {
            error 
            ? <p className='bg-red-200 text-red-600 px-3 py-1 rounded-lg'>{msg}</p>
            : ""
          }
        </div>
      </div>
      
      <div className=' flex flex-wrap gap-5 px-2 md:px-24 lg:px-36 justify-center pt-5 h-[80vh] overflow-auto'>
        { 
          poke !== ""
          ? <div className={`animate__animated animate__bounceInRight bg-red-50/90 w-80 h-[30vh]  rounded-xl border-solid border-4  border-secondary `}>
                  <div className={'rounded-xl'}>
                  <div className={` ${bg} bg-${poke.type}  rounded-md h-[6rem]`}>
                      <div className='flex justify-center h-[17vh] select-none relative overflow-hidden bg-no-repeat bg-cover max-w-xs'>
                          <img className="h-full max-w-xs hover:scale-110 transition"
                              src={poke.image}
                              alt=""/>
                      </div>
                      <div  className="">
                          <h2 className="text-black text-center font-semibold text-xl transition hover:text-yellow-300">
                                  {poke.name}
                          </h2>
                    <div className="flex gap-2 text-black-100 text-sm select-none items-center">
                      <span className='text-md font-bold pl-3'>Attacks: </span>
                        <p>{poke.firstMove}</p>
                        <p>{poke.secondMove}</p>
                    </div>
                          <div className="flex items-center justify-between font-semibold text-sm pl-2">
                               <span className={`text-slate-50 ${bg} bg-${poke.type} rounded-md border-solid border-[3px] px-6 p-1 flex items-center`}>
                                   {poke.type}
                              </span>
                              <span className="text-black-500 flex justify-between items-center select-none pr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                          clipRule="evenodd" />
                                  </svg>
                                  ID: {poke.id}
                              </span>
                          </div>
                          </div>
                          </div>   
                  </div> 
                  </div>  
          : ""
        }
      </div>
    </div>
    
  )
}

export default Search
