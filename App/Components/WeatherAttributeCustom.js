import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const WeatherAttributeCustom = props => {
  const {title, value, style} = props;
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text style={[style, {paddingLeft: 5}]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default WeatherAttributeCustom;
