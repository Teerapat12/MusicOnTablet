import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Keyboard from './components/keyboard';
import Key from './components/key/index';
import Note from './components/note';

const store = configureStore({});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const store = configureStore({});

export default class App extends React.Component {


  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>

          <Note />

          <Keyboard />

        </View>
      </Provider>
    );
  }
}


