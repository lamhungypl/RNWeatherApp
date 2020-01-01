import React, {useEffect, useState} from 'react';
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
import {
  replaceStringUrl,
  callApiGet,
  convertDataCurrentWeather,
  convertDataHourlyForecast,
} from '../Utils';
import {UrlApi, API_KEY} from '../Utils/Constants';
import ChartTemperature from '../Components/ChartTemperature';
IconMaterialCommunity.loadFont();
export default function WeatherDetail(props) {
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecastData, setForecastData] = useState([]);
  const [chartData, setChartData] = useState();
  const [isUpdated, setIsUpdated] = useState(false);
  const [isLoadingForecast, setIsLoadingForecast] = useState(false);
  const [isUpdatedForecast, setIsUpdatedForecast] = useState(false);
  useEffect(() => {
    const chartDataConfig = forecastData.slice(0, 8).map(data => {
      return {temp: data.temp, time: data.time};
    });
    const labels = chartDataConfig.map(data => data.time);
    const data = chartDataConfig.map(data => data.temp);
    const dataObject = {
      labels: labels,
      datasets: [
        {
          data: data,
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        },
      ],
    };
    setChartData(dataObject);
  }, [forecastData]);

  useEffect(() => {
    getCurrentWeather();
    getWeatherForecast();
  }, []);
  const getCurrentWeather = async () => {
    const url = replaceStringUrl(UrlApi.currentWeather, [
      ...props.city,
      API_KEY,
    ]);
    const data = await callApiGet(url);
    const useData = convertDataCurrentWeather(data);
    setCurrentWeather(useData);
  };
  const getWeatherForecast = async () => {
    const url = replaceStringUrl(UrlApi.three_hourlyForecast, [
      ...props.city,
      API_KEY,
    ]);
    const data = await callApiGet(url);
    const useData = convertDataHourlyForecast(data);
    setForecastData(useData);
    setIsUpdated(true);
    setIsUpdatedForecast(true);
  };

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
            <Text style={styles.currentTemp}>
              {(currentWeather && currentWeather.temp) || ''}°C
            </Text>
            <Text style={styles.currentWeather}>
              {(currentWeather && currentWeather.description) || ''}
            </Text>
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
            time={'Ngày mai'}
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
        {/* <TestChartCustom data={chartData} /> */}
        {(isUpdatedForecast && <ChartTemperature data={chartData} />) || (
          <View style={{height: 220, backgroundColor: '#0091EA'}} />
        )}
        <View style={styles.detailContainer}>
          <View style={{flex: 1, padding: 10}}>
            <Text style={styles.detaiText}>Chi tiết</Text>
          </View>

          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <WeatherAttribute
                title={'Gió'}
                source={Icons.humidity}
                value={currentWeather.speed}
              />
              <WeatherAttribute
                title={'Cảm giác như'}
                source={Icons.humidity}
                value={currentWeather.feels_like}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <WeatherAttribute
                title={'Sương mù'}
                source={Icons.humidity}
                value={currentWeather.humidity}
              />
              <WeatherAttribute
                title={'Áp suất'}
                source={Icons.umbrela}
                value={currentWeather.pressure}
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
