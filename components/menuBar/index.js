import React from 'react';
import { StyleSheet,View, Image,Text, TouchableOpacity, TextInput, Button, AsyncStorage} from 'react-native'
import {connect} from 'react-redux';

import {quarterNoteUri, halfNoteUri ,fullNoteMenuUri, eighthNoteUri, } from '../constant';
import {updateTempoType,updateTempoPerRoom, updateSongName, loadNewSong, deleteNote} from './controller';

import { SinglePickerMaterialDialog } from 'react-native-material-dialog';

import DialogManager, { ScaleAnimation, DialogContent } from 'react-native-dialog-component';



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
    width:"45%",
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
  },
  selectedMusicNote:{
    width: 20,
    height: 30,
    marginRight:20,
    marginLeft:10,

    backgroundColor:'gray'
  },

  rightMenuIcon:{
    width: 20,
    height: 30,
    marginRight:20,
    marginLeft:10,
  }
});

const LIST = [4,3];

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

  constructor(props){
    super(props);
    this.state = {
      singlePickerVisible: false,
      songName:'',
      songList:[],
      loadDialogVisible:false
    }
  }

  onTempoMenuOpen(){
    this.setState({ singlePickerVisible: true })
  }


  onSaveSong(){

    DialogManager.dismiss(() => {
      console.log('callback - dismiss');
    });

    const {notes,option} = this.props;
    const savingObject =JSON.stringify({notes,option});
    //Save
    AsyncStorage.setItem(this.props.option.songName, savingObject);
  }

  onLoadSongLoadFinish(err,keys){
    if(err) return;

    this.setState({songList:keys,loadDialogVisible:true});

  }

  onLoadSong(){
    AsyncStorage.getAllKeys((err,keys)=>this.onLoadSongLoadFinish(err,keys));
  }

  onSaveMenuOpen(){
    DialogManager.show({
      title: 'Saving',
      titleAlign: 'center',
      animationDuration: 200,
      ScaleAnimation: new ScaleAnimation(),
      children: (
        <DialogContent>
          <View>
            <Text>
              Song name:
            </Text>
            <TextInput
              style={{height: 40}}
              placeholder="song name here!"
              onChangeText={(text) => this.props.updateSongName(text)}
              defaultValue={this.props.option.songName}
            />

            <Button
              title="Save"
              onPress={()=>this.onSaveSong()}
            />
          </View>
        </DialogContent>
      ),
    }, () => {
      console.log('callback - show');
    });
  }

  render () {
    const {updateTempoType, option} = this.props;
    const {currentTempoType, tempoPerRoom, songName} = option;
    return (
      <View style={styles.menuBar}>
        <View style={styles.leftMenu}>

          {TempoButton(1,currentTempoType, quarterNoteUri, updateTempoType)}
          {TempoButton(2,currentTempoType, halfNoteUri, updateTempoType)}
          {TempoButton(4,currentTempoType, fullNoteMenuUri, updateTempoType)}
          {TempoButton(0.5,currentTempoType, eighthNoteUri, updateTempoType)}


        </View>

        <View style={styles.rightMenu}>
          <TouchableOpacity onPress={()=>this.onTempoMenuOpen()}>
            <Image
              style={styles.musicNote}
              source={{uri:"https://png.icons8.com/windows/1600/realtime-protection.png"}}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.onSaveMenuOpen()}>
            <Image
              style={styles.musicNote}
              source={{uri:"http://icons.iconarchive.com/icons/custom-icon-design/mono-general-1/512/save-icon.png"}}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.onLoadSong()}>
            <Image
              style={styles.musicNote}
              source={{uri:"https://cdn.iconscout.com/public/images/icon/free/png-512/retrieve-3c801d6b76c64387-512x512.png"}}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.deleteNote()}>
            <Image
              style={styles.musicNote}
              source={{uri:"https://d30y9cdsu7xlg0.cloudfront.net/png/68251-200.png"}}
            />
          </TouchableOpacity>
        </View>


        <SinglePickerMaterialDialog
          title={'Pick room tempo'}
          items={LIST.map((row, index) => ({ value: row, label: row }))}
          visible={this.state.singlePickerVisible}
          selectedItem={{label:""+tempoPerRoom,value:tempoPerRoom}}
          onCancel={() => this.setState({ singlePickerVisible: false })}
          onOk={result => {
            this.setState({singlePickerVisible:false})
            this.props.updateTempoPerRoom(result.selectedItem.value)}
          }
        />

        <SinglePickerMaterialDialog
          title={'Pick songs'}
          items={this.state.songList.map((row, index) => ({ value: row, label: row }))}
          visible={this.state.loadDialogVisible}
          // selectedItem={{label:""+tempoPerRoom,value:tempoPerRoom}}
          onCancel={() => this.setState({ loadDialogVisible: false })}
          onOk={result => {
            console.log(result);
            this.setState({ loadDialogVisible: false });
            this.props.loadNewSong(result.selectedItem.value);
          }}
        />
      </View>
    )
  }
}

function mapStateToProps(state){
  return{
    option:state.data.option,
    notes:state.data.notes,
  }
}

export default connect(mapStateToProps,{updateTempoType,updateTempoPerRoom,updateSongName, loadNewSong, deleteNote})(MenuBar);