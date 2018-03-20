import React from 'react';
import { StyleSheet,View, Image,Text} from 'react-native'
import {quarterNoteUri, quarterSharpNoteUri, halfNoteUri, fullNoteUri, eighthNoteUri} from '../constant';

const styles = StyleSheet.create({
  musicRoom:{
    // flexDirection: 'row',
    // alignSelf: 'flex-start'
  },
  musicBox:{
    width:200,
    height:20,
    borderWidth:1,
    borderColor:'black',
  },
  musicNote:{
    width: 20,
    height: 30,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  gap:{
    height:70
  }
});

const keyToNumMax = {
  'C':0,
  'D':1,
  'E':2,
  'F':3,
  'G':4,
  'A':5,
  'B':6,
}

const getNotefromStr = (note) =>{
  return {
    key:keyToNumMax[note[0]],
    octave:Number(note[note.length-1]),
    isSharp:note.length>2
  }
}

const getNoteUri = (beat,sharp) => {
  let mapping = {
    1: quarterNoteUri,
    2: halfNoteUri,
    4: fullNoteUri,
    0.5: eighthNoteUri,
  }
  return mapping[beat];

}

const MusicNote = (note, beat, index, roomSize) => {

  const roomIndex = index%roomSize;

  const noteInfo  = getNotefromStr(note);
  const {octave,key} =noteInfo;
  const noteIndex = octave*7+key;
  const noteStartIndex = octave>=2?283:313

  const noteXPosition = 12+50*roomIndex;
  const noteYPosition = noteStartIndex - noteIndex*10;

  const thisNoteStyle = StyleSheet.create({
    musicNote: {
      width: 20,
      height: 30,
      position: 'absolute',
      left: noteXPosition,
      right: 0,
      top: noteYPosition,
    }
  });

  const uri = getNoteUri(beat); // !noteInfo.isSharp?quarterNoteUri:quarterSharpNoteUri;

  if(noteInfo.isSharp){
    const sharpStyle = StyleSheet.create({
      sharp: {
        width: 10,
        height: 10,
        position: 'absolute',
        left: noteXPosition,
        right: 0,
        top: noteYPosition,
      }
    });

    return (
      [
        <Image
          key={index+"#"+note+"|"+noteXPosition}
          style={thisNoteStyle.musicNote}
          source={{uri}}

        />,
        <Image
           key={index+"#"+note+"|"+noteXPosition+"isSharp"}
          style={sharpStyle.sharp}
          source={{uri:"https://cdn.pixabay.com/photo/2012/04/11/12/20/sharp-note-27902_1280.png"}}
        />
      ]
    );
  }
  return (
    [
    <Image
      key={index+"#"+note+"|"+noteXPosition}
      style={thisNoteStyle.musicNote}
      source={{uri}}
    />
    ]
  );
}
class MusicRoom extends React.Component {
  render () {
    const {notes,size} = this.props;
    return (
      <View style={styles.musicRoom}>
        <View style={styles.gap}/>

        <View style={styles.musicBox}></View>
        <View style={styles.musicBox}></View>
        <View style={styles.musicBox}></View>
        <View style={styles.musicBox}></View>

        <View style={styles.gap}/>
        <View style={styles.musicBox}></View>
        <View style={styles.musicBox}></View>
        <View style={styles.musicBox}></View>
        <View style={styles.musicBox}></View>

        <View style={styles.gap}/>


        {/*<Text>{notes.map(note=>note.key)}</Text>*/}
        {notes.map(note=>MusicNote(note.key, note.beat, note.index , size))}
      </View>
    )
  }
}

export default MusicRoom