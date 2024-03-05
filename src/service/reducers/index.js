import { combineReducers } from 'redux';
import userReducer from './User';

const rootReducer = combineReducers({
    userReducer: userReducer
  // Add more reducers here if needed
});

export default rootReducer;