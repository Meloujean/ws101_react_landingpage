
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Career from './components/Career';
import Tools from './components/Tools';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Career />
      <Tools />
      <Footer />
    </div>
  );
}

export default App;

