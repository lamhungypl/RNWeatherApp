import React from 'react';
import {View, Text, Image} from 'react-native';

const TestImage = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={{uri: 'http://openweathermap.org/img/wn/02n@2x.png'}}
        style={{width: 100, height: 100}}
      />
      <Text>test image</Text>
    </View>
  );
};

export default TestImage;
