import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import pokeball from '../../../assets/icons8-pokeball-48 (1).png'
import pokedex from '../../../assets/icons8-pokedex-16.png'
import egg from '../../../assets/icons8-huevo-de-pascua-50.png'
import pokeballOpen from '../../../assets/icons8-pokeball-abierto-48.png'

const Nav = () => {
  //variables
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleBar = () =>{
    showSidebar 
      ? setShowSidebar(false)
      : setShowSidebar(true)
  }

  return (
    <>
      {/* phone navigation */}
      <div className='lg:hidden  select-none bg-slate-100'>
        <div className='flex items-center gap-2 text-xl p-4'>
          <img src={pokeball} alt="img"/>
          <Link  to="/" className=''>
            <span>Poke</span>{' '}
            <span className='font-semibold text-action'>App</span>
          </Link>
        </div>
        {showSidebar ? (
          <button
            className='flex text-5xl text-white items-center cursor-pointer fixed right-12 top-0 z-50'
            onClick={toggleBar}
          >
            x
          </button>
        ) : (
          <svg
            onClick={toggleBar}
            className='fixed  z-30 flex items-center cursor-pointer right-10 top-4'
            viewBox='0 0 100 80'
            width='30'
            height='30'
          >
            <rect width='100' height='10'></rect>
            <rect y='30' width='100' height='10'></rect>
            <rect y='60' width='100' height='10'></rect>
          </svg>
        )}

        <div
          className={`top-0 right-0 w-[100vw] bg-black/90
                  text-white fixed h-full z-40  ease-in-out duration-300
                  flex flex-col justify-start items-center
                  pt-20 gap-20
        ${showSidebar ? 'translate-x-0 ' : 'translate-x-full'}`}
        >
          <div className='flex gap-4 w-1/3'>
            <Link onClick={toggleBar} to="/" className='text-2xl'>Home</Link>
          </div>
          <div className='flex gap-4 w-1/3'>
            <Link to ="/list" className='text-2xl'>List</Link>
          </div>
          <div className='flex gap-4 w-1/3'>
            <Link onClick={toggleBar} to="/new" className='text-2xl'>Create Pokemon</Link>
          </div>
        </div>
      </div>

      {/* PC navigation */}
      <div className='hidden lg:flex justify-between px-24 py-4 bg-neutral-100/90 shadow-md items-center select-none'>
        <div className='flex items-center gap-2 text-xl group'>
          <img src={pokeball} alt="img" className='text-xl group-hover:rotate-[-17deg] group-hover:scale-[1.15] duration-500 group-hover:text-yellow-700'/>
          <Link onClick={toggleBar} to="/" className='text-2xl'>
            Poke <span className='text-action font-semibold'>App</span>
          </Link>
        </div>
        <div className='flex gap-14 text-xl items-center'>
          <Link onClick={toggleBar} to="/search" className='flex items-center gap-2 group'>
            <img  src={pokedex} alt="img" className='fa-solid fa-users text-2xl group-hover:rotate-[17deg] scale-0 group-hover:scale-[1.75] duration-500 group-hover:text-green-700 group-hover:-translate-x-1'/>
            <span>Search</span>
          </Link>
          <Link onClick={toggleBar} to="/" className='flex items-center gap-2 group'>
            <img src={pokeballOpen} alt="img" className=' text-2xl group-hover:rotate-[17deg] scale-0 group-hover:scale-[1.15] duration-500 group-hover:text-amber-800 group-hover:-translate-x-1'/>
            <span>List</span>
          </Link>
          <Link onClick={toggleBar} to="/new" className='flex items-center gap-2 group'>
            <img  src={egg} alt="img" className=' text-2xl group-hover:rotate-[17deg] scale-0 group-hover:scale-[1.15] duration-500 group-hover:text-sky-600 group-hover:-translate-x-1'/>
            <span>Create Pokemon</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Nav
