import React, {useContext} from "react";
import { useForm } from 'react-hook-form';
import { pokeContext } from "../../../context/pokeContext";



const Form = () => {
  const {pokemons, setPokemons} = useContext(pokeContext) //extraccion de estado y funcion globales del contex
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const sendContext = (data) =>{
    console.log(data) //recibe valores de los input del form como obj
    setPokemons([...pokemons,data])
  }

  return (
    <div className={"flex items-center content-around justify-center"}>
    <form onSubmit={handleSubmit( data=> sendContext(data))}  className={"flex justify-center content-around  flex-col w-80 px-10 py-10 items-center gap-3"}>
      <h2 className=" text-slate-50 text-md font-bold">Create your own Pokémon</h2>
      <input  className="w-full px-4 py-2 bg-white hover:bg-gray-200" {...register("id")} label="Id" type="number" name="id" placeholder="id" required  />
      <input  className="w-full px-4 py-2 bg-white hover:bg-gray-200" {...register("name")} type="text" label="Name" name="name" placeholder="Name" required minlenght="3"  />
      <input  className="w-full px-4 py-2 bg-white hover:bg-gray-200" {...register("image")} label="image" type="text" name="image" placeholder="url image"required />
      <input  className="w-full px-4 py-2 bg-white hover:bg-gray-200" {...register("firstMove")} label="firstMove" placeholder="First move" type="text" name="firstMove" required />
      <input  className="w-full px-4 py-2 bg-white hover:bg-gray-200" {...register("secondMove")} label="firstMove" type="text" placeholder="Second move" name="secondMove" />
      <input  className="w-full px-4 py-2 bg-white hover:bg-gray-200" {...register("weight")} label="weight" type="number" name="weight" placeholder="Weight" required/>
      <select className="w-full px-4 py-2 bg-white rounded-md" name="type" {...register("type")}>
        <option value="psychic">Psychic</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="fighting">Fighting</option>
        <option value="rock">Rock</option>
        <option value="normal">Normal</option>
        <option value="bug">Bug</option>
        <option value="fairy">Fairy</option>
        <option value="dark">Dark</option>
        <option value="dragon">Dragon</option>
        <option value="flying">Flying</option>
        <option value="ghost">Ghost</option>
        <option value="ground">Ground</option>
        <option value="ice">Ice</option>
        <option value="poison">Poison</option>
        <option value="steel">Steel</option>
      </select>
      <button className="w-full px-2 py-1 bg-amber-400/90 text-slate-100 rounded-lg" type="submit">Create</button>
    </form>
    </div>
  );
}

export default Form
