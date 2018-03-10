import * as keys from './keys';

const init = {
  loading: false,
  hotels: [],
  error: false,
  completed: false
};

const reducer = (state = init, action) => {
  switch (action.type) {
    case keys.HOTELS:
      return {
        ...state,
        loading: true,
        error: false,
        cities: [],
        completed: false
      };
    case keys.HOTELS_OK:
      return {
        ...state,
        loading: false,
        error: false,
        hotels: action.payload,
        completed: true
      };
    case keys.HOTELS_FAIL:
      return {
        ...state,
        loading: false,
        hotels: [],
        error: true,
        completed: true
      };
    default:
      return state;
  }
};

export default reducer;