import { combineReducers } from 'redux';
import {ENC_SET_MATRIX_SIZE,ENC_INC_COUNT,ENC_RESET,SET_MODE} from '../../constants';
import matrixReducer from './matrix';
import outputReducer from './output';
export default combineReducers({
  sizeMatrix: (state=10,action)=>{
    return action.type === ENC_SET_MATRIX_SIZE ? Number(action.value) : state;
  },
  matrix:matrixReducer,
  output:outputReducer,
  count: (state=1,action)=>{
    return action.type === ENC_INC_COUNT ? state+=1 : action.type ===ENC_RESET ? 1 : state;
  }
})
