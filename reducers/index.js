import { combineReducers } from 'redux';

import { DATA_AVAILABLE, UPDATE_NOTES } from "../components/constant" //Import the actions types constant we defined in our actions

let dataState = { data: [], loading:true ,notes:["B","C","A"]};

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      return {...state, hello:'world'};
    case UPDATE_NOTES:
      return {...state, notes:[...state.notes,action.payload]}
    default:
      return state;
  }
};

// Combine all the reducers
const rootReducer = combineReducers({
  data:dataReducer
})

export default rootReducer;