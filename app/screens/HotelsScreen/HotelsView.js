import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView, StatusBar, Text} from 'react-native';
import constants from '../../config/constants';

class HotelsView extends Component {
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

  getHotel = (hotel) => {
    console.log(hotel)
    this
      .props
      .navigation
      .navigate('Detail', { hotel });
  };

  render() {
    return (
      <View  style={{ backgroundColor: constants.PRIMARY_BG_COLOR}}>
        <StatusBar barStyle={constants.BAR_STYLE}/>
        <ScrollView>
            {this.state
              .hotels
              .map((hotel) => (
                <Text key={hotel._id}>{hotel.name}</Text>
              ))}
        </ScrollView>
      </View>
    );
  }
}

HotelsView.propTypes = {
  getHotels: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  hotels: PropTypes.array
};

export default HotelsView;