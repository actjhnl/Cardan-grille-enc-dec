import {
  DEC_FILL_MATRIX,
  DEC_BUILD_MATRIX,
  DEC_CHOOSE_GRID,
  DEC_ROTATE,
  DEC_RESET
} from '../../constants';
import {buildMatrix,flipMatrix,rotateMatrix} from '../../selectors'

const defaultSize = 10;
const defaultMatrix = buildMatrix(defaultSize);

export default (state=defaultMatrix, action) => {
  const {type,text,size} = action;
  switch(type){
    case DEC_BUILD_MATRIX:
      const res = buildMatrix(size);
      return res;
    case DEC_FILL_MATRIX:
      console.log(text)
      for(let i = 0; i < state.length; i++){
        for(let j = 0; j < state.length; j++){
          state[i][j].value = text[i][j]
        }
      }
      return [...state];
    case DEC_CHOOSE_GRID:
      const {id} = action;
      for(let key = 0; key < state.length; key++){
        for(let i = 0; i < state[key].length; i++){
          if(state[key][i].id === id){
            state[key][i].active = state[key][i].active===false?true:false;
          }
        }
      }
      return [...state];
    //
    case DEC_ROTATE:
      //create act создал кальку сетки с отметками в виде 1 где сетка отмечена
      let booleanCalca = [];
      for(let key = 0; key < state.length; key++){
        booleanCalca[key] = [];
        for(let i = 0; i < state[key].length; i++){
          if(state[key][i].active === true){
            booleanCalca[key].push(1)
          }
          else booleanCalca[key].push(0)
        }
      }
      //
      for(let key = 0; key < state.length; key++){
        for(let i = 0; i < state[key].length; i++){
          if(booleanCalca[key][i] === 1) state[key][i].visited = true;
        }
      }
      //
      booleanCalca = rotateMatrix(booleanCalca)
        for(let key = 0; key < state.length; key++){
          for(let i = 0; i < state[key].length; i++){
            state[key][i].active = booleanCalca[key][i] === 1 ? true : false;
          }
        }
      return [...state]
    //
    case DEC_RESET:
      for(let key = 0; key < state.length; key++){
        for(let i = 0; i < state[key].length; i++){
          state[key][i].active = false;
          state[key][i].visited = false;
          state[key][i].value = '';
        }
      }
      return [...state]
    default:return state;
  }
}
