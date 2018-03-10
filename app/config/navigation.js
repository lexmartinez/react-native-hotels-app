import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/Detail';
import HotelsScreen from '../screens/Hotels';
import HeaderLogo from '../components/HeaderLogo';
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
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerTitle: <HeaderLogo />,
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