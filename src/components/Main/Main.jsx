import React, { Component } from "react";
import {Route,Routes} from 'react-router-dom'

import PokeList from "./PokeList/PokeList";
import Details from "./Details/Details";
import Form from "./Form";
import Search from "./Search/Search";

class Main extends Component {
  render() {
    return <main>
    <Routes>
      <Route element={<PokeList />} path={"/"} />
      <Route element={<Form />} path={"/new"} />
      <Route element={<Details />} path={"/pokemon/:id"} />
      <Route element={<Search />} path={"/search"} />
    </Routes>
  </main>;
  }
}

export default Main;
