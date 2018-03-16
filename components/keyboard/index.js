import React from 'react';
import { StyleSheet,ScrollView,View, TouchableOpacity } from 'react-native'
import Key from '../key';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  keyboard:{
    // flex:1,
    height:"50%",
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
});

class Keyboard extends React.Component {
  render () {
    return (
      <View style={styles.keyboard}>
        <ScrollView horizontal = {true}>
          <Key note={"C"}/>
          <Key note={"D"}/>
          <Key note={"E"}/>
          <Key note={"F"}/>
          <Key note={"G"}/>
          <Key note={"C"}/>
          <Key note={"D"}/>
          <Key note={"E"}/>
          <Key note={"F"}/>
          <Key note={"G"}/>
          <Key note={"C"}/>
          <Key note={"D"}/>
          <Key note={"E"}/>
          <Key note={"F"}/>
          <Key note={"G"}/>
          <Key note={"C"}/>
          <Key note={"D"}/>
        </ScrollView>
      </View>
    )
  }
}

export default Keyboard