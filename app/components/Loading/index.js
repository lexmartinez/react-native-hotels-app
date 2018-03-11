import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../NoResults/style';
import constants from '../../config/constants'

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="more-horizontal" size={100} color={constants.PRIMARY_TEXT_COLOR} />
        <Text style={styles.text}>Loading</Text>
      </View>
    );
  }
}
