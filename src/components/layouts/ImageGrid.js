import React, { useState } from 'react';
import Modal from './Modal';

const ImageGrid = ({ image }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='overflow-hidden aspect-w-1 aspect-h-1'>
      <img
        src={image.images[0]}
        alt='grid element'
        className='object-cover object-center max-w-[125%] hover:opacity-50 transition ease-in duration-150'
        onClick={() => setShowModal(true)}
      />
      <Modal image={image} showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default ImageGrid;
