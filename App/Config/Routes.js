import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../Containers/Home';
import WeatherForecastScreen from '../Containers/WeatherForecast';
import CityManagerScreen from '../Containers/CityManager';
export const RouteNames = {
  HomeScreen: 'HomeScreen',
  WeatherForecastScreen: 'WeatherForecastScreen',
  CityManagerScreen: 'CityManagerScreen',
};
const HomeStack = createStackNavigator(
  {
    [RouteNames.HomeScreen]: {
      screen: HomeScreen,
    },
    [RouteNames.WeatherForecastScreen]: {
      screen: WeatherForecastScreen,
    },
    [RouteNames.CityManagerScreen]: {
      screen: CityManagerScreen,
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
