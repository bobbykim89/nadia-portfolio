import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageContext } from '../../context/ImageContext';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const background = {
  visible: {
    opacity: 1,
  },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Modal = () => {
  const imageContext = useContext(ImageContext);
  const { current, clearCurrent } = imageContext;

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      clearCurrent();
    }
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {current && (
        <motion.div
          className='backdrop absolute inset-0 grid items-stretch sticky bg-gray-800 bg-opacity-80 z-1 min-h-[100vh]'
          onClick={handleClick}
          variants={background}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <div className='relative inline-block mx-auto self-center'>
            <motion.div
              className='bg-white w-full h-full shadow-xl'
              variants={modal}
            >
              <div className='text-right'>
                <i
                  className='material-icons text-end py-2 pr-2 cursor-pointer'
                  onClick={() => clearCurrent()}
                >
                  close
                </i>
              </div>
              <div className='px-3 pb-3 lg:px-6 lg:pb-6 bg-white lg:max-w-[90vh]'>
                <Carousel
                  autoPlay={false}
                  showThumbs={false}
                  showStatus={false}
                >
                  {current.links.map((link, i) => (
                    <div key={i}>
                      <img
                        src={link}
                        alt={`${i}`}
                        className='inline-block w-full h-full max-h-[80vh]'
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
