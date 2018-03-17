import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet,ScrollView,View, Text } from 'react-native'

const styles = StyleSheet.create({
  note:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    marginTop:200
  }
});

class Note extends React.Component {
  render () {
    const {notes} = this.props;
    return (
      <View style={styles.note}>
        <Text>ReduxHere!</Text>
        <Text>{notes}</Text>
      </View>
    )
  }
}

function mapStateToProps(state){
  return{
    notes:state.data.notes,
  }
}

export default connect(mapStateToProps)(Note)