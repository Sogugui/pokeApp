import React, {useContext,useState } from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import PokeList from './components/Main/PokeList/PokeList'
import Nav from './components/Header/Nav/Nav';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import {pokeContext}  from './context/pokeContext';



function App() {
const [pokemons,setPokemons]= useState([])

const data = {
  pokemons,
  setPokemons
}

  return (<>
    <pokeContext.Provider value={data}>
      <BrowserRouter>
        <Header />
        <Main/>
      </BrowserRouter>
    </pokeContext.Provider>
    </>
  );
}

export default App;
