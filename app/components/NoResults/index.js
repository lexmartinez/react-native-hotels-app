import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './style';
import constants from '../../config/constants'

export default class NoResults extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="info" size={100} color={constants.PRIMARY_TEXT_COLOR} />
        <Text style={styles.text}>No Results Found</Text>
      </View>
    );
  }
}
