import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet,ScrollView,View, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  note:{
    // flex:1,
    height:"50%",
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
});

class Note extends React.Component {
  render () {
    return (
      <View style={styles.note}>
        Redux here pls
      </View>
    )
  }
}

const mapStateToProps = function(){
  //TBC HERE
};


export default connect()(Note)