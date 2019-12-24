import React from 'react';
import HeroSection from './components/HeroSection';
import './App.css';
import NavBar from './components/NavBar';
import { NavData } from './_mocks';

function App() {
  return (
    <div className='App'>
      <NavBar {...NavData} />
      {/* <HeroSection /> */}
    </div>
  );
}

export default App;
