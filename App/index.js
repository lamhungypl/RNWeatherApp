import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import ButtonCustom from './Components/ButtonCustom';
import CardView from './Components/CardView';
import WeatherDetail from './Containers/WeatherDetail';
import TestChart from './Components/TestChart/TestChart';
import TestChartCustom from './Components/TestChart/TestChartCustom';
import WeatherForecast from './Components/WeatherForecast';
import {Images} from './Assets';
import AppContainer from './Config/Routes';
const App = () => {
  return <AppContainer />;
};

const styles = StyleSheet.create({
  startContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    position: 'absolute',
    top: 50,
    right: 10,
  },
});

export default App;
