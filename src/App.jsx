import React from 'react'
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Sign from './components/Sign';


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='Sign' element={<Sign/>} />
    </Routes>
    </>
  )
}

export default App