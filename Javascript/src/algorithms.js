(function () {
if(typeof Algorithms === "undefined") {
  window.Algorithms = {};
}

// Write a method, digital_root(num).
// It should sum the digits of a positive integer.
// If it is greater than or equal to 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the "digital root".
// Do not use string conversion within your method.
Algorithms.digitalRoot = function (number) {
  let sum = (Math.floor(number/10)) + (number % 10);
  if (sum <= 10){
    return sum;
  }else{
    return Algorithms.digitalRoot(sum);
  }
};

// Write a function that takes a message and an increment amount and outputs the same letters shifted by that amount in the alphabet.
// Assume lowercase and no punctuation.
// Preserve spaces.
Algorithms.caesarCipher = function (string, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  const shifted = string.split('').map(ch => {
    let idx = (alphabet.indexOf(ch) + shift) % 26;
    return alphabet[idx];
  });
  return shifted.join('');
};
//
// // Write a function that takes two strings and returns the length of the longest common substring.
Algorithms.commonSubstrings = function (stringOne, stringTwo) {
  let string1Hash = {};
  for(let i = 0; i < stringOne.length; i++){
    for(let j = i; j < stringOne.length; j++){
      string1Hash[stringOne.slice(i,j+1)] = true;
    }
  }
  let maxCommon = 0;
  for(let i = 0; i < stringTwo.length; i++){
    for(let j = i; j < stringTwo.length; j++){
      if (string1Hash[stringTwo.slice(i,j+1)]){
        if(stringTwo.slice(i,j+1).length > maxCommon){
          maxCommon = stringTwo.slice(i,j+1).length;
        }
      }
    }
  }
  return maxCommon;
};
//
// // Write a function that takes an array of integers and returns their sum.
// // Use recursion.
Algorithms.sumRec = function (numbers) {
  if (numbers.length === 0){
    return 0;
  }
  return numbers[0] + Algorithms.sumRec(numbers.slice(1));
};
//
// // Write a function which returns the first n elements from the fibonnacci sequence, given n.
Algorithms.fibs = function (number) {
  if (number <= 2){
    return [0,1] ;
  }
  let almostFibs = Algorithms.fibs(number - 1);
  almostFibs.push(almostFibs[almostFibs.length - 1] +
     almostFibs[almostFibs.length - 2]);
  return almostFibs;
};
//
// // Write a function that takes a string and returns true if it's a palindrome, false if it's not.
// // Your solution should take less time and memory than rebuilding the string backward and comparing the two.
Algorithms.isPalindrome = function (string) {
  let idx1 = 0;
  let idx2 = string.length - 1;
  while(idx1 < idx2){
    if(string[idx1] !== string[idx2]){
      return false;
    }
    idx1++;
    idx2--;
  }
  return true;
};
//
// // Implement the Folding Cipher.
// // It folds the alphabet in half and uses the adjacent letter.
// // a <=> z, b <=> y, c <=> x, m <=> n.
Algorithms.foldingCipher = function (string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  const folded = string.split('').map( ch => {
    let srchIdx = 25 - alphabet.indexOf(ch);
    return alphabet[srchIdx];
  });
  return folded.join('');
};
//
// // Write a method that finds all the unique substrings for a word.
Algorithms.uniqSubs = function (string) {
  let subs = {};
  for(let i = 0; i < string.length; i++){
    for(let j = i; j < string.length; j++){
      if(!subs[string.slice(i, j+1)])
      subs[string.slice(i, j+1)] = true;
    }
  }
  return Object.keys(subs);
};
//
//
// // Given an array of integers (positive and negative) find the largest contiguous subsum (sum of a subarray).
// // You can solve this trivially in O(n**2) time by considering all subarrays.
// // Try to solve it in O(n) time with O(1) memory.
Algorithms.lcs = function (array) {
  let runningSum = 0;
  let max = 0;
  array.forEach(int => {
    runningSum += int;
    if (runningSum > max){
      max = runningSum;
    }
    if (runningSum < 0){
      runningSum = 0;
    }
  });
  return max;
};
//
// // Write a function that takes a year (four digit integer) and returns an array with the 10 closest subsequent years that meet the following condition:
// // the first two digits summed with the last two digits are equal to the middle two digits.
Algorithms.sillyYears = function (number) {
  let sillyYears = [];
  let currentYear = number + 1;
  while(sillyYears.length < 10) {
    let charYear = currentYear.toString();
    let first = charYear.slice(0,2);
    let middle = charYear.slice(1,3);
    let end = charYear.slice(2,4);
    if((parseInt(first) + parseInt(end)) === parseInt(middle)){
      sillyYears.push(currentYear);
    }
    currentYear ++;
  }
  return sillyYears;
};
//
// // Given an array of integers, return all pairs that sum up to a specified value k.
// // List the pairs in [min, max] order.
// // Time complexity: O(n).
// // Return an array.
Algorithms.pairSum = function (array, k) {
  let hash = {};
  let pairs = [];
  array.forEach(el => {
    hash[el] = true;
  });
  let found = {};
  array.forEach(el =>{
    let searchItem = k - el;
    if(hash[searchItem] && !found[searchItem]){
      pairs.push([searchItem, el]);
      found[searchItem] = true;
      found[el] = true;
    }
  });
  return pairs;
};
//
// // Given a matrix of integers and coordinates of a rectangular region within the matrix.
// // Find the sum of numbers falling inside the rectangle.
// // Time complexity: O(number of rows * number of columns).
Algorithms.matrixRegionSum = function (matrix, topLeftCoords, bottomRightCoords) {
  let matrixSum = 0;
  for(let i = topLeftCoords[0]; i < bottomRightCoords[0] + 1; i++){
    for(let j = topLeftCoords[1]; j < bottomRightCoords[1] + 1; j++){
      matrixSum += matrix[i][j];
    }
  }
  return matrixSum;
};

//Implement an algorithm to determine if a string has all unique characters. What if you cannot use
//additional data structures?

//use a hash to keep track of character count, alternatively you could use an array of length 25.

const createAlphaHash = () => {
  let hash = {};
  "abcdefghijklmnopqrstuvwxyz".split('').forEach((ch) => {hash[ch] = 0; });
};

 Algorithms.uniqChars = function(str){
  let hash = createAlphaHash(); //O(1)
  str.forEach((ch) => {hash[ch] = hash[ch]++; });
  //O(n) Optimization would be to exit out of assignment early if count > 1
  Object.keys(hash).forEach(ch => { //O(1)
    if (hash[ch] > 1){
      return false;
    }
  });
  return true;
};

//Implement a function reverseChar which reverses a string

//Naive implementation takes O(n)
Algorithms.reverseChar = function(str){
  let reverse = [];
  let strArr = str.split(''); // O(n)
  for(let i = str.length - 1; i >= 0; i--){ //O(n)
    reverse.push(strArr[i]);
  }
  return reverse;
};

//Optimized algorithm completes in O(n/2) time.
Algorithms.reverseCharBetter = function(str){
  let idx1 = 0;
  let idx2 = str.length - 1;
  while(idx1 < idx2){
    let tmp = idx1;
    str[idx1] = str[idx2];
    str[idx2] = str[tmp];
    idx1++;
    idx2--;
  }
  return str;
};

//Given two strings, write a method to decide if one is a permutation of the other.

//Initial strategy is to get char count of each string and then compare char counts to each other. This will take O(n) time.

Algorithms.permutation = function(str1,str2){
  if(str1.length !== str2.length){
    return false;
  }
  let str1Hash = createAlphaHash(); //O(1)
  let str2Hash = createAlphaHash(); //O(1)

  str1.forEach((ch) => {str1Hash[ch] = str1Hash[ch]++; }); //O(n)
  str2.forEach((ch) => {str2Hash[ch] = str2Hash[ch]++; }); //O(n)

  Object.keys(str1Hash).forEach(key => { //O(1)
    if(str1Hash[key] !== str2Hash[key]){
      return false;
    }
  });

  return true;
};

//Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient spaces
//at the end of the string to hold the additional characters//Do this operation in place?

Algorithms.insertSpace = function(str){
  let strArray = str.split(' ');
  return strArray.join('%20');
};

//Implement a method to perform basic string compression using the counts of repeated characters
//ex: aabcccccaaa would ecome a2b1c5a3, if the "compressed" string would not become smaller than the original string
//return the original string

Algorithms.simpleCompression = function(str){
  const strArray = str.split('');
  let compressed = [];

  let currentChar = strArray[0];
  let currentCharCount = 0;
  for (let i = 1; i < strArray; i++){ //O(n)
    if(currentChar === strArray[i]){
      currentCharCount++;
    }else{
      compressed.push(currentChar);
      compressed.push(currentCharCount);
      currentChar = strArray[i];
      currentCharCount = 1;
    }
  }
  if (compressed.length > str.length){
    return str;
  }else{
    return compressed.join('');
  }
};

//Given an image represented by a NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees
//Can you do this in place?

//This is a matrix transformation. Switch rows with columns
// 1 2 3  1 4 7 input is a nested array [[1,2,3],[4,5,6],[7,8,9]]
// 4 5 6  2 5 8
// 7 8 9  3 6 9

Algorithms.rotateImage = function(matrix){ // O(N^2)
  for(let i = 0; i < matrix[0].length; i++){
    for(let j = i; j < matrix.length; j++){
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;

    }
  }
  return matrix;
};

//Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

//if you hit a zero, set all elements in that row to zero, save the col idx in a hash and set 0's to subsequent columns.
//is there a way to do this where you don't have to go through the array twice?
Algorithms.zeroCheck = function(matrix){
  let zeroCols = {};
  let zeroRows = {};

  matrix.forEach((row, idx1) => {
    row.forEach((colVal, idx2) => {
      if (matrix[idx1][idx2] === 0){
        matrix[idx1][idx2] = 0;
        zeroRows[idx1] = true;
        zeroCols[idx2] = true;
      }
      if(zeroCols[idx2]){ // paint over the columns first
        matrix[idx1][idx2] = 0;
      }
    });
  });
 //prevent from wiping out columns that are set to 0
  matrix.forEach((row, idx1) => {
    row.forEach((colVal, idx2) => {
      if (matrix[idx1][idx2] === 0){
        matrix[idx1][idx2] = 0;
        zeroRows[idx1] = true;
        zeroCols[idx2] = true;
      }
      if(zeroCols[idx1]){ // paint over the rows
        matrix[idx1][idx2] = 0;
      }
    });
  });
  return matrix;
};

//Assume you have a method isSubstring which checks if one word is a substring of another, Given two strings,
//s1 & s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring
//ex: "waterbottle" is a rotation of "erbottlewat"

//This solution is super clever, first make sure they are the same length, return false if they aren't
//Next you need to observe that s2, the rotated string will necessarily be a substring of s1s1
//

Algorithms.isRotation = function(str1,str2){
  if (str1.length !== str2.length){
    return false;
  }
  let concat = str1 + str1;
  concat.isSubstring(str2);
};

// String.protoype.isSubstring = function(str){
//   let idx1 = this.indexOf(str[0]);
//   for(let i = 0; i < str.length; i++){
//     if(this[idx1] !== str[i]){
//       return false;
//     }
//     idx1++;
//   }
//   return true;
// };

//1) Write code to remove duplicates from an unsorted linked list,
// strategy, iterate through nodes, if the node has been seen, delete it

Algorithms.deleteNode = function(nodeToDelete, previousNode){
  previousNode.next = nodeToDelete.next;
};

Algorithms.removeDuplicates = function(node, alreadySeen = {}){
  let currentNode = node;
  let previousNode = null;
  alreadySeen[currentNode] = true;
  while(node.next !== null){
    previousNode = node;
    currentNode = node.next;
    if (alreadySeen[currentNode]){
      Algorithms.deleteNode(previousNode, currentNode);
    }
    alreadySeen[currentNode] = true;
  }
};
//1 1/2) How would you solve this problem if a temporary buffer is not allowed

//2) implement an algorithm to find the kth to last element of a singly-linked List
//use a heap?

//Strategy: create two pointers, move the first pointer k elements, then move the pointers in tandem until you reach null,
//the second pointer will be at the kth to last element;

//3) implement an algorithm to delete a node in th emiddle of a singly linked list given only access to that node

//Strategy: Super cool! You will never have access to the previous node, so your strategy is to copy the information from the
//next node to your currentNode, delete the next node!

//4) write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x

//5) You have two numbers represented by a linked list, where each node contains a single digit
//The digits are stored in reverse order, such that the 1's digit is at the head of the list.
//Write a function that adds the two numbers and returns the sum as a linked list!
//EX: (7-> 1 -> 6) + (5-> 9 -> 2) = 617 + 295 = (2 -> 1 -> 9)

//5 1/2) Do this when the digits are stored in forward order.

//6) Given a circular linked list, implement an algorithm which rturns the node at the beginning of the oop
// EX: A-> B -> C -> D -> E -> C returns C

//7)Implement a function to check if a linked list is a palindrome

//sorting Algorithms

//bubble_sort

//Strategy, do comparisons for each idx, bubble until the value can't be switched

Algorithms.swap = function(array,idx1,idx2){
  const tmp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = tmp;
  return array;
};

Algorithms.bubbleSort = function(array){
  let idx = 0;
  let sorted = false;
  while(sorted === false){
    sorted = true;
    for(let i = 0; i < array.length - 1; i++){
      if(array[i] > array[i + 1]){
        array = Algorithms.swap(array,i, i+1);
        sorted = false;
      }
    }
    idx++;
  }
  return array;
};


//merge_sort
Algorithms.mergeSort = function(array){
  if (array.length <= 1){
    return array;
  }
  const mid = Math.floor(array.length/2);
  const sortedLeft = Algorithms.mergeSort(array.slice(0,mid));
  const sortedRight = Algorithms.mergeSort(array.slice(mid));
  return Algorithms.merge(sortedLeft, sortedRight);
};

Algorithms.merge = function(arr1, arr2){
  let sorted = [];
  while(arr1.length > 0 && arr2.length > 0){
    if(arr1[0] > arr2[0]){
      sorted.push(arr2.shift());
    }else{
      sorted.push(arr1.shift());
    }
  }
  return sorted.concat(arr1).concat(arr2);
};
//quick_sort

Algorithms.quickSort = function(array){
  if(array.length <= 1){
    return array;
  }
  const partition = array[0];
  const left = array.slice(1).filter(el => el <= partition);
  const right = array.slice(1).filter(el => el > partition);
  const sortedLeft = Algorithms.quickSort(left);
  const sortedRight = Algorithms.quickSort(right);
  return sortedLeft.concat(partition).concat(sortedRight);
};

//in-place quickSort

//Most of the logic of the in-place quicksort is done in the partitioning step.
// Algorithms.partition = function(array){
//   let partition = array[array.length - 1];
//   let partIdx = 0;
//   for(let i = 0; i < array.length - 1; i++){
//     if(array[i] < partition){
//       Algorithms.swap(array, partIdx, i)
//       partIdx ++;
//     }
//   }
//   Algorithms.swap(array, partIdx, array.length -1);
//   return partIdx;
// };
//
// Algorithms.inPlaceQuickSort = function(array){
//   if(array.length <= 1){
//     return array;
//   }
//
//   let partIdx = Algorithms.partition(array);
//   Algorithms.inPlaceQuickSort(array.slice(0,partIdx));
//   Algorithms.inPlaceQuickSort(array.slice(partIdx + 1));
//   return array;
// }

//selection_sort

  Algorithms.minimum = function(array){
    let min = 0;
    for(let i = 0; i < array.length; i++){
      if (array[i] < array[min]){
        min = i;
      }
    }
    return min;
  };

  Algorithms.selectionSort = function(array){
    let idx = 0;
    while(idx < array.length){
      let min = Algorithms.minimum(array.slice(idx));
      Algorithms.swap(array, idx, idx + min);
      idx++;
    }
    return array;
  };

//heap_sort

})();
