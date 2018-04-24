import {
  ENC_SET_OUTPUT,
  //UPDATE_OUTPUT,
  //RESET
} from '../../constants'

export default (state='', action) => {
  const {type,text} = action;
  switch(type){
    case ENC_SET_OUTPUT:
      let str = '';
      for(let key = 0; key < text.length; key++){
        for(let i = 0; i < text[key].length; i++){
          if(!!text[key][i].value)
            str+=text[key][i].value
        }
        if(str.length !== 0) str+='\n'
      }
      return str;
    default:return state;
  }
}
