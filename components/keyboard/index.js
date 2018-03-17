import React from 'react';
import { StyleSheet,ScrollView,View, TouchableOpacity } from 'react-native'
import Octave from '../octave';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  keyboard:{
    // flex:1,
    height:"20%",
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
          {
            [...Array(10)].map((x, i) =>
              <Octave octave={i} key={i}/>
            )
          }
          <Octave />
        </ScrollView>
      </View>
    )
  }
}

export default Keyboard