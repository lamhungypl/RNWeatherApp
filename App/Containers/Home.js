import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import {RouteNames} from '../Config/Routes';
import CardView from '../Components/CardView';
import ButtonCustom from '../Components/ButtonCustom';

const Home = props => {
  const goWeatherDetail = () => {
    props.navigation.navigate(RouteNames.WeatherDetailScreen);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goWeatherDetail()}>
        <CardView></CardView>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
export default Home;
