import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CityCard from '../Components/CityCard';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import {RouteNames} from '../Config/Routes';
IconAntDesign.loadFont();
IconFeather.loadFont();
const CityManager = () => {
  return (
    <>
      <CityCard />
      <IconAntDesign name="pluscircle" size={30} color="#900" />
      <IconAntDesign name="minuscircleo" size={30} color="#900" />
    </>
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
export default CityManager;
