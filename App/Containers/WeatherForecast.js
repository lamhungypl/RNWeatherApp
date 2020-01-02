import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Platform,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {dataStatus, horizontalData} from '../Utils/dataForecast';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import {Images} from '../Assets';
import {UrlApi, API_KEY} from '../Utils/Constants';
import {
  convertDataHourlyForecast,
  replaceStringUrl,
  callApiGet,
} from '../Utils';
import ForecastItem from '../Components/ForecastItem';
import {RouteNames} from '../Config/Routes';
import {NavigationEvents} from 'react-navigation';
IonicIcons.loadFont();

const WeatherForecast = props => {
  const [currentCity, setCurrentCity] = useState({
    name: 'ha noi',
    country: 'VN',
  });
  const [forecastData, setForecastData] = useState();
  const [isUpdated, setIsUpdated] = useState(false);
  useEffect(() => {
    getWeatherForecast();
  }, [currentCity]);
  const getWeatherForecast = async () => {
    const url = replaceStringUrl(UrlApi.three_hourlyForecast, [
      currentCity.name,
      currentCity.country,

      API_KEY,
    ]);
    const data = await callApiGet(url);
    const useData = convertDataHourlyForecast(data);
    setForecastData(useData);
    setIsUpdated(true);
  };

  const handleDidFocus = () => {
    const cityparam = props.navigation.getParam('city', {
      item: currentCity,
    });

    setCurrentCity(cityparam);

    const headerName = `Forecast ${cityparam.name}, ${cityparam.country}`;
    props.navigation.setParams({otherParam: headerName});
  };
  const renderItemFlatlist = (item, index) => {
    return <ForecastItem item={item} index={index} isUpdated={isUpdated} />;
  };
  return (
    <View style={styles.container}>
      <NavigationEvents onDidFocus={() => handleDidFocus()} />
      <View style={styles.background}>
        <Image style={styles.backgroundImage} source={Images.sea} />
      </View>
      <View style={{height: 450}}>
        {(isUpdated && (
          <FlatList
            style={{backgroundColor: '#000', opacity: 0.6}}
            horizontal={true}
            data={forecastData}
            renderItem={({item, index}) => renderItemFlatlist(item, index)}
            keyExtractor={(item, index) => {
              return item.time + index;
            }}
          />
        )) || <ActivityIndicator size="large" color="#0000ff" />}
      </View>
    </View>
  );
};
WeatherForecast.navigationOptions = ({navigation}) => {
  return {
    headerTitle: () => {
      const title = navigation.getParam('otherParam', RouteNames.HomeScreen);

      return <Text>{title}</Text>;
    },
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 34 : 0,
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
});
export default WeatherForecast;
