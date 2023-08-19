import React from "react";
import { useEffect, useState } from "react";
import { getData } from "../Apicalls/Apicalls";
import { IngredientCard } from "../IngredientCards/ingredientCard";

import './App.css';

const App = () => {
  const [defaultPage, setPage] = useState([]);

  useEffect(() => {
    getData().then((data) => 
       setPage(data)
    )
  },[]);

  // const filterForApple = () => {
  //   setPage(data.apple);
  // }

//Use spacePresent date to find an object that matches with special Event date, and return event dates near earth objects
  return (
    <main className="App">
      <div><IngredientCard recipe={defaultPage}/></div>
    </main>
  )
}

export default App;
