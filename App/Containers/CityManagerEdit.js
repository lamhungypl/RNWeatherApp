import React, {useState} from 'react';
import {View, Text, Platform, TouchableOpacity, FlatList} from 'react-native';
import CityCardEdit from '../Components/CityCardEdit';
import IconFeather from 'react-native-vector-icons/Feather';
import IconIonic from 'react-native-vector-icons/Ionicons';
import {RouteNames} from '../Config/Routes';
IconFeather.loadFont();
IconIonic.loadFont();
const CityManagerEdit = props => {
  const [isVible, setIsVible] = useState(props.isVisible);

  const handlePressDelete = () => {
    props.navigation.navigate(RouteNames.CityManagerScreen);
  };
  const renderItem = (item, index, navigation) => {
    return (
      <CityCardEdit
        navigation={navigation}
        onPressDelete={() => handlePressDelete()}
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
        data={[0, 1]}
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
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate(RouteNames.CityManagerScreen)}>
        <IconIonic
          name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'}
          size={60}
          color="#900"
        />
      </TouchableOpacity>
    ),
  };
};

export default CityManagerEdit;
