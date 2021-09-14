import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageContext } from '../../context/ImageContext';

const Modal = () => {
  const imageContext = useContext(ImageContext);
  const { current, clearCurrent } = imageContext;
  return (
    <AnimatePresence>
      {current && (
        <div className='absolute inset-0 sticky bg-gray-700 bg-opacity-80 z-1'>
          <div className='relative grid relative'>
            <div className='inline-block  mx-auto self-center bg-white w-full lg:w-1/2 px-6 pb-6'>
              <div className='text-right' onClick={() => clearCurrent()}>
                <i className='material-icons text-end'>close</i>
              </div>
              <img
                src={current.links[0]}
                alt='modal-comp'
                className='inline-block w-full h-full'
              />
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
