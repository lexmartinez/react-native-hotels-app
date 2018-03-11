import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Feather';

export default class SearchButton extends Component {
  render() {
    return (
      <Icon.Button name="search" size={25} backgroundColor="transparent" onPress={() => {
        if (this.props.navigation.searchBar.state.show) {
          this.props.navigation.searchBar.hide();
        } else {
          this.props.navigation.searchBar.show();
        }
      }}></Icon.Button>
    );
  }
};
