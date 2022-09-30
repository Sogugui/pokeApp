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
    <div className={`bg-red-50/90 w-[100vw] md:w-[50vw] h-[70vh] md:h-[60vh]  rounded-xl border-solid border-4  border-secondary `}>
      <div className="bg-blue-400  h-2/5">a</div>
      <div className="bg-green-400 h-3/5 flex justify-between">
      <div className='relative h-full w-full'> {/* este div necesita altura y anchura definidas para que swiper se alimente */}
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className=' bg-white h-full w-full z-0'
      >
        <SwiperSlide className='flex bg-red-500'>
          <div className="h-full w-full flex flex-col items-center justify-evenly bg-gray-200">
              <p>{firstMove}</p>
              <p>{secondMove}</p>
              
          </div>
          <div className="h-full w-full flex flex-col items-center justify-evenly bg-orange-200">
              <div className="flex gap-1 items-center">
                <img className="max-h-10" src="https://img.icons8.com/fluency/48/000000/sword.png"/>
                <p className="text-xl">{thirdMove}</p>
              </div>
              <p>{fourthMove}</p>              
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center bg-amber-500'>
          Slide 2
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center bg-blue-500'>
          Slide 3
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center bg-gray-500'>
          Slide 4
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center bg-green-500'>
          Slide 5
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center bg-red-500'>
          Slide 6
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center bg-red-500'>
          Slide 7
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center bg-red-500'>
          Slide 8
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center bg-red-500'>
          Slide 9
        </SwiperSlide>
      </Swiper>
    </div>
      </div>
    </div>
  </div>
      
)
}

export default Details