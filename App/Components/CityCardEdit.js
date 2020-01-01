import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Icons} from '../Assets';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
IconAntDesign.loadFont();
SimpleLineIcons.loadFont();
const CityCardEdit = props => {
  const handlePressMinus = () => {
    props.onPressDelete && props.onPressDelete();
  };
  return (
    <View style={styles.card}>
      <View style={styles.minus}>
        <TouchableOpacity onPress={() => handlePressMinus()}>
          <IconAntDesign name="minuscircleo" size={30} color="#900" />
        </TouchableOpacity>
      </View>

      <View style={styles.city}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.cityName}>Thanh Xuân</Text>
          <SimpleLineIcons name="location-pin" size={30} color="#000" />
        </View>
        <Text>Thanh Xuân, Hà Nội</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 15,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minus: {
    padding: 20,
  },
  city: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  cityName: {
    fontFamily: 'SFUIDisplay-Medium',
    fontSize: 15,
  },
});
export default CityCardEdit;
