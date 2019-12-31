import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import CityCard from '../Components/CityCard';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import {RouteNames} from '../Config/Routes';
import CityPicker from '../Components/CityPicker';
IconAntDesign.loadFont();
IconFeather.loadFont();
const CityManager = props => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const modalRef = useRef(null);
  const handlePressAddCity = () => {
    setIsOpenModal(true);
  };
  return (
    <ScrollView>
      <CityCard navigation={props.navigation} />
      <CityCard navigation={props.navigation} />
      <CityCard navigation={props.navigation} />
      <CityCard navigation={props.navigation} />
      <TouchableOpacity
        style={styles.addCityBtn}
        onPress={() => handlePressAddCity()}>
        <IconAntDesign name="pluscircle" size={60} color="#900" />
      </TouchableOpacity>
      <CityPicker isVisible={isOpenModal} />
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
