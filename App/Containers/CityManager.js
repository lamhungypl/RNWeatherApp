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
  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);

  const modalRef = useRef(null);
  const handlePressAddCity = () => {
    setIsOpenModalAdd(true);
  };
  const renderItem = (item, index, navigation) => {
    return <CityCard navigation={navigation} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        renderItem={(item, index) => {
          const navigation = props.navigation;
          return renderItem(item, index, navigation);
        }}
        data={[0, 1]}
        keyExtractor={(item, index) => Math.random().toString()}
      />
      <TouchableOpacity
        style={styles.addCityBtn}
        onPress={() => handlePressAddCity()}>
        <IconAntDesign name="pluscircle" size={60} color="#900" />
      </TouchableOpacity>
      {isOpenModalAdd && <CityPicker isVisible={isOpenModalAdd} />}
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
