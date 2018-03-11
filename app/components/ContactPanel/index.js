import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../../screens/DetailScreen/style';
import { View, Text } from 'react-native';

export default class Contact extends Component {
  render() {
    const hotel = this.props.hotel;
    const fontColor = '#676767';
    const marginTop = -4;
    return (
      <View>
        <Icon.Button name="globe" backgroundColor="transparent" color={fontColor}  marginTop={marginTop}>
          <Text style={styles.value}>{hotel.website}</Text>
        </Icon.Button>
        <Icon.Button name="mail" backgroundColor="transparent" color={fontColor}  marginTop={marginTop}>
          <Text style={styles.value}>{hotel.email}</Text>
        </Icon.Button>
        <Icon.Button name="phone" backgroundColor="transparent" color={fontColor}  marginTop={marginTop}>
          <Text style={styles.value}>{hotel.phone}</Text>
        </Icon.Button>
      </View>
    );
  }
};
