import uuid from 'uuid/v4';
export function flipMatrix(matrix){
  return matrix[0].map((column,index) => {
    return matrix.map(row=>row[index])
  })
}
export function rotateMatrix(matrix){
  return flipMatrix(matrix.reverse())
}
export function buildMatrix(sizeMatrix){
  const res = [];

  let countPart = 1;
  let nums = []; // nums четверть полной матрицы
  for(let i=0,num=1; i < sizeMatrix/2;i++){
    nums[i] = [];
    for(let j=0; j < sizeMatrix/2;j++,num++){
      nums[i].push(num);
    }
  }
  //  ====================  1  ====================
  for(let i=0; i < sizeMatrix/2;i++){
    res[i] = [];
    for(let j=0; j < sizeMatrix/2;j++){
      res[i].push({
        id:uuid(),
        num:nums[i][j],
        part:countPart,
        active:false,
        value:'',
        visited:false
      })
    }
  }
  //  ====================  2  ====================
  nums = rotateMatrix(nums);
  countPart+=1;
  for(let i=0; i < sizeMatrix/2;i++){
    for(let j=0; j < sizeMatrix/2;j++){
      res[i].push({
        id:uuid(),
        num:nums[i][j],
        part:countPart,
        active:false,
        value:'',
        visited:false
      })
    }
  }
  //  ====================  3  ====================
  nums = rotateMatrix(rotateMatrix(nums));
  countPart+=1;
  for(let i=sizeMatrix/2; i < sizeMatrix;i++){
    res[i]=[];
    for(let j=0; j < sizeMatrix/2;j++){
      res[i].push({
        id:uuid(),
        num:nums[i-sizeMatrix/2][j],
        part:countPart,
        active:false,
        value:'',
        visited:false
      })
    }
  }
  //  ====================  4  ====================
  nums = rotateMatrix(rotateMatrix(rotateMatrix(nums)));
  countPart+=1;
  for(let i=sizeMatrix/2; i < sizeMatrix;i++){
    for(let j=0; j < sizeMatrix/2;j++){
      res[i].push({
        id:uuid(),
        num:nums[i-sizeMatrix/2][j],
        part:countPart,
        active:false,
        value:'',
        visited:false
      })
    }
  }
  return res;
}
export function buildArrFromCryptoText(text,size){
  //console.log('-------------')
  let arr = [];
  for(let i = 0; i < size; i++){
    arr[i] = [];
    for(let j = 0; j < size; j++){
      arr[i].push('');
    }
  }
  //console.log(arr)
  const s = text.split('\n');
  //console.log(s);
  for(let i = 0; i < s.length; i++){
    let eLength = s[i].length > size ? size : s[i].length;
    for(let j = 0; j < eLength; j++){
      arr[i][j]=s[i][j];
    }
  }
  //console.log(arr);
  return arr;
}
