import { combineReducers } from 'redux';

import { DATA_AVAILABLE } from "../components/constant" //Import the actions types constant we defined in our actions

let dataState = { data: [], loading:true };

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      return {...state, hello:'world'};
    default:
      return state;
  }
};

// Combine all the reducers
const rootReducer = combineReducers({
  dataReducer
})

export default rootReducer;