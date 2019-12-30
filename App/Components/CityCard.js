import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Images, Icons} from '../Assets';
import WeatherAttribute from './WeatherAttribute';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
IconAntDesign.loadFont();
const CityCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.weatherText}>
        <Text style={styles.infoText}>The Lilac Field</Text>
        <Text style={styles.infoText1}>
          Kharkov region, Dergachevsky district
        </Text>
        <View
          style={{
            paddingVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              flex: 1,
              color: '#FFF',
              fontFamily: 'SFUIDisplay-Bold',
              fontSize: 28,
            }}>
            25°C
          </Text>
          <WeatherAttribute
            source={Icons.umbrela}
            value={'40%'}
            style={{color: '#FFFFFF'}}
          />
          <WeatherAttribute
            source={Icons.humidity}
            value={'40%'}
            style={{color: '#FFFFFF'}}
          />
        </View>
      </View>
      <View style={styles.weatherImg}>
        <Image source={Images.cloud} />
      </View>
      {/* <IconAntDesign name="bars" size={30} color="#900" /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 200,
    width: 350,
    borderRadius: 10,
    backgroundColor: 'rgba(0,144,255,0.76)',
    flexDirection: 'row',
  },
  weatherImg: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  weatherText: {
    flex: 1,
  },
  infoText: {
    color: '#FFFFFF',
    fontFamily: 'SFUIDisplay-Bold',
    fontSize: 22,
    paddingBottom: 10,
  },
  infoText1: {
    color: '#FFFFFF',
    fontFamily: 'SFUIDisplay-Medium',
    fontSize: 12,
  },
});
export default CityCard;
