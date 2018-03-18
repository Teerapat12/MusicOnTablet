import {UPDATE_NOTES} from '../constant'

export function updateNotes(newNote){
  return{
      type:UPDATE_NOTES,
      payload:newNote
  }
}
