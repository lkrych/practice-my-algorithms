const swap = function(array,idx1,idx2){
  const tmp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = tmp;
  return array;
};
const partition = function(array, start, length){
  let part = array[length];
  let partIdx = start;
  for(let i = start; i < length; i++){
    if(array[i] < part){
      swap(array, partIdx, i);
      partIdx ++;
    }
  }
  swap(array, partIdx, length);
  return partIdx;
};

const inPlaceQuickSort = function(array, start = 0, length = array.length - 1){
  if(array.length <= 1){
    return array;
  }

  let partIdx = partition(array, start, length);
  let leftLength = partIdx - start;
  let rightLength = length - (leftLength + 1);
  inPlaceQuickSort(array, 0, leftLength);
  inPlaceQuickSort(array, partIdx + 1, rightLength);
  return array;
};

// inPlaceQuickSort([5,4,3,2,1,6]);
const minimum = function(array){
  let min = 0;
  for(let i = 0; i < array.length; i++){
    if (array[i] < array[min]){
      min = i;
    }
  }
  return min;
};

const selectionSort = function(array){
  let idx = 0;
  while(idx < array.length){
    let min = minimum(array.slice(idx));
    swap(array, idx, idx + min);
    idx++;
  }
  return array;
};

selectionSort([5,4,3,2,1,6]);
