import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
    <HelmetProvider>
      <ImageState>
        <Helmet>
          <title>Nadia VFX</title>
          <meta
            name='description'
            content='Nadia Nicolas Flores, VFX Artist.'
          />
        </Helmet>
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
    </HelmetProvider>
  );
}

export default App;
