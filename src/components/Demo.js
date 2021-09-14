import React from 'react';
import ReactPlayer from 'react-player';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImgList from '../data/ImgList';
import ImageGrid from './layouts/ImageGrid';

export default function Demo() {
  AOS.init({
    delay: 500,
    duration: 1800,
    once: false,
    easing: 'ease',
  });

  return (
    <section id='Demo' className='relative py-20 bg-black text-white text-lg'>
      <div className='container w-11/12 md:w-3/5 mx-auto items-center'>
        <div>
          <span className='flex justify-start mb-8'>
            <h2 className='font-semibold text-4xl tracking-widest uppercase'>
              Digital work
            </h2>
          </span>
        </div>
        <div className='grid grid-flow-row grid-cols-5 gap-3 my-20'>
          {ImgList &&
            ImgList.map((image) => <ImageGrid image={image} key={image.id} />)}
        </div>
        <div className='mt-12'>
          <span className='flex justify-start mb-8'>
            <h2 className='font-semibold text-4xl tracking-widest uppercase'>
              Demo Reels
            </h2>
          </span>
        </div>
        <div className='flex flex-wrap mx-auto justify-center'>
          <div
            className='flex w-full block md:w-5/6 items-center md:mb-6'
            data-aos='fade-right'
          >
            <ReactPlayer
              controls={true}
              url={'https://vimeo.com/574944862'}
              width='100%'
            />
          </div>
          <div
            className='flex w-full block md:w-5/6 items-center justify-center'
            data-aos='fade-right'
          >
            <ReactPlayer
              controls={true}
              url={'https://vimeo.com/574950647'}
              width='100%'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
