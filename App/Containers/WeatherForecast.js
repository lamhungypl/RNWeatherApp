import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const WeatherForecast = () => {
  return (
    <View style={styles.container}>
      <Text>Weather forcast</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default WeatherForecast;
