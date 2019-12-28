import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const Button = props => {
  const {title = 'Enter', style = {}, textStyle = {}, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  button: {
    display: 'flex',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2AC062',
    shadowColor: '#2AC062',
    shadowOpacity: 0.4,
    shadowOffset: {height: 10, width: 0},
    shadowRadius: 20,
    padding: 30,
  },

  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#000000',
  },
});

export default Button;
