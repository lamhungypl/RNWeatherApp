import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const WeatherAttribute = props => {
  const {title, source, value, style} = props;
  return (
    <View style={styles.container}>
      <View style={styles.textInfo}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{...style, ...styles.value}}>{value}</Text>
      </View>
      <Image source={source} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 20,
  },
  textInfo: {
    flex: 1,
  },
  title: {
    color: '#bbb',
    fontFamily: 'SFUIText-Regular',
    fontSize: 10,
  },
  value: {
    color: '#fff',
    fontFamily: 'SFUIText-Regular',
    fontSize: 15,
  },
});

export default WeatherAttribute;
