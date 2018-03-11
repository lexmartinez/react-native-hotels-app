import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../screens/DetailScreen/style';
import { View, Text } from 'react-native';

export default class Amenities extends Component {
  render() {
    const hotel = this.props.hotel;
    const fontColor = '#676767';
    const marginTop = -4;
    return (
      <View style={styles.amenities}>
        {
          hotel.amenities.wifi?
            <Icon.Button name="wifi" backgroundColor="transparent" color={fontColor}  marginTop={marginTop}>
              <Text style={styles.value}>Wi-Fi</Text>
            </Icon.Button>:null
        }
        {
          hotel.amenities.pool?
            <Icon.Button name="tint" backgroundColor="transparent" color={fontColor}  marginTop={marginTop}>
              <Text style={styles.value}>Pool</Text>
            </Icon.Button>:null
        }
        {
          hotel.amenities.spa?
            <Icon.Button name="bed" backgroundColor="transparent" color={fontColor}  marginTop={marginTop}>
              <Text style={styles.value}>Spa</Text>
            </Icon.Button>:null
        }
        {
          hotel.amenities.parking?
            <Icon.Button name="car" backgroundColor="transparent" color={fontColor}  marginTop={marginTop}>
              <Text style={styles.value}>Parking</Text>
            </Icon.Button>:null
        }
        {
          hotel.amenities.ac?
            <Icon.Button name="snowflake-o" backgroundColor="transparent" color={fontColor}  marginTop={marginTop}>
              <Text style={styles.value}>A/C</Text>
            </Icon.Button>:null
        }
        {
          hotel.amenities.restaurant?
            <Icon.Button name="cutlery" backgroundColor="transparent" color={fontColor}  marginTop={marginTop}>
              <Text style={styles.value}>Restaturant</Text>
            </Icon.Button>:null
        }
        {
          hotel.amenities.bar?
            <Icon.Button name="glass" size={19} backgroundColor="transparent" color={fontColor}  marginTop={marginTop}>
              <Text style={styles.value}>Bar</Text>
            </Icon.Button>:null
        }
        {
          hotel.amenities.gym?
            <Icon.Button name="trophy" backgroundColor="transparent" color={fontColor}  marginTop={marginTop}>
              <Text style={styles.value}>Gym</Text>
            </Icon.Button>:null
        }
      </View>
    );
  }
};
