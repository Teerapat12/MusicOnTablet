import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor:'black',
    borderWidth:0.4,
    padding: 10,
    width:30
  }
});

class Key extends React.Component {
  render () {
    const {note} = this.props;
    return (
      <TouchableOpacity style={styles.button} >
        <Text>{note}</Text>
      </TouchableOpacity>
    )
  }
}

export default Key