import constants from '../config/constants';

export default {
  getCities: () => fetch(`${constants.API_URL}/cities`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
}