// import minlistCityJson from './minData.json';
import listCity from './minData.json';
import listCitiesName from './dataCityNamesNew.json';
import loadLocalResource from 'react-native-local-resource';

export const getCityList = async () => {
  return listCity;
};
export const getCityListName = async () => {
  return listCitiesName;
};
