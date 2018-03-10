import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native';

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
    };
  }

  componentWillMount() {
    const { getCities } = this.props;
    getCities();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if (!nextProps.error && !nextProps.loading) {
      this.setState({ cities: nextProps.cities });
    }
  }

  onCityHotels = (city) => {
    this
      .props
      .navigation
      .navigate('Detail', { city });
  };

  render() {
    console.log('statesssss',this.state)
    return (
      <View>
            <Text>Test</Text>
            {this.state
              .cities
              .map((city, index) => (
                <Text>{{index}}</Text>
              ))}
      </View>
    );
  }
}

HomeView.propTypes = {
  getCities: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  cities: PropTypes.array
};

export default HomeView;