import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, ImageBackground } from 'react-native';

import styles from './style';

const CityItem = ({ city, event }) => (
  <TouchableHighlight onPress={() => event(city.name)}>
    <View style={styles.container}>
      <ImageBackground source={{uri: city.image}} style={styles.backgroundImage}>
        <View style={styles.listitem}>
          <Text style={styles.title}>{city.name}, {city.country}</Text>
          <Text style={styles.subtitle}>{city.nickname}</Text>
        </View>
      </ImageBackground>
    </View>
  </TouchableHighlight>
);

CityItem.propTypes = {
  city: PropTypes.object.isRequired,
  event: PropTypes.func.isRequired,
};

export default CityItem;