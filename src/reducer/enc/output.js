import {
  SET_OUTPUT,
  UPDATE_OUTPUT,
  RESET
} from '../../constants'

export default (state='', action) => {
  const {type,text} = action;
  switch(type){
    case SET_OUTPUT:
      let res = '';
        for(let i = 0; i < text.length; i++){
          for(let j = 0; j < text.length;j++){
             if(text[i][j].active===true)
               res+=text[i][j].value
          }
          res+=' '
        }
      return res;
    case UPDATE_OUTPUT:
      for(let i = 0; i < text.length; i++){
        for(let j = 0; j < text.length;j++){
           if(text[i][j].active===true)
             state+=text[i][j].value
        }
        state+=' '
      }
      return state;
    case RESET:
        return ''
    default:return state;
  }
}
