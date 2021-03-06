import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const WeatherForecast = props => {
  useEffect(() => {});
  const {source, time, temp, style} = props;
  return (
    <View style={styles.container}>
      <Image source={source} style={{padding: 5}} />
      <Text
        style={{
          flex: 1,
          ...styles.textInfo,
        }}>
        {time}
      </Text>
      <Text style={styles.textInfo}>
        {temp.max}°C/{temp.min}°C
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  textInfo: {
    padding: 5,
    color: '#fff',
    fontFamily: 'SFUIText-Regular',
    fontSize: 20,
  },
});
export default WeatherForecast;
