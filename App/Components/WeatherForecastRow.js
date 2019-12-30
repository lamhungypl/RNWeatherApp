import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const WeatherForecast = props => {
  const {source, time, temp, style} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        // backgroundColor: '#0078de',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      }}>
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
  textInfo: {
    padding: 5,
    color: '#fff',
    fontFamily: 'SFUIText-Regular',
    fontSize: 20,
  },
});
export default WeatherForecast;
