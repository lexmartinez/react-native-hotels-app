import * as keys from './keys';

const init = {
  loading: false,
  hotel: {amenities:{},images:[]},
  error: false,
  completed: false
};

const reducer = (state = init, action) => {
  switch (action.type) {
    case keys.HOTEL:
      return {
        ...state,
        loading: true,
        error: false,
        hotel: {amenities:{},images:[]},
        completed: false
      };
    case keys.HOTEL_OK:
      return {
        ...state,
        loading: false,
        error: false,
        hotel: action.payload,
        completed: true
      };
    case keys.HOTEL_FAIL:
      return {
        ...state,
        loading: false,
        hotel: {amenities:{},images:[]},
        error: true,
        completed: true
      };
    default:
      return state;
  }
};

export default reducer;