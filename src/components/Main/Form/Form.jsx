import React, { Component, useState, useEffect } from "react";
import { useForm } from 'react-hook-form';



const Form = () => {
  const [active, setActive] = useState(false)
  const [type, setType] = useState("type")
  const [tipo, setTipo] = useState("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //funcion para abrir/cerrar el menu desplegable en base a un estado Active
  const toggleActive = () =>{
    active
     ? setActive(false)
     : setActive(true)
  }

  const handlerType = (type) =>{
    setType(type);
    toggleActive();// llamamos a la funcion para que cuando detecte el cambio de estado cierre el menu desplegable.
  }

  useEffect(() => {
    
    setTipo(type)
  
  }, [type])
  

  //   id: '', number, required
  // name: '',text,  required minlenght = 3
  // image: '', text , required
  // typeOne: '',select, select required
  // typeTwo: '' select
  return (
    <form onSubmit={handleSubmit( data=>console.log(data) )}>
      <input {...register("id")} label="Id" type="number" name="id" required />
      <input {...register("name")} type="text" label="Name" name="name" required minlenght="3" />
      <input {...register("image")} label="image" type="text" name="sprite" required />
      
      
      <div className="relative inline-block text-left">
        <div>
          <button onClick={toggleActive} type="button" className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none outline-none " id="menu-button" aria-expanded="true" aria-haspopup="true">
            {type}{/* 
            <!-- Heroicon name: mini/chevron-down --> */}
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* <!--
          Dropdown menu, show/hide based on menu state.

          Entering: "transition ease-out duration-100"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
          Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95"
        --> */}
        {
          active
          ?<div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
            <div className="py-1 cursor-pointer">
              {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
              <p onClick={()=>handlerType("electric")} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 select-none" >Electric</p>
              <p onClick={()=>handlerType("fire")} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 select-none" >Fire</p>
              <p onClick={()=>handlerType("fighting")} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 select-none" >Fighting</p>
              <p onClick={()=>handlerType("water")} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 select-none" >Water</p>
              <p onClick={()=>handlerType("rock")} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 select-none" >Rock</p>
              <p onClick={()=>handlerType("flying")} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 select-none" >Flying</p>
              <p onClick={()=>handlerType("normal")} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 select-none" >Normal</p>
              <p onClick={()=>handlerType("grass")} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 select-none" >Grass</p>
              <p onClick={()=>handlerType("dark")} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 select-none" >Dark</p>
              <p onClick={()=>handlerType("ghost")} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 select-none" >Ghost</p>
              <p onClick={()=>handlerType("dragon")} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 select-none" >Dragon</p>
              <p onClick={()=>handlerType("fairy")} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 select-none" >Fairy</p>
              <p onClick={()=>handlerType("ground")} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 select-none" >Ground</p>
              <p onClick={()=>handlerType("ice")} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 select-none" >Ice</p>
              <p onClick={()=>handlerType("steel")} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 select-none" >Steel</p>
              <p onClick={()=>handlerType("poison")} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 select-none" >Poison</p>
              <p onClick={()=>handlerType("psychic")} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 select-none" >Psychic</p>
              
            </div>
          </div>
          :""
        }
        
      </div>
      <input {...register("firstMove ")} label="firstMove" type="text" name="secondMove" required />
      <input {...register("secondMove ")} label="firstMove" type="text" name="secondMove" />
      <input {...register("weight")} label="weight" type="number" name="weight" required/>
      <button className="px-2 py-1 bg-green-100 text-green-600 rounded-lg" type="submit">Create</button>
      <input {...register("type")} label="type" type="text" name="type" value={tipo} className="hidden"/>
    </form>
  );
}

export default Form
