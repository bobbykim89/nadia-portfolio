import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ showModal, setShowModal, image }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <div className='absolute inset-0 bg-gray-700 opacity-80 z-1'>
          <div className='inline-block relative mx-auto self-center bg-white w-full lg:w-1/3 p-8'>
            <img
              src={image.images[0]}
              alt='modal-comp'
              className='inline-block w-full h-full'
            />
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
