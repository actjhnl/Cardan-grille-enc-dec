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
          str+=text[key][i].value
        }
        str+='\n'
      }

      // let test =[]
      // for(let key = 0; key < text.length; key++){
      //   test[key] = [];
      //   for(let i = 0; i < text[key].length; i++){
      //     test[key].push(text[key][i].value)
      //   }
      // }
      // let sss =[]
      // for(let key = 0; key < text.length; key++){
      //   sss[key]=test[key].join('')
      // }
      // state = sss.join('');
       console.log('=====',str)
      //state+=' jk';
      return str;
    // case UPDATE_OUTPUT:
    //   for(let i = 0; i < text.length; i++){
    //     for(let j = 0; j < text.length;j++){
    //        if(text[i][j].active===true)
    //          state+=text[i][j].value
    //     }
    //     state+=' '
    //   }
    //   return state;
    // case RESET:
    //     return ''
    default:return state;
  }
}
