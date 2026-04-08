import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Navbar'
import Works from './Components/Works'
import Collabrations from './Components/Collabrations'
import Work from './Components/Work'



function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route element={<Home/>} path='/'></Route>
    </Routes>
    <Works/>
    <Collabrations/>
    <Work/>

    </>
  )
}

export default App
