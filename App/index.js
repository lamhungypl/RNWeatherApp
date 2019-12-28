import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Button from './Components/Button';
import CardView from './Components/CardView';

const App = () => {
  return (
    <SafeAreaView style={styles.startContainer}>
      <Button
        title="Add"
        onPress={() => alert(`Why you opened me? Go away, it's mine!`)}
        style={styles.customButton}
        textStyle={
          {
            /* styles for button title */
          }
        }
      />
      <CardView />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  startContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    position: 'absolute',
    top: 50,
    right: 10,
  },
});

export default App;
