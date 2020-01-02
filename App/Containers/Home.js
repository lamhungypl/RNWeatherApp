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
import {NavigationEvents} from 'react-navigation';
import {useAsyncStorage} from '@react-native-community/async-storage';

Icon.loadFont();
IconAntDesign.loadFont();
const CITIES_ASYNC_STORAGE = 'cities';

const Home = props => {
  const {
    getItem: getCities,
    setItem: setCities,
    removeItem: removeCity,
  } = useAsyncStorage(CITIES_ASYNC_STORAGE);
  const [listCities, setListCities] = useState([]);
  const [city, setCity] = useState({name: 'Ha Noi', country: 'VN'});

  useEffect(() => {
    readCitiesFromStorage();
    if (listCities.length > 0) {
      setCity(listCities[0]);
    } else {
      writeCitiesToStorage([{...city}]);
    }
  }, []);
  const readCitiesFromStorage = async () => {
    const listCitiesAsync = (await getCities()) || [];
    setListCities(JSON.parse(listCitiesAsync));
  };
  const writeCitiesToStorage = async newList => {
    await setCities(JSON.stringify(newList));
    setListCities(newList);
  };

  const goWeatherDetail = () => {
    props.navigation.navigate(RouteNames.WeatherDetailScreen);
  };
  // JSON.stringify(navigation.getParam('itemId', 'NO-ID')
  const handleDidFocus = () => {
    const cityparam = props.navigation.getParam('city', {
      item: city,
    });
    setCity(cityparam['item']);
    const headerName = `${cityparam['item'].name}, ${cityparam['item'].country}`;
    props.navigation.setParams({otherParam: headerName});
  };
  const renderTabBar = () => <StatusBar hidden />;
  return (
    <View style={styles.container}>
      <NavigationEvents onDidFocus={() => handleDidFocus()} />

      <ScrollableTabView renderTabBar={() => renderTabBar()}>
        <WeatherDetail city={city} navigation={props.navigation} key={1} />
        {/* <WeatherDetail navigation={props.navigation} key={2} /> */}
      </ScrollableTabView>
    </View>
  );
};
Home.navigationOptions = ({navigation}) => {
  return {
    headerTitle: () => {
      const title = navigation.getParam('otherParam', RouteNames.HomeScreen);
      return <Text>{title}</Text>;
    },
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
