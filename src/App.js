import React from 'react';
import ImageState from './context/ImageContext';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Demo from './components/Demo';
import Contact from './components/Contact';
import Modal from './components/layouts/Modal';

function App() {
  return (
    <ImageState>
      <div className='bg-black font-inter'>
        <Hero />
        <Navbar />

        <About />
        <Skills />
        <Demo />
        <Modal />
        <Contact />
      </div>
    </ImageState>
  );
}

export default App;
