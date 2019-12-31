export const API_KEY = '587b22a179e686349ea45a1e89040e3e';
export const UrlApi = {
  currentWeather: `https://api.openweathermap.org/data/2.5/weather?q=%s,%s&appid=%s&units=metric`,
  three_hourlyForecast: `https://api.openweathermap.org/data/2.5/forecast?q=%s,%s&appid=%s&units=metric`,
  Icons: `http://openweathermap.org/img/wn/%s@2x.png`,

  dailyForecast: `api.openweathermap.org/data/2.5/forecast/daily?q={city name},{country code}&cnt={cnt}`,
  hourlyForecast: `pro.openweathermap.org/data/2.5/forecast/hourly?q={city name},{country code}`,
};
