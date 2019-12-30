import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import WeatherForecast from '../Components/WeatherForecastRow';
import {Images, Icons} from '../Assets';
import TestChartCustom from '../Components/TestChart/TestChartCustom';
import WeatherAttribute from '../Components/WeatherAttribute';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {RouteNames} from '../Config/Routes';
IconMaterialCommunity.loadFont();
export default function WeatherDetail(props) {
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
          <View style={styles.mainWeather}>
            <Text style={styles.currentTemp}>25°C</Text>
            <Text style={styles.currentWeather}>Nhiều mây</Text>
          </View>
        </View>
        <View style={styles.forecastContainer}>
          <WeatherForecast
            source={Images.cloud}
            temp={{max: 24, min: 16}}
            time={'Hôm nay'}
          />
          <WeatherForecast
            source={Images.cloud}
            temp={{max: 24, min: 16}}
            time={'Hôm nay'}
          />
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate(RouteNames.WeatherForecastScreen)
            }>
            <View
              style={{
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.forecastText}>Dự báo 5 ngày</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TestChartCustom />

        <View style={styles.detailContainer}>
          <View style={{flex: 1, padding: 10}}>
            <Text style={styles.detaiText}>Chi tiết</Text>
          </View>

          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <WeatherAttribute
                title={'Gió'}
                source={Icons.humidity}
                value={30}
              />
              <WeatherAttribute
                title={'Nhiệt độ'}
                source={Icons.humidity}
                value={30}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <WeatherAttribute
                title={'UV'}
                source={Icons.humidity}
                value={30}
              />
              <WeatherAttribute
                title={'Áp suất'}
                source={Icons.umbrela}
                value={30}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
WeatherDetail.navigationOptions = () => {
  return {
    headerTitle: () => <Text>{RouteNames.WeatherDetailScreen}</Text>,
    headerBackTitle: () => <View />,
    headerRight: () => (
      <TouchableOpacity onPress={() => alert('edit')}>
        <IconMaterialCommunity name="dots-vertical" size={30} color="#900" />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainWeather: {
    position: 'absolute',
    top: 10,
    left: 5,
  },
  currentTemp: {
    color: '#fff',
    fontFamily: 'SFUIText-Regular',
    fontSize: 70,
  },
  currentWeather: {
    color: '#fff',
    fontFamily: 'SFUIText-Regular',
    fontSize: 30,
  },
  forecastContainer: {
    backgroundColor: 'rgba(0, 118, 222,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  forecastText: {
    color: '#fff',
    fontFamily: 'SFUIText-Regular',
    fontSize: 20,
  },
  detailContainer: {
    backgroundColor: 'rgba(0, 118, 222,0.5)',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  detaiText: {
    color: '#fff',
    fontFamily: 'SFUIText-Regular',
    fontSize: 20,
  },
});

// export default WeatherDetail;
