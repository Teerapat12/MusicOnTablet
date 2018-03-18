import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import Keyboard from './components/keyboard';
import Note from './components/note';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers);

export default class App extends React.Component {


  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>

          <Note />

          <Keyboard />

        </View>
      </Provider>
    );
  }
}


