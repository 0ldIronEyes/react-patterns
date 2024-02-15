import { useState } from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom"
import { Routes, Route, Navigate } from 'react-router-dom';
import ColorList from "./ColorList"
import ColorForm from "./ColorForm"
import ColorDetail from "./ColorDetail"

function App() {
  const [colors, setColors] = useState( ["red", "green", "blue"]);

  const add = (c) => {
    setColors([...colors, c]);
  }

  return (
    <>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/colors" element={<ColorList cols={colors} />}/>

          <Route path="/colors/new" element={<ColorForm addColor={add}  />}/>
          <Route path="/colors/:name" element={< ColorDetail/>} />

          <Route path="/*" element={<Navigate to="/colors" />} />
        </Routes>
      </div>
    </BrowserRouter>
      
    </>
  )
}

export default App
