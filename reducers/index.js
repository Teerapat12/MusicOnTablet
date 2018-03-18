import { combineReducers } from 'redux';

import { DATA_AVAILABLE, UPDATE_NOTES } from "../components/constant" //Import the actions types constant we defined in our actions

const init_notes = [
  // {key:"C1",beat:1, index:0},
  // {key:"D1",beat:1, index:1},
  // {key:"B1",beat:1, index:2},
  // {key:"B1",beat:1, index:12}
  ]

const option = {
  tempoPerRoom:4,
  currentIndex:0,
  currentTempoType:1
}



let dataState = { data: [], loading:true ,notes:init_notes,option};

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      return {...state, hello:'world'};
    case UPDATE_NOTES:
      const {currentTempoType,currentIndex} = state.option;

      const newNote = {
        key:action.payload,
        beat:currentTempoType,
        index:currentIndex
      };

      return {...state, notes:[...state.notes,newNote],option:{...option,currentIndex:currentIndex+1}}
    default:
      return state;
  }
};

// Combine all the reducers
const rootReducer = combineReducers({
  data:dataReducer
})

export default rootReducer;