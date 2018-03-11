import React from 'react';
import { StackNavigator } from 'react-navigation';
import { HomeScreen, HotelsScreen, DetailScreen, ProfileScreen }  from '../screens';
import { HeaderLogo } from '../components';
import constants from '../config/constants';

export default StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Hotels: {
      screen: HotelsScreen,
    },
    Detail: {
      screen: DetailScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerTitle: <HeaderLogo />,
      gesturesEnabled: false,
      headerStyle: {
        backgroundColor: constants.PRIMARY_BG_COLOR,
        borderBottomColor: constants.PRIMARY_BG_COLOR,
        borderBottomWidth: 5
      },
      headerTintColor: constants.PRIMARY_TEXT_COLOR,
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
);