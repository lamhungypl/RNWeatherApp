import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import CityCard from '../Components/CityCard';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import {RouteNames} from '../Config/Routes';
import CityPicker from '../Components/CityPicker';
import {useAsyncStorage} from '@react-native-community/async-storage';
IconAntDesign.loadFont();
IconFeather.loadFont();

const CITIES_ASYNC_STORAGE = 'cities';
const CityManager = props => {
  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
  useEffect(() => {
    readCitiesFromStorage();
  }, []);
  const {getItem: getCities, setItem: setCities} = useAsyncStorage(
    CITIES_ASYNC_STORAGE,
  );
  const [listCities, setListCities] = useState([]);

  const readCitiesFromStorage = async () => {
    const listCitiesAsync = (await getCities()) || [];
    setListCities(JSON.parse(listCitiesAsync));
  };

  const writeCitiesToStorage = async newList => {
    await setCities(JSON.stringify(newList));
    setListCities(newList);
  };

  const handleDidFocus = () => {
    // console.log('didFocus', listCities)
    readCitiesFromStorage();
  };

  const handlePressAddCity = () => {
    setIsOpenModalAdd(true);
  };
  const handleCloseModalAdd = item => {
    setIsOpenModalAdd(false);
  };
  const handleItemSelected = item => {
    const currentList = Array.from(listCities);
    const currentListID = currentList.map(city => city.id);
    if (!currentListID.includes(item.id)) {
      const newListCities = currentList.concat(item);
      writeCitiesToStorage(newListCities);
    }
    return;
  };
  const renderItem = (item, index, navigation) => {
    return <CityCard city={item} navigation={navigation} />;
  };
  return (
    <View style={styles.container}>
      <NavigationEvents onDidFocus={() => handleDidFocus()} />
      <FlatList
        renderItem={(item, index) => {
          const navigation = props.navigation;
          return renderItem(item, index, navigation);
        }}
        data={listCities}
        keyExtractor={(item, index) => Math.random().toString()}
      />
      <TouchableOpacity
        style={styles.addCityBtn}
        onPress={item => handlePressAddCity(item)}>
        <IconAntDesign name="pluscircle" size={60} color="#900" />
      </TouchableOpacity>
      <CityPicker
        isVisible={isOpenModalAdd}
        closeModal={() => handleCloseModalAdd()}
        onPressItem={item => handleItemSelected(item)}
        cities={listCities}
      />
    </View>
  );
};
CityManager.navigationOptions = ({navigation}) => {
  return {
    headerTitle: () => <Text>{RouteNames.CityManagerScreen}</Text>,
    headerBackTitle: () => <View />,
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate(RouteNames.CityManagerEditScreen)}>
        <IconFeather name="edit" size={30} color="#900" />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addCityBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignSelf: 'flex-end',
  },
});
export default CityManager;
