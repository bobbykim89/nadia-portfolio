import { CLEAR_CURRENT, SET_CURRENT } from './types';

const imageReducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    default:
      return state;
  }
};

export default imageReducer;
