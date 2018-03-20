import React from 'react';
import { StyleSheet,View, Image,Text, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux';
import {quarterNoteUri, halfNoteUri ,fullNoteUri, eighthNoteUri} from '../constant';
import {updateTempoType} from './controller';

const styles = StyleSheet.create({
  menuBar:{
    width: "100%",
    height: 40,
    flexDirection: 'row',
  },
  leftMenu:{
    height:40,
    width:"50%",
    borderRadius:30,
    borderWidth:3,
    borderColor:'black',

    flexDirection: 'row',
  },
  rightMenu:{
    height:40,
    width:"20%",
    borderRadius:30,
    borderWidth:3,
    borderColor:'black',

    flexDirection: 'row',

    position:'absolute',
    right:0
  },
  musicNote:{
    width: 20,
    height: 30,
    marginRight:20,
    marginLeft:10,

    // position: 'absolute',
    // left: 0,
    // right: 0,
    // top: 0,
  },
  selectedMusicNote:{
    width: 20,
    height: 30,
    marginRight:20,
    marginLeft:10,

    backgroundColor:'gray'

    // position: 'absolute',
    // left: 0,
    // right: 0,
    // top: 0,
  },
});

const TempoButton = (tempo,currentTempoType, uri,updateTempoType) => {
  return (
    <TouchableOpacity onPress={()=>updateTempoType(tempo)}>
      <Image
        style={currentTempoType!==tempo?styles.musicNote:styles.selectedMusicNote}
        source={{uri}}
      />
    </TouchableOpacity>
  )
}


class MenuBar extends React.Component {

  render () {
    const {updateTempoType, option} = this.props;
    const {currentTempoType} = option;
    return (
      <View style={styles.menuBar}>
        <View style={styles.leftMenu}>

          {TempoButton(1,currentTempoType, quarterNoteUri, updateTempoType)}
          {TempoButton(2,currentTempoType, halfNoteUri, updateTempoType)}
          {TempoButton(4,currentTempoType, fullNoteUri, updateTempoType)}
          {TempoButton(0.5,currentTempoType, eighthNoteUri, updateTempoType)}


        </View>

        <View style={styles.rightMenu}>
            <Text>here</Text>
        </View>

        <Text>{currentTempoType}</Text>
      </View>
    )
  }
}

function mapStateToProps(state){
  return{
    option:state.data.option
  }
}

export default connect(mapStateToProps,{updateTempoType})(MenuBar);