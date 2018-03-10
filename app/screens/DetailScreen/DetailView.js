import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, StatusBar, Text, Dimensions } from 'react-native';
import constants from '../../config/constants';
import { ShareButton } from '../../components';
const { width, height } = Dimensions.get('window');

class DetailView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <ShareButton navigation={navigation}/>
      ),
    }};

  constructor(props) {
    super(props);
    this.state = {
      hotel: {},
    };
  }

  componentDidMount() {
    const { getHotel } = this.props;
    getHotel(this.props.navigation.state.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.completed) {
      this.setState({ hotel: nextProps.hotel });
      if (!this.props.navigation.state.params.hotel) {
        this.props.navigation.setParams({hotel: nextProps.hotel}) ;
      }
    }
  }

  render() {
    return (
      <View  style={{ backgroundColor: constants.SECONDARY_BG_COLOR, height, width }}>
        <StatusBar barStyle={constants.BAR_STYLE}/>
        <ScrollView>
           <Text>{this.state.hotel.name}</Text>
        </ScrollView>
      </View>
    );
  }
}

DetailView.propTypes = {
  getHotel: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  hotel: PropTypes.object.isRequired
};

export default DetailView;