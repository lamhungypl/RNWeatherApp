import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import {useAsyncStorage} from '@react-native-community/async-storage';
import CityCardEdit from '../Components/CityCardEdit';
import IconFeather from 'react-native-vector-icons/Feather';
import IconIonic from 'react-native-vector-icons/Ionicons';
import {RouteNames} from '../Config/Routes';
IconFeather.loadFont();
IconIonic.loadFont();
const CITIES_ASYNC_STORAGE = 'cities';

const CityManagerEdit = props => {
  const {
    getItem: getCities,
    setItem: setCities,
    removeItem: removeCity,
  } = useAsyncStorage(CITIES_ASYNC_STORAGE);
  const [listCities, setListCities] = useState([]);
  useEffect(() => {
    readCitiesFromStorage();
  }, []);
  const readCitiesFromStorage = async () => {
    const listCitiesAsync = (await getCities()) || [];
    setListCities(JSON.parse(listCitiesAsync));
  };

  const writeCitiesToStorage = async newList => {
    await setCities(JSON.stringify(newList));
    setListCities(newList);
  };

  const handlePressDelete = city => {
    const currentList = Array.from(listCities);
    const newList = currentList.filter(cityItem => {
      return cityItem.id !== city.id;
    });
    setListCities(newList);

    writeCitiesToStorage(newList);
    props.navigation.navigate(RouteNames.CityManagerScreen);
  };
  const renderItem = (item, index, navigation) => {
    return (
      <CityCardEdit
        city={item}
        navigation={navigation}
        onPressDelete={city => handlePressDelete(city)}
      />
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white', borderRadius: 5}}>
      <FlatList
        renderItem={(item, index) => {
          const navigation = props.navigation;

          return renderItem(item, index, navigation);
        }}
        data={listCities}
        keyExtractor={(item, index) => Math.random().toString()}
      />
    </View>
  );
};
CityManagerEdit.navigationOptions = ({navigation}) => {
  return {
    headerTitle: () => <Text>{RouteNames.CityManagerEditScreen}</Text>,
    headerBackTitle: () => <View />,
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate(RouteNames.CityManagerScreen)}>
        <IconFeather name="x" size={30} color="#900" />
      </TouchableOpacity>
    ),
    // headerRight: () => (
    //   <TouchableOpacity
    //     onPress={() => navigation.navigate(RouteNames.CityManagerScreen)}>
    //     <IconIonic
    //       name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'}
    //       size={60}
    //       color="#900"
    //     />
    //   </TouchableOpacity>
    // ),
  };
};

export default CityManagerEdit;
