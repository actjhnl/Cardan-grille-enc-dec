import {
  ENC_FILL_MATRIX,
  ENC_BUILD_MATRIX,
  ENC_CHOOSE_GRID,
  ENC_ROTATE,
  ENC_RESET,
  ENC_SET_OUTPUT
} from '../../constants';
import {buildMatrix,flipMatrix,rotateMatrix} from '../../selectors'

const defaultSize = 10;
const defaultMatrix = buildMatrix(defaultSize);

export default (state=defaultMatrix, action) => {
  const {type} = action;
  switch(type){
    case ENC_BUILD_MATRIX:            // собал матрицу пустую
      console.log('ENC_BUILD_MATRIX');
      const {size} = action;
      const res = buildMatrix(size);
      return res;
    case ENC_CHOOSE_GRID:
      console.log('ENC_CHOOSE_GRID');//у меня заполгяется квадрат сразу по порядку
      const {id,text} = action;
      //сперва инициализировал всю решетку
      for(let key = 0; key < state.length; key++){
        for(let i = 0; i < state[key].length; i++){
          if(state[key][i].id === id){
            state[key][i].active = state[key][i].active===false?true:false;
            state[key][i].value = state[key][i].value !== ''?'':state[key][i].value;
          }
        }
      }
      // затм расставляю буквы, чтобы по порядку
      let q = 0;
      for(let key = 0; key < state.length; key++){
        for(let i = 0; i < state[key].length; i++){
          if(state[key][i].active===true){
            state[key][i].value = text[q];
            q+=1;
          }
        }
      }
      return [...state];
    //
    case ENC_ROTATE:
      const {input,count} = action;
      console.log('reducer',input);
      //create act создал кальку сетки с отметками в виде 1 где сетка отмечена
      let booleanCalca = [];
      let start_index = 0;
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
          if(booleanCalca[key][i] === 1){
              state[key][i].visited = true;
          }
        }
      }

      // вычисление того, сколько отступать от начала,чтобы подставлять верные знач
      for(let key = 0; key < state.length; key++){
        for(let i = 0; i < state[key].length; i++){
          if(state[key][i].active === true || state[key][i].visited === true){
            start_index+=1;
          }
        }
      }
      //
      //
      booleanCalca = rotateMatrix(booleanCalca)
      let cnt = start_index;
        for(let key = 0; key < state.length; key++){
          //console.log(text[c])
          for(let i = 0; i < state[key].length; i++){
            state[key][i].active = booleanCalca[key][i] === 1 ? true : false;
            if(state[key][i].active===true && state[key][i].visited === false){
              state[key][i].value = input[cnt]; // надо два действия. одно инициализирует, второе добавляяет
              cnt+=1;
            }
          }
        }
      return [...state]
    //
    case ENC_RESET:
      console.log('ENC_RESET');
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
