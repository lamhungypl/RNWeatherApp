import React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';
import {replaceStringUrl} from '../Utils';
import {UrlApi} from '../Utils/Constants';

const ForecastItem = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTopDay}>{props.item.day}</Text>
      <Text style={styles.textTop}>{props.item.time}</Text>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image
          style={{
            width: 100,
            height: 100,
          }}
          source={{uri: replaceStringUrl(UrlApi.Icons, props.item.icon)}}
        />
      </View>

      <Text style={styles.textBot}>{props.item.temp}℃</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 90,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 4,
  },
  textTop: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 20,
    marginBottom: 20,
    // flex: 2,
  },
  textTopDay: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  textBot: {
    fontSize: 16,
    justifyContent: 'center',
    color: 'white',
    margin: 10,
  },
});
export default ForecastItem;
