import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {RouteNames} from '../Config/Routes';
import CardView from '../Components/CardView';
import ButtonCustom from '../Components/ButtonCustom';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import WeatherDetail from './WeatherDetail';
import {
  callApiGet,
  replaceStringUrl,
  convertDataCurrentWeather,
} from '../Utils';
import {API_KEY, UrlApi} from '../Utils/Constants';
Icon.loadFont();
IconAntDesign.loadFont();
const Home = props => {
  const goWeatherDetail = () => {
    props.navigation.navigate(RouteNames.WeatherDetailScreen);
  };
  const renderTabBar = () => <StatusBar hidden />;
  return (
    <View style={styles.container}>
      <ScrollableTabView renderTabBar={() => renderTabBar()}>
        <WeatherDetail
          city={['hanoi', 'vn']}
          navigation={props.navigation}
          key={1}
        />
        {/* <WeatherDetail navigation={props.navigation} key={2} /> */}
      </ScrollableTabView>
    </View>
  );
};
Home.navigationOptions = ({navigation}) => {
  return {
    headerTitle: () => <Text>{RouteNames.HomeScreen}</Text>,
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate(RouteNames.CityManagerScreen)}>
        <IconAntDesign name="bars" size={30} color="#900" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home;
