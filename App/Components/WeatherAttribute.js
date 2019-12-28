import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const WeatherAttribute = props => {
  const {source, value, style} = props;
  return (
    <View style={styles.container}>
      <Image source={source} />
      <Text style={[style, {paddingLeft: 5}]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default WeatherAttribute;
