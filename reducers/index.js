import { combineReducers } from 'redux';

import { DATA_AVAILABLE, UPDATE_NOTES, UPDATE_TEMPO_TYPE, UPDATE_TEMPO_PERROOM, UPDATE_SONG_NAME,LOAD_NEW_SONG, SELECT_NOTE_INDEX, DELETE_NOTE } from "../components/constant" //Import the actions types constant we defined in our actions

const init_notes = [
  // {key:"C1",beat:1, index:0},
  // {key:"D1",beat:1, index:1},
  // {key:"B1",beat:1, index:2},
  // {key:"B1",beat:1, index:12}
  ]

const init_option = {
  songName:'MySong01',
  tempoPerRoom:4,
  currentIndex:0,
  currentTempoType:1
}



let dataState = { data: [], loading:true ,notes:init_notes,option:init_option};

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      return {...state, hello:'world'};
    case UPDATE_TEMPO_TYPE:
      return {...state ,option:{...state.option,currentTempoType:action.payload}};
    case UPDATE_TEMPO_PERROOM:
      return {...state ,option:{...state.option,tempoPerRoom:action.payload}};
    case UPDATE_SONG_NAME:
      return {...state ,option:{...state.option,songName:action.payload}};
    case LOAD_NEW_SONG:
      return {...state ,...action.payload};
    case SELECT_NOTE_INDEX:
      let newIndex = action.payload
      if(state.option.currentIndex==newIndex){
        const latestNote = state.notes.reduce((a,b)=>a.index>b.index?a:b)
        newIndex = latestNote.index+latestNote.beat
      }
      return {...state ,option:{...state.option,currentIndex:newIndex}};
    case DELETE_NOTE:
      const oldNotes = state.notes;
      //Remove all note at currentIndex
      const newNotes = oldNotes.filter(note=>note.index!==state.option.currentIndex);
      return {...state,notes:newNotes}
    case UPDATE_NOTES:
      const {currentTempoType,currentIndex} = state.option;

      const newNote = {
        key:action.payload,
        beat:currentTempoType,
        index:currentIndex
      };

      return {...state, notes:[...state.notes,newNote],option:{...state.option,currentIndex:currentIndex+currentTempoType}}
    default:
      return state;
  }
};

// Combine all the reducers
const rootReducer = combineReducers({
  data:dataReducer
})

export default rootReducer;