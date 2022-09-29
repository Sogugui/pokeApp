import React,{useEffect, useState} from 'react'
import { useParams, useLocation} from 'react-router-dom'
import queryString from 'query-string'


const Details = () => {
  const [bg, setBg] = useState('')
  const {id} = useParams();
  
  const location = useLocation();
  const { name = '' } = queryString.parse(location.search)
  const { type = '' } = queryString.parse(location.search)
  const { firstMove = '' } = queryString.parse(location.search)
  const { secondMove = '' } = queryString.parse(location.search)
  const { thirdMove = '' } = queryString.parse(location.search)
  const { fourthMove = '' } = queryString.parse(location.search)
  const { experience = '' } = queryString.parse(location.search)
  const { height = '' } = queryString.parse(location.search)
  const { weight = '' } = queryString.parse(location.search)
  const { ability1 = '' } = queryString.parse(location.search)
  const { ability2= '' } = queryString.parse(location.search)
  console.log("tipo: ", type)
  console.log("name: ", name)

  const imgSrc1 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
  const imgSrc2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${id}.gif`
  
    
useEffect(() => {   
  
  switch (type){
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


  

}, [setBg, type]); 




return (
<div className='flex justify-center pt-2 px-2 md:px-0 md:pt-10'> {/* padre de todo en DETAILS centrado en pc y responsive */}
  <div className={`bg-red-50/90 w-[100vw] md:w-[50vw] h-[70vh] md:h-[70vh]  rounded-xl border-solid border-4  border-secondary `}>
    <div className={'rounded-xl'}>
      <div className={` ${bg} bg-${type}  rounded-md h-[6rem]`}>
          <div className='flex justify-center h-[17vh] select-none overflow-hidden'>
              <img className="h-full max-w-xs hover:scale-110 transition"
                  src={imgSrc1}
                  alt=""
                />
              <img className="h-full max-w-xs hover:scale-110 transition"
                  src={imgSrc2}
                  alt=""
              />
          </div>
          <div  className="">
              <h2 className="text-black text-center font-semibold text-xl transition hover:text-yellow-300">
                      {name}
              </h2>
          </div>
          <div className="bg-blue-400 h-full w-full">testing</div>
      </div>
    </div>   
  </div> 
</div>
      
)
}

export default Details