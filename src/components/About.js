import React from 'react';
import profile from './imgs/about.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  AOS.init({
    delay: 500,
    duration: 1800,
    once: false,
    easing: 'ease',
  });

  return (
    <section
      id='About'
      className='relative py-20 text-black bg-white border-l-8 md:border-l-[60px] border-black'
    >
      <div className='container md:w-2/3 mx-auto px-4'>
        <div className='inline-block items-center flex flex-wrap-reverse md:flex-wrap justify-center'>
          <div
            className='relative w-full md:w-2/5 mx-2 md:mx-auto'
            data-aos='fade-right'
          >
            <div className='md:pr-4'>
              <div className='items-center md:p-14'>
                <span className='flex justify-start mb-8'>
                  <h2 className='font-semibold text-4xl tracking-widest uppercase'>
                    ABOUT ME
                  </h2>
                </span>
                <p className='text-justify mt-4 text-xl'>
                  I'm an animator and digital artist currently studying to
                  become a visual effects artist
                </p>
                <div className='flex justify-center'>
                  <a
                    href='#cv'
                    target='_blank'
                    className='bg-transparent hover:bg-black text-black font-bold hover:text-white py-2 px-4 border-2 border-black hover:border-transparent rounded inline-block mt-5'
                  >
                    Here is My Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className='inline-block flex flex-wrap w-full md:w-3/5 mx-auto md:pl-14 md:border-l-4 border-black mb-8 justify-center'
            data-aos='fade-up'
          >
            <img
              src={`${profile}`}
              alt='Profile'
              className='max-w-sm md:max-w-full rounded-lg shadow-lg'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
