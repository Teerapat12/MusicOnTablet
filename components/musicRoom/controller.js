import {SELECT_NOTE_INDEX,DELETE_NOTE} from '../constant'



export function selectNoteIndex(index){
  return{
    type:SELECT_NOTE_INDEX,
    payload:index
  }
}

