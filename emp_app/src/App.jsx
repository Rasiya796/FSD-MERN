import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {  Route, Routes } from 'react-router-dom'
import Form from './components/Form'
import View from './components/View'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar> 
      <h1>Hi Welcome Employees</h1>
      <Routes>

        <Route path='/form' element={<Form/>}></Route>
        <Route path='/view' element={<View/>}></Route>
      </Routes>
    </>
  )
}

export default App
