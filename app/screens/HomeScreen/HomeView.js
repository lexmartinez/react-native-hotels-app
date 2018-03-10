import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CityItem, ProfileButton } from '../../components';
import { View, ScrollView, StatusBar } from 'react-native';
import constants from '../../config/constants';

class HomeView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
    headerRight: (
      <ProfileButton navigation={navigation}/>
    ),
  }};

  constructor(props) {
    super(props);
    this.state = {
      cities: [],
    };
  }

  componentDidMount() {
    const { getCities } = this.props;
    getCities();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.completed) {
      this.setState({ cities: nextProps.cities });
    }
  }

  getHotels = (city) => {
    this
      .props
      .navigation
      .navigate('Hotels', { city });
  };

  render() {
    return (
      <View  style={{ backgroundColor: constants.PRIMARY_BG_COLOR}}>
        <StatusBar barStyle={constants.BAR_STYLE}/>
        <ScrollView>
            <CityItem city={{}} key={0} event={this.getHotels} />
            {this.state
              .cities
              .map((city) => (
                <CityItem city={city} key={city._id} event={this.getHotels} />
              ))}
        </ScrollView>
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