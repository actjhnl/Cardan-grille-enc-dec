import {
  DEC_SET_OUTPUT,
  DEC_UPDATE_OUTPUT,
  DEC_RESET
} from '../../constants'

export default (state='', action) => {
  const {type,text} = action;
  switch(type){
    case DEC_SET_OUTPUT:
      let res = '';
        for(let i = 0; i < text.length; i++){
          for(let j = 0; j < text.length;j++){
             if(text[i][j].active===true)
               res+=text[i][j].value
          }
          res+=' '
        }
      return res;
    case DEC_UPDATE_OUTPUT:
      for(let i = 0; i < text.length; i++){
        for(let j = 0; j < text.length;j++){
           if(text[i][j].active===true)
             state+=text[i][j].value
        }
        state+=' '
      }
      return state;
    case DEC_RESET:
        return ''
    default:return state;
  }
}
