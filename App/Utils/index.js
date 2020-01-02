import {sprintf, vsprintf} from 'sprintf-js';
import axios from 'axios';
import moment from 'moment';
import * as AsyncStorage from './AsyncStorage';
export {AsyncStorage};
export const callApiGet = async (url, params) => {
  return axios
    .get(url)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      const message = err.message || '';
      return {message, code: 404};
    });
};
export const replaceStringUrl = (baseUrl, arrStr) => {
  var path = vsprintf(baseUrl, arrStr);
  return path;
};
export const convertDataCurrentWeather = data => {
  const {main, wind, weather} = data;
  const {description, icon} = weather[0];
  return {...main, ...wind, description, icon};
};
export const convertDataHourlyForecast = data => {
  const convertedData = data.list.map(item => {
    const {dt_txt, main, weather, wind} = item;
    const {temp, temp_min, temp_max} = main;
    const {main: mainWeather, icon} = weather[0];

    const localTime = moment(dt_txt, 'YYYY-MM-DD HH:mm:ss').local();
    const time = moment(localTime).format('HH:mm');

    const day = moment(localTime)
      .format('L')
      .split('/')
      .slice(0, 2)
      .reverse()
      .join('/');
    return {temp, temp_min, temp_max, day, time, ...wind, mainWeather, icon};
  });
  return convertedData;
};
export const convertCityList = cityList => {
  const cityNames = cityList.map(city => {
    const name = `${city.name}, ${city.country}`;
    return {name};
  });
  return cityNames;
};
