import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image
} from 'react-native';
import constants from '../../config/constants';
import Icon from 'react-native-vector-icons/Feather';
import styles from './style.js'

export default class Detail extends Component{
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={{uri: constants.DEFAULT_HOTEL_IMG}} style={styles.backgroundImage}>
          <View style={styles.header}>
            <Image source={{uri: constants.PROFILE_AVATAR}} style={styles.avatar}></Image>
            <Text style={styles.name}>Linda Collins</Text>
            <Icon.Button name="map-pin" backgroundColor="transparent" marginTop={-4}>
              <Text style={styles.location}>Berlin, Germany</Text>
            </Icon.Button>
          </View>
        </ImageBackground>
        <View style={styles.first}>
            <Text style={styles.label}>Member Since</Text>
            <Text style={styles.value}>January 2007</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>E-mail</Text>
          <Text style={styles.value}>ld.collins@gmail.com</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>+1 (817) 557-2129</Text>
        </View>
      </View>
    );
  }
}
