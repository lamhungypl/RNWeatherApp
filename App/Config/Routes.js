import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../Containers/Home';
import WeatherDetailScreen from '../Containers/WeatherDetail';

export const RouteNames = {
  HomeScreen: 'HomeScreen',
  WeatherDetailScreen: 'WeatherDetailScreen',
};
const HomeStack = createStackNavigator(
  {
    [RouteNames.HomeScreen]: {
      screen: HomeScreen,
    },
    [RouteNames.WeatherDetailScreen]: {
      screen: WeatherDetailScreen,
    },
  },
  {
    initialRouteName: RouteNames.HomeScreen,
    defaultNavigationOptions: {
      gesturesEnabled: true,
    },
  },
);
const AppNavigator = HomeStack;
export default createAppContainer(AppNavigator);
