import * as keys from './keys';

const init = {
  loading: false,
  cities: [],
  error: false,
  completed: false
};

const reducer = (state = init, action) => {
  switch (action.type) {
    case keys.CITIES:
      return {
        ...state,
        loading: true,
        error: false,
        cities: [],
        completed: false
      };
    case keys.CITIES_OK:
      return {
        ...state,
        loading: false,
        error: false,
        cities: action.payload,
        completed: true
      };
    case keys.CITIES_FAIL:
      return {
        ...state,
        loading: false,
        cities: [],
        error: true,
        completed: true
      };
    default:
      return state;
  }
};

export default reducer;