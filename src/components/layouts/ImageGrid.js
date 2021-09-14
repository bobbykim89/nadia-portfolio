import React from 'react';

const ImageGrid = ({ image, setCurrent }) => {
  return (
    <div className='overflow-hidden aspect-w-1 aspect-h-1'>
      <img
        src={image.links[0]}
        alt='grid element'
        className='object-cover object-center max-w-[125%] hover:opacity-70 transition ease-in duration-150'
        onClick={() => setCurrent(image)}
      />
    </div>
  );
};

export default ImageGrid;
