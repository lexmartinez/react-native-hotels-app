import { connect } from 'react-redux';
import DetailView from './DetailView';
import { getHotel } from '../../reducers/DetailReducer/actions';

const mapStateToProps = state => ({
  ...state.detail
});

const mapDispatchToProps = dispatch => ({
  getHotel: (id) => {
    dispatch(getHotel(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);