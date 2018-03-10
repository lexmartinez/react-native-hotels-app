import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, StatusBar } from 'react-native';
import constants from '../../config/constants';
import { HotelItem, ProfileButton } from '../../components';

class HotelsView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <ProfileButton navigation={navigation}/>
      ),
  }};

  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
    };
  }

  componentDidMount() {
    const { getHotels } = this.props;
    getHotels(this.props.navigation.state.params.city);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.completed) {
      this.setState({ hotels: nextProps.hotels });
    }
  }

  getHotel = (id) => {
    this
      .props
      .navigation
      .navigate('Detail', { id });
  };

  render() {
    return (
      <View  style={{ backgroundColor: constants.PRIMARY_BG_COLOR}}>
        <StatusBar barStyle={constants.BAR_STYLE}/>
        <ScrollView>
            {this.state
              .hotels
              .map((hotel) => (
                <HotelItem hotel={hotel} key={hotel._id} event={this.getHotel} />
              ))}
        </ScrollView>
      </View>
    );
  }
}

HotelsView.propTypes = {
  getHotels: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  hotels: PropTypes.array.isRequired
};

export default HotelsView;