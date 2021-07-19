import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Demo from './components/Demo';
import Contact from './components/Contact';

function App() {
  return (
    <main className=''>
      <Hero />
      <Navbar />
      <About />
      <Skills />
      <Demo />
      <Contact />
    </main>
  );
}

export default App;
