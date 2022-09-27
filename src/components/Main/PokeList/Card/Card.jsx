import React from 'react'
import { useState  } from 'react'
import { useEffect } from 'react'

const Card = (pokemon) => {
  const [bg, setBg] = useState("purple-600")
  
  

  useEffect(() => {   
    const background = () =>{
      let pokeColor
      switch(pokemon.pokemon.type) {
        case "electric":
          pokeColor = "electrico" //nombre del color pasado por tailwind.config
          break;
        case "grass":
          pokeColor = "planta"
          break;
          case "normal":
          pokeColor = "normal"
          break;


        default:
          // code block
      }
      console.log("el color del pokemon en la funcion es: ", pokeColor)
      setBg(pokeColor)
    }
    background();
}, [pokemon.pokemon, bg]); //equivale a un componentDidUpdate. Aqui va todo lo que usemos dentro de useEffect  
  const handlerClick = () =>{
    console.log(pokemon.pokemon.type)
    //console.log(type)
    //console.log(type)
  }


  //data.name,data.sprites.front_default,data.moves[0].move,data.moves[1].move,data.id,data.types[0].type,data.weight
  
  return (<div class="card bg-[#414141] w-80 h-[32rem] rounded-xl p-6 space-y-4">
            <a href="#">
                <img class="w-full h-64 rounded-md transition hover:bg-[#DFDFDF]"
                    src={pokemon.pokemon.image}
                    alt=""/>
            </a>
            <div id="description" class="space-y-4">
                <a href="#">
                    <h2 class="text-white font-semibold text-xl transition hover:text-cyan-300">
                        {pokemon.pokemon.name}
                    </h2>
                </a>
                <p class="text-slate-500 text-sm select-none">Attacks:
                 <p>{pokemon.pokemon.firstMove}</p>
                <p>{pokemon.pokemon.secondMove}</p>
                </p>
                <div class="flex items-center justify-between font-semibold text-sm border-b border-slate-500 pb-6">
                     <span id="price" class="text-cyan-300 flex justify-between items-center">
                        Type: {pokemon.pokemon.type}
                    </span>
                    <span class="text-slate-500 flex justify-between items-center select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clip-rule="evenodd" />
                        </svg>
                        ID: {pokemon.pokemon.id}
                    </span>
                </div>
                
        </div> 
        </div> 
  )
}

export default Card

{/* <div class="card bg-[#15263F] w-80 h-[32rem] rounded-xl p-6 space-y-4">
            <a href="#">
                <img class="w-full h-64 rounded-md transition hover:bg-cyan-300"
                    src="{pokemon.pokemon.image}"
                    alt="">
            </a>
            <div id="description" class="space-y-4">
                <a href="#">
                    <h2 class="text-white font-semibold text-xl transition hover:text-cyan-300">
                        {pokemon.pokemon.name}
                    </h2>
                </a>
                <p class="text-slate-500 text-sm select-none">Attacks: <p>{pokemon.pokemon.firstMove}</p>
    <p>{pokemon.pokemon.secondMove}</p>
    </p>
                <div class="flex items-center justify-between font-semibold text-sm border-b border-slate-500 pb-6">
                    <span id="price" class="text-cyan-300 flex justify-between items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 320 512" fill="#67E7F9">
                            <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                        </svg>
                        Type: {pokemon.pokemon.type}
                    </span>
                    <span class="text-slate-500 flex justify-between items-center select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clip-rule="evenodd" />
                        </svg>
                        ID: {pokemon.pokemon.id}
                    </span>
                </div>
                <div class="flex text-sm items-center">
                    <img src="https://i.pravatar.cc/30?img=56" alt="avatar" class="rounded-full border border-white">
                    <span class="ml-2 text-slate-500">
                        Creation of
                        <a href="#" class="text-gray-300 transition hover:text-cyan-300">
                            d855
                        </a>
                    </span>
                </div>
        </div> */}



   {/*<div className=' w-[40vw] flex h-[15vh]'>
  //   {/* <div onClick={handlerClick} className={`${bg} w-1/2`}> */}
      {/* <button className='bg-gray-200'>izquierdo</button>
  //   </div>
  //   <div className='bg-blue-500 w-3/4'>derecho</div>
  // </div> */}


{/* 
{/* <div>
    <p>{pokemon.pokemon.name}</p>
    <p>ID: {pokemon.pokemon.id}</p>
    <p>Type: {pokemon.pokemon.type}</p>
    <div> 
    <h3>Attacks: </h3>
    <p>{pokemon.pokemon.firstMove}</p>
    <p>{pokemon.pokemon.secondMove}</p>
    </div>      
    <img src={pokemon.pokemon.image} alt="" />
    </div>  */}