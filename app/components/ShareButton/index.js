import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Share } from 'react-native';

export default class ShareButton extends Component {
  render() {
    return (
      <Icon.Button name="share" size={23} backgroundColor="transparent" underlayColor="transparent" onPress={()=>{
        const hotel = this.props.navigation.state.params.hotel;
        if (hotel && hotel._id) {
          Share.share({title:hotel.name, message:hotel.description, url: hotel.website}, {subject:hotel.name});
        }
      }}></Icon.Button>
    );
  }
};
