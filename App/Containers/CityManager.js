import React from 'react';
import {View, Text} from 'react-native';
import CityCard from '../Components/CityCard';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
IconAntDesign.loadFont();
IconFeather.loadFont();
const CityManager = () => {
  return (
    <>
      <CityCard />
      <IconAntDesign name="pluscircle" size={30} color="#900" />
      <IconAntDesign name="minuscircleo" size={30} color="#900" />
      <IconAntDesign name="bars" size={30} color="#900" />
      <IconFeather name="edit" size={30} color="#900" />
    </>
  );
};

export default CityManager;
