import React, { createContext, useReducer } from 'react';
import imageReducer from './imageReducer';
import ImgList from '../data/ImgList';
import { CLEAR_CURRENT, GET_IMAGES, SET_CURRENT } from './types';

export const ImageContext = createContext();

const ImageState = (props) => {
  const initialState = {
    images: ImgList,
    current: null,
  };

  const [state, dispatch] = useReducer(imageReducer, initialState);

  // Set Current
  const setCurrent = (image) => {
    dispatch({ type: SET_CURRENT, payload: image });
  };

  // Clear Current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  return (
    <ImageContext.Provider
      value={{
        images: state.images,
        current: state.current,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageState;
