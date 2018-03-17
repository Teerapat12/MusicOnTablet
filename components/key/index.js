import React from 'react';
import {connect} from 'react-redux';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import {updateNotes} from './controller';

const styles = {
  whiteKey: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor:'black',
    borderWidth:0.4,
    padding: 10,
    width:40,
    zIndex:-1
  },
  blackKey: {
    alignItems: 'center',
    backgroundColor: '#000000',
    borderColor:'black',
    borderWidth:0.4,
    padding: 10,
    width:20,

    marginLeft:-15,
    marginRight:-15,
    height:100,
    zIndex:5,


    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 45,
  }
};

function chooseKeyStyle(type, octave, i){
  if(type=="black"){
    return {...styles.blackKey,left:40*i+5+40*7*octave};
  }
  else
    return {...styles.whiteKey};
}

class Key extends React.Component {
  render () {
    const {note,type,i, octave} = this.props;
    return (
      <TouchableOpacity style={chooseKeyStyle(type,octave, i)} onPress={()=>this.props.updateNotes(note+octave)}>
        <Text>{note}</Text>
      </TouchableOpacity>
    )
  }
}

export default connect(null,{updateNotes})(Key);