import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../LoadingDetail/style';
import constants from '../../config/constants'

export default class ErrorDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="alert-triangle" size={100} color={constants.PRIMARY_BG_COLOR} />
        <Text style={styles.text}>Something Went Wrong</Text>
      </View>
    );
  }
}
