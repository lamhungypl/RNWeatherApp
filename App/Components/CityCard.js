import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Images, Icons} from '../Assets';
import WeatherAttribute from './WeatherAttribute';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import WeatherAttributeCustom from './WeatherAttributeCustom';
import {RouteNames} from '../Config/Routes';
IconAntDesign.loadFont();
SimpleLineIcons.loadFont();
const CityCard = props => {
  const [isEditting, setIsEditting] = useState(false);
  useEffect(() => {}, []);
  const handlePressCityCard = () => {
    props.navigation.navigate(RouteNames.HomeScreen, {city: props.city});
  };
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
              <Text style={styles.cityName}>{props.city.item.name}</Text>
              <SimpleLineIcons name="location-pin" size={30} color="#000" />
            </View>
            <Text>{`${props.city.item.name}, ${props.city.item.country}`}</Text>
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
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  cityName: {
    fontFamily: 'SFUIDisplay-Medium',
    fontSize: 15,
  },
  temperature: {
    fontSize: 30,
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
