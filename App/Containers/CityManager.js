import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import CityCard from '../Components/CityCard';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import {RouteNames} from '../Config/Routes';
IconAntDesign.loadFont();
IconFeather.loadFont();
const CityManager = () => {
  const handlePressAddCity = () => {};
  return (
    <ScrollView>
      <CityCard />
      <CityCard />
      <CityCard />
      <CityCard />
      <TouchableOpacity
        style={styles.addCityBtn}
        onPress={() => handlePressAddCity()}>
        <IconAntDesign name="pluscircle" size={60} color="#900" />
      </TouchableOpacity>
      <TouchableOpacity>
        <IconAntDesign name="minuscircleo" size={30} color="#900" />
      </TouchableOpacity>
    </ScrollView>
  );
};
CityManager.navigationOptions = ({navigation}) => {
  return {
    headerTitle: () => <Text>{RouteNames.CityManagerScreen}</Text>,
    headerBackTitle: () => <View />,
    headerRight: () => (
      <TouchableOpacity onPress={() => alert('edit')}>
        <IconFeather name="edit" size={30} color="#900" />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({
  addCityBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
export default CityManager;
