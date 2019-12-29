import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import WeatherForecast from '../Components/WeatherForecast';
import {Images, Icons} from '../Assets';
import TestChartCustom from '../Components/TestChart/TestChartCustom';
import WeatherAttribute from '../Components/WeatherAttribute';

const WeatherDetail = props => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#009AFF',
      }}
      contentContainerStyle={{
        paddingBottom: 20,
      }}>
      <View style={{paddingHorizontal: 20, flex: 1}}>
        <View style={{height: 300, backgroundColor: '#009AEF'}}>
          <Text>25°C</Text>
          <Text>Nhiều mây</Text>
        </View>
        <View
          style={{
            backgroundColor: '#009AEF',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <WeatherForecast
            source={Images.cloud}
            temp={{max: 24, min: 16}}
            time={'Hom nay'}
          />
          <WeatherForecast
            source={Images.cloud}
            temp={{max: 24, min: 16}}
            time={'Hom nay'}
          />
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>Du bao 5 ngay</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TestChartCustom />

        <View>
          <Text>Chi tiet</Text>
          <View style={{backgroundColor: '#009AEF'}}>
            <View style={{flexDirection: 'row'}}>
              <WeatherAttribute source={Icons.humidity} value={30} />
              <WeatherAttribute source={Icons.humidity} value={30} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <WeatherAttribute source={Icons.humidity} value={30} />
              <WeatherAttribute source={Icons.humidity} value={30} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WeatherDetail;
