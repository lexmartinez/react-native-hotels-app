import { connect } from 'react-redux';
import HomeView from './HomeView';
import { getCities } from '../../reducers/CitiesReducer/actions';

const mapStateToProps = state => ({
  ...state.cities
});

const mapDispatchToProps = dispatch => ({
  getCities: () => {
    dispatch(getCities());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);