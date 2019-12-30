import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Images, Icons} from '../Assets';
import WeatherAttribute from './WeatherAttribute';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import WeatherAttributeCustom from './WeatherAttributeCustom';
IconAntDesign.loadFont();
SimpleLineIcons.loadFont();
const CityCard = () => {
  const handlePressCityCard = () => {};
  return (
    <TouchableOpacity onPress={() => handlePressCityCard()}>
      <View style={styles.card}>
        <View style={styles.mainContent}>
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
          <Image source={Icons.cloudrain}></Image>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.temperature}>21°C</Text>
          </View>
        </View>
        <View style={styles.seperator} />
        <View style={styles.detailContent}>
          <View style={styles.weatherAtt}>
            <WeatherAttributeCustom title={'Độ ẩm'} value={'81%'} />
            <Text>|</Text>
            <WeatherAttributeCustom title={'Gió Tây'} value={'5.1km/h'} />
          </View>
          <View style={styles.min_max}>
            <Text>24/20°C</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
  },
  mainContent: {
    flexDirection: 'row',
  },
  city: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityName: {
    fontFamily: 'SFUIDisplay-Medium',
    fontSize: 20,
  },
  temperature: {
    fontSize: 40,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  detailContent: {
    flexDirection: 'row',
  },
  weatherAtt: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  min_max: {},
});
export default CityCard;
