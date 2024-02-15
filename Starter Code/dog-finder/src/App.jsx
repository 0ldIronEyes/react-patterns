import React, {useState, useEffect } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from "axios";
import NavBar from "./NavBar";
import DogList from "./DogList";
import { BrowserRouter } from "react-router-dom"

import './App.css'
import DogDetails from "./DogDetails";

function App() {

  const dogs = App.defaultProps.dogs;
  return (
    <>
    <BrowserRouter>
        <NavBar dogs={dogs} />
      <div>
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogs} />}/>

          <Route path="/dogs/:name" element={<DogDetails dogs = {dogs} />} />

          <Route path="/*" element={<Navigate to="/dogs" />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "whiskey",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "duke",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "perry",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "tubby",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App
