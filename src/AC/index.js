import {
  SET_MODE,
  DEC_SET_MATRIX_SIZE , ENC_SET_MATRIX_SIZE,
  DEC_FILL_MATRIX , ENC_FILL_MATRIX,
  DEC_BUILD_MATRIX , ENC_BUILD_MATRIX,
  DEC_CHOOSE_GRID , ENC_CHOOSE_GRID,
  DEC_ROTATE , ENC_ROTATE,
  DEC_SET_OUTPUT , ENC_SET_OUTPUT,
  DEC_UPDATE_OUTPUT , ENC_UPDATE_OUTPUT,
  DEC_RESET , ENC_RESET,
  DEC_INC_COUNT , ENC_INC_COUNT,
  ENC_SET_INPUT_TEXT, END_ENC
} from '../constants'

export function setMode(value){
  return {
    type: SET_MODE,
    value: value
  }
}
export function setMatrixSize(value,mode){
  return {
    type:mode === 0 ? DEC_SET_MATRIX_SIZE : ENC_SET_MATRIX_SIZE,
    value:value
  }
}
export function buildMatrix(size,mode){
  return {
    type:mode === 0 ? DEC_BUILD_MATRIX : ENC_BUILD_MATRIX,
    size:size
  }
}
export function setInputText(text){
  return {
    type: ENC_SET_INPUT_TEXT,
    text: text
  }
}
//----------------------------------------------------
//
export function fillMatrix(text,mode){
  return {
    type:mode === 0 ? DEC_FILL_MATRIX : ENC_FILL_MATRIX,
    text:text
  }
}
//
export function dec_chooseGrid(id){ // частная
  return {
    type:DEC_CHOOSE_GRID,
    id:id
  }
}
export function enc_chooseGrid(id,text,count){ // частная
  return {
    type:ENC_CHOOSE_GRID,
    id:id,
    text:text,
    count:count
  }
}
//
export function dec_rotate(){ //частная
  return {
    type:DEC_ROTATE
  }
}
export function enc_rotate(input,count){ //частная
  //console.log('AC',text)
  return {
    type:ENC_ROTATE,
    input:input,
    count:count
  }
}
//
export function setOutput(text,mode){//??
  return {
    type:mode === 0 ? DEC_SET_OUTPUT : ENC_SET_OUTPUT,
    text:text
  }
}
//
export function updateOutput(text,mode){//??
  return {
    type:mode === 0 ? DEC_UPDATE_OUTPUT : ENC_UPDATE_OUTPUT,
    text:text
  }
}
//
export function incCount(mode){
  return {
    type:mode === 0 ? DEC_INC_COUNT : ENC_INC_COUNT
  }
}
//
export function reset(mode){
  return {
    type:mode === 0 ? DEC_RESET : ENC_RESET
  }
}

export function endEnc(){
  return {
    type: END_ENC
  }
}
