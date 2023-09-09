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
        <Route path='/space-tourism/' index element={<HomePage />} />
        <Route path='/space-tourism/destination' element={<Destination />} />
        <Route path='/space-tourism/crew' element={<Crews />} />
        <Route path='/space-tourism/technology' element={<Technology />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
