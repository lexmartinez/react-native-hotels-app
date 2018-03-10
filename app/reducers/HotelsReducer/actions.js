import * as keys from './keys';
import service from '../../services/hotels';

export function hotels() {
  return { type: keys.HOTELS };
}

export function hotelsOk(payload) {
  return { type: keys.HOTELS_OK, payload };
}

export function hotelsFail() {
  return { type: keys.HOTELS_FAIL };
}

export function getHotels(city) {
  return (dispatch) => {
    dispatch(hotels());
    return service
      .getHotels(city)
      .then(response => response.json())
      .then(response => dispatch(hotelsOk(response)))
      .catch(err => dispatch(hotelsFail()));
  };
}
