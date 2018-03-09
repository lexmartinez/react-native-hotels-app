import React, { Component } from 'react';
import { Image } from 'react-native';

export default class HeaderLogo extends Component {
  render() {
    return (
      <Image
        source={require('../../assets/otel-logo.png')}
        style={{ width: 55.05, height: 26, resizeMode: 'stretch' }}
      />
    );
  }
}
