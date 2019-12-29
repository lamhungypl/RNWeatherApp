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
import Button from './Components/Button';
import CardView from './Components/CardView';
import WeatherDetail from './Containers/WeatherDetail';
import TestChart from './Components/TestChart/TestChart';
import TestChartCustom from './Components/TestChart/TestChartCustom';
import WeatherForecast from './Components/WeatherForecast';
import {Images} from './Assets';

const App = () => {
  return (
    <SafeAreaView style={styles.startContainer}>
      {/* <Button
        title="Add"
        onPress={() => alert(`Why you opened me? Go away, it's mine!`)}
        style={styles.customButton}
        textStyle={{}}
      /> */}
      {/* <CardView /> */}
      <WeatherDetail />
      {/* <TestChartCustom /> */}
      {/* <WeatherForecast
        source={Images.cloud}
        temp={{max: 24, min: 16}}
        time={'Hom nay'}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  startContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  customButton: {
    position: 'absolute',
    top: 50,
    right: 10,
  },
});

export default App;
