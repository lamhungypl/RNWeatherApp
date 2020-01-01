import {sprintf, vsprintf} from 'sprintf-js';
import axios from 'axios';
import moment from 'moment';

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
    const {temp} = main;
    const {main: mainWeather, icon} = weather[0];
    const time = moment(dt_txt, 'YYYY-MM-DD HH:mm:ss').format('HH:mm');
    return {temp, time, ...wind, mainWeather, icon};
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
