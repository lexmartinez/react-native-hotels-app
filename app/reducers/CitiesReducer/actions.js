import * as keys from './keys';
import service from '../../services/cities';

export function cities() {
  return { type: keys.CITIES };
}

export function citiesOk(payload) {
  return { type: keys.CITIES_OK, payload };
}

export function citiesFail() {
  return { type: keys.CITIES_FAIL };
}

export function getCities() {
  return (dispatch) => {
    dispatch(cities());
    return service
      .getCities()
      .then(response => response.json())
      .then(response => dispatch(citiesOk(response)))
      .catch(err => dispatch(citiesFail()));
  };
}
