import * as act from '../constants'

export function setMode(value){
  return {
    type: act.SET_MODE,
    value: value
  }
}
export function setMatrixSize(value,mode){
  return {
    type:mode === 0 ? act.DEC_SET_MATRIX_SIZE : act.ENC_SET_MATRIX_SIZE,
    value:value
  }
}
export function buildMatrix(size,mode){
  return {
    type:mode === 0 ? act.DEC_BUILD_MATRIX : act.ENC_BUILD_MATRIX,
    size:size
  }
}
export function fillMatrix(arrtext){
  return {
    type:act.DEC_FILL_MATRIX,
    arrtext:arrtext
  }
}
export function RenderingRelevantOutput(text,mode){
  return {
    type:mode === 0 ? act.DEC_SET_OUTPUT : act.ENC_SET_OUTPUT,
    text:text
  }
}
export function rotate(...rest){
  if (rest.length > 0){
    return {
      type: act.ENC_ROTATE,
      input:rest[0],
    }
  }
  else {
    return {
      type: act.DEC_ROTATE
    }
  }
}
export function incCount(mode){
  return {
    type:mode === 0 ? act.DEC_INC_COUNT : act.ENC_INC_COUNT
  }
}
export function reset(mode){
  return {
    type:mode === 0 ? act.DEC_RESET : act.ENC_RESET
  }
}
export function RenderingRelevantOutputAfterRotate(text){
  return {
    type: act.DEC_UPDATE_OUTPUT,
    text:text
  }
}
export function initializeActiveMatrixCell(...rest){
  if (rest.length > 1){
    return {
      type: act.ENC_CHOOSE_GRID,
      id:rest[0],
      text:rest[1],
      count:rest[2]
    }
  }
  else {
    return {
      type: act.DEC_CHOOSE_GRID,
      id:rest[0]
    }
  }
}
export function inputTextForEnrypt(text){
  return {
    type: act.ENC_SET_INPUT_TEXT,
    text: text
  }
}
