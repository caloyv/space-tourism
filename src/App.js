import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Destination from './pages/Destination'
import Crews from './pages/Crews';
import Technology from './pages/Technology';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<HomePage />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crews />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
