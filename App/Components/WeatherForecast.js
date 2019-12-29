import React from 'react';
import {View, Text, Image} from 'react-native';

const WeatherForecast = props => {
  const {source, time, temp, style} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#0078de',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={source} style={{padding: 5}} />
      <Text style={{flex: 1, padding: 5}}>{time}</Text>
      <Text style={{padding: 5}}>
        {temp.max}°C/{temp.min}°C
      </Text>
    </View>
  );
};

export default WeatherForecast;
