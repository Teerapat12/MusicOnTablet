import {UPDATE_TEMPO_TYPE, UPDATE_TEMPO_PERROOM, UPDATE_SONG_NAME,LOAD_NEW_SONG} from '../constant'
import {AsyncStorage} from 'react-native';

export function updateTempoType(newTempoType){
  return{
    type:UPDATE_TEMPO_TYPE,
    payload:newTempoType
  }
}
export function updateTempoPerRoom(newTempoPerRoom){
  return{
    type:UPDATE_TEMPO_PERROOM,
    payload:newTempoPerRoom
  }
}

export function updateSongName(songName){
  return{
    type:UPDATE_SONG_NAME,
    payload:songName
  }
}

export function loadNewSong(songName){
  return function(dispatch){
    //Load song from name
    AsyncStorage.getItem(songName,(err,result)=>{
      if(err) console.log("ERROR");

      dispatch({
        type:LOAD_NEW_SONG,
        payload:JSON.parse(result)
      });
    })




  }
}
