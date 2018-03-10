import * as keys from './keys';
import service from '../../services/hotels';

export function hotel() {
  return { type: keys.HOTEL };
}

export function hotelOk(payload) {
  return { type: keys.HOTEL_OK, payload };
}

export function hotelFail() {
  return { type: keys.HOTEL_FAIL };
}

export function getHotel(id) {
  return (dispatch) => {
    dispatch(hotel());
    return service
      .getHotel(id)
      .then(response => response.json())
      .then(response => dispatch(hotelOk(response)))
      .catch(err => dispatch(hotelFail()));
  };
}
