import {UPDATE_TEMPO_TYPE} from '../constant'

export function updateTempoType(newTempoType){
  return{
    type:UPDATE_TEMPO_TYPE,
    payload:newTempoType
  }
}
