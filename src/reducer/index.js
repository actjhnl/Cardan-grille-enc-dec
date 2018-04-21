import { combineReducers } from 'redux';
import {SET_MODE} from '../constants';
import dec from './dec';
import enc from './enc';
export default combineReducers({
  dec:dec,
  enc:enc,
  mode: (state=0,action)=>{
    return action.type === SET_MODE ? action.value :  state
  }
})
