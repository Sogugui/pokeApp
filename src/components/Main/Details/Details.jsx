import React,{useEffect, useState} from 'react'
import { useParams, useLocation} from 'react-router-dom'
import queryString from 'query-string'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

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
  <div className='animate__animated animate__fadeIn font-poppins flex justify-center pt-2 px-2 md:px-0 md:pt-10 select-none'> {/* padre de todo en DETAILS centrado en pc y responsive */}
    <div className={`bg-red-50/90 w-[100vw] md:w-[50vw] h-[70vh] md:h-[55vh]  rounded-md border-solid border-4 `}>
      <div className={`${bg} h-2/5 text-white flex flex-col relative justify-between items-center rounded-md`}>
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
        <div className='absolute bottom-0 translate-y-5 z-10 w-full flex justify-center'>
          <span className='font-semibold text-2xl text-black bg-gray-100  hover:-rotate-[9deg] px-3 py-2 rounded-md tracking-widest uppercase'>{name}</span>
        </div>
      </div>

      <div className="rounded-md h-3/5 flex justify-between">
        <div className='relative h-full w-full'> {/* este div necesita altura y anchura definidas para que swiper se alimente */}
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className=' bg-white h-full w-full z-0'
        >
        <SwiperSlide className='flex '>
          <div className="h-full w-full flex flex-col items-center justify-evenly">
              <div className="flex gap-1 items-center">
                <img className="max-h-10" src="https://img.icons8.com/fluency/344/pokeball.png"/>
                <p className={`${bg} text-white rounded-md px-2 py-1 text-xl`}>{type}</p>
              </div>
              <div className="flex gap-1 items-center">
                <img className="max-h-10" src="https://img.icons8.com/cotton/344/security-pass.png"/>
                <p className="text-xl">{id} - ID</p>
              </div>
          </div>
          <div className="h-full w-full flex flex-col items-center justify-evenly">
              <div className="flex gap-1 items-center">
                <img className="max-h-10" src="https://img.icons8.com/plasticine/452/stationery.png"/>
                <p className="text-xl">{height}0cm</p>
              </div>
              <div className="flex gap-1 items-center">
                <img className="max-h-10" src="https://img.icons8.com/fluency/452/industrial-scales.png"/>
                <p className="text-xl">{weight}kg!</p>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex '>
          <div className="h-full w-full flex flex-col items-center justify-evenly">
            <div className="flex gap-1 items-center">
                  <img className="max-h-10" src="https://img.icons8.com/fluency/48/000000/sword.png"/>
                  <p className="text-xl">{firstMove}</p>
            </div>
            <div className="flex gap-1 items-center">
                <img className="max-h-10" src="https://img.icons8.com/emoji/344/star-emoji.png"/>
                <p className="text-xl">{secondMove}</p>
            </div>  
          </div>
            <div className="h-full w-full flex flex-col items-center justify-evenly">
              <div className="flex gap-1 items-center">
                <img className="max-h-10" src="https://img.icons8.com/external-wanicon-flat-wanicon/344/external-posion-halloween-wanicon-flat-wanicon.png"/>
                <p className="text-xl">{thirdMove}</p>
            </div>
            <div className="flex gap-1 items-center">
                <img className="max-h-10" src="https://img.icons8.com/stickers/344/shield.png"/>
                <p className="text-xl">{fourthMove}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
      </div>
    </div>
  </div>
      
)
}

export default Details