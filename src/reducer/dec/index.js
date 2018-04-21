import { combineReducers } from 'redux';
import {DEC_SET_MATRIX_SIZE,DEC_INC_COUNT,DEC_RESET,SET_MODE} from '../../constants';
import matrixReducer from './matrix';
import outputReducer from './output';
export default combineReducers({
  sizeMatrix: (state=10,action)=>{
    return action.type === DEC_SET_MATRIX_SIZE ? Number(action.value) : state;
  },
  matrix:matrixReducer,
  output:outputReducer,
  count: (state=1,action)=>{
    return action.type === DEC_INC_COUNT ? state+=1 : action.type === DEC_RESET ? 1 : state;
  }
})
