import React, {Component} from 'react';

import {View, TouchableOpacity, Text, Image} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Button,
  Icon,
} from 'native-base';
import PropTypes from 'prop-types';
import {Images, Icons} from '../Assets';
import IconFeather from 'react-native-vector-icons/Feather';
IconFeather.loadFont();
export default function HeaderSearch(props) {
  return (
    <Header
      style={{
        backgroundColor: 'white',
        width: '100%',
        borderBottomWidth: 0,
        shadowColor: '#c0c0c0',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.66,
        shadowRadius: 0,
        elevation: 2,
      }}
      // iosBarStyle="light-content"
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 8,
          paddingRight: 0,
        }}>
        <TouchableOpacity
          style={{width: 40, height: 30, justifyContent: 'center'}}
          onPress={() => props.onPress()}>
          <IconFeather name="x" size={30} color="#900" />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: 16,
              color: '#4c4c4c',
              fontFamily: 'SFUIText-Regular',
            }}>
            {props.title}
          </Text>
        </View>
        <View style={{width: 40}} />
      </View>
    </Header>
  );
}
