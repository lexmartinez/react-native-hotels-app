import { connect } from 'react-redux';
import HotelsView from './HotelsView';
import { getHotels } from '../../reducers/HotelsReducer/actions';

const mapStateToProps = state => ({
  ...state.hotels
});

const mapDispatchToProps = dispatch => ({
  getHotels: (city) => {
    dispatch(getHotels(city));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HotelsView);