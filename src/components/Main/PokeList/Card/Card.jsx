import React from 'react'
import { useState  } from 'react'
import { useEffect } from 'react'

const Card = (pokemon) => {
    const [bg, setBg] = useState('')
    const tipo = pokemon.pokemon.type
  
  
  

useEffect(() => {   
    
    switch (tipo){
        case "psychic":{ setBg("bg-violet-500/90"); break } //mewtwo
        case "grass":{ setBg("bg-emerald-600/90"); break } // chikorita
        case "electric":{ setBg("bg-amber-500/90"); break } // pikachu
        case "fire":{ setBg("bg-red-500/90"); break } //charizard
        case "water":{ setBg("bg-sky-600/90"); break } // lapras
        case "fighting":{ setBg("bg-red-800/90"); break } //machamp
        case "rock":{ setBg("bg-orange-800/90"); break } //sudowoodo
        case "normal":{ setBg("bg-neutral-300/90"); break } // pidgeotto
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


    

}, [pokemon.pokemon.type, tipo]); 
  

  
  
return (
   <div className={`card ${bg} bg-${tipo} w-80 h-[27rem] px-6 rounded-xl border-solid border-4 border-secondary/ `}>
            <div className='flex justify-center h-[20vh] select-none'>
                <img className="h-full"
                    src={pokemon.pokemon.image}
                    alt=""/>
            </div>
            <div id="description" className="space-y-4">
                <a href="#">
                    <h2 className="text-white font-semibold text-xl transition hover:text-yellow-300">
                        {pokemon.pokemon.name}
                    </h2>
                </a>
          <div className="flex gap-2 text-slate-500 text-sm select-none items-center">
            <span className='text-md font-bold'>Attacks: </span>
              <p>{pokemon.pokemon.firstMove}</p>
              <p>{pokemon.pokemon.secondMove}</p>
          </div>
                <div className="flex items-center justify-between font-semibold text-sm border-b border-slate-500 pb-6">
                     <span id="price" className="text-cyan-300 flex justify-between items-center">
                        Type: {pokemon.pokemon.type}
                    </span>
                    <span className="text-slate-500 flex justify-between items-center select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clipRule="evenodd" />
                        </svg>
                        ID: {pokemon.pokemon.id}
                    </span>
                </div>
                
        </div> 
        </div>  
 )
}

export default Card



//         <div className='h-[25vh] bg-black/70 w-[30vw] rounded-xl'>
//       <div>aasd</div> 
//   </div>