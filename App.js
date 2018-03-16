import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Keyboard from './components/keyboard';
import Key from './components/key/index'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postContainer : {
    height:'100px',
    width:'100px',
    backgroundColor:'red'
  },
  userInformations: {
    backgroundColor:'blue'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});


export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

        <Keyboard />

      </View>
    );
  }
}


