import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/Detail';
import HotelsScreen from '../screens/Hotels';
import HeaderLogo from '../components/HeaderLogo';

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
        backgroundColor: '#151126',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
);