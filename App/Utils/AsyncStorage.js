import AsyncStorage from '@react-native-community/async-storage';
import Lodash from 'lodash';
const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};
const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
  } catch (e) {
    // read error
  }
};
const removeData = async key => {
  try {
    const value = await AsyncStorage.removeItem(key);
  } catch (e) {
    // read error
  }
};
const getDataMultipleKey = async keys => {
  let values;
  try {
    values = await AsyncStorage.multiGet(keys);
  } catch (e) {
    // read error
  }

  // example console.log output:
  // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
};
const setDataMultiKey = async keyValues => {
  // const firstPair = ["@MyApp_user", "value_1"]
  // const secondPair = ["@MyApp_key", "value_2"]
  try {
    await AsyncStorage.multiSet(keyValues);
  } catch (e) {
    //save error
  }
  console.log('Done.');
};

export {storeData, getData, removeData, getDataMultipleKey, setDataMultiKey};
