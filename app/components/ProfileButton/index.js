import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Feather';

export default class ProfileButton extends Component {
  render() {
    return (
      <Icon.Button name="user" size={25} backgroundColor="transparent" onPress={() => this.props.navigation.navigate('Profile')}></Icon.Button>
    );
  }
};
