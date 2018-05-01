import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet,ScrollView,View, Text, Image, InteractionManager, Button, Share } from 'react-native'

import MusicRoom from '../musicRoom';
import {trademark} from '../constant';

import {playNotes} from './controller';

import { takeSnapshotAsync , FileSystem} from 'expo';


const styles = StyleSheet.create({
  title:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  note:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    marginTop:200
  },
  clefs:{
    width: 50,
    height: 150,
    position: 'absolute',
    left: 0,
    right: 0,
    top: -7,
    },
});



class Note extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      contentWidth:0
    };
  }

  async captureScreen(){
    console.log("Capturing screen");
    // const targetPixelCount = 1080; // If you want full HD pictures
    // const pixelRatio = 4/3//PixelRatio.get(); // The pixel ratio of the device
    // const pixels = targetPixelCount / pixelRatio;
    // const vComponent = <View><Text>Hello</Text></View>;
    //
    // // console.log(this.scrollView);
    //
    // const result = await takeSnapshotAsync(this.musicButton, {
    //   result: 'file',
    //   height: 100,
    //   width: 100,
    //   quality: 1,
    //   format: 'png',
    // });
    //
    // const fileUri = FileSystem.documentDirectory + "note.png";
    // const url = result;
    //
    // Share.share({message:"Sharing",title: 'Check out this photo',url:url});
    //
    // // let downloadObject = FileSystem.copyAsync({from:url,to:fileUri});
    // // let response = await downloadObject.downloadAsync();
    //
    // console.log("DONEDe");
    // console.log(result);
  }


  renderNotes(notes,musicRoomSize){
    const maxNoteIndex = notes.length>0?Math.max(...notes.map(note=>note.index)):0;

    let musicSheet = []
    for(let i=0;i<=maxNoteIndex;i+=musicRoomSize){
      const selectedNote = notes.filter(note=>note.index>=i&& note.index<i+musicRoomSize);

      musicSheet.push(<MusicRoom notes={selectedNote} size={musicRoomSize} key={i}/>);
    }

    return musicSheet
  }


  scrollToRight() {
    //TODO: Find how to make it such that when add new note it scroll to that position.
    const _scrollView = this.scrollView;

    setTimeout(() => {
      _scrollView.scrollTo({x:1000000,y:0,animated:true});
      // console.log("called DidMount");
    }, 1);
  }

  componentDidMount(){
    this.scrollToRight();
  }


  render () {
    const {notes, option} = this.props;
    const {currentTempoType, currentIndex, tempoPerRoom,songName} = option;
    return (
      <View style={styles.note} >

        <Text style={styles.title}>{songName}</Text>
        <Text>{trademark}</Text>
        <Button ref={view => (this.musicButton = view)} title={'Play'} onPress={()=>playNotes(notes)} />

        {/*<Text>Notes: {notes.length>0?Math.max(...notes.map(note=>note.index)):0} {tempoPerRoom}</Text>*/}
        <ScrollView
          horizontal = {true}
          ref={scrollView => this.scrollView = scrollView}
          onContentSizeChange={(w,h)=>this.scrollToRight()}
        >
            <View>
              <Image
                source={{uri:'https://cdn.pixabay.com/photo/2016/04/07/22/09/note-1314943_1280.png'}}
                style={styles.clefs}
              />
              <Text>               </Text>
            </View>
          {this.renderNotes(notes,tempoPerRoom)}

        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps(state){
  return{
    notes:state.data.notes,
    option:state.data.option
  }
}

export default connect(mapStateToProps)(Note)