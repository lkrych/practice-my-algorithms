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

};

// Write a function that takes a message and an increment amount and outputs the same letters shifted by that amount in the alphabet.
// Assume lowercase and no punctuation.
// Preserve spaces.
Algorithms.caesarCipher = function (string, shift) {

};

// Write a function that takes two strings and returns the length of the longest common substring.
Algorithms.commonSubstrings = function (stringOne, stringTwo) {

};

// Write a function that takes an array of integers and returns their sum.
// Use recursion.
Algorithms.sumRec = function (numbers) {

};

// Write a function which returns the first n elements from the fibonnacci sequence, given n.
Algorithms.fibs = function (number) {
  if (number < 2){
    return [0,1] ;
  }
  let almostFibs = Algorithms.fibs(number - 1);
  almostFibs = almostFibs.push(almostFibs[almostFibs.length - 1] +
     almostFibs[almostFibs.length - 2]);
  return almostFibs;
};

// Write a function that takes a string and returns true if it's a palindrome, false if it's not.
// Your solution should take less time and memory than rebuilding the string backward and comparing the two.
Algorithms.isPalindrome = function (string) {
  let idx1 = 0;
  let idx2 = string.length - 1;
  while(idx1 < idx2){
    if(string[idx1] !== string[idx2]){
      return false;
    }
  }
  return false;
};

// Implement the Folding Cipher.
// It folds the alphabet in half and uses the adjacent letter.
// a <=> z, b <=> y, c <=> x, m <=> n.
Algorithms.foldingCipher = function (string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  string.chars.map( ch => {
    let srch_idx = 25 - alphabet.indexOf(ch);
    return alphabet[srch_idx];
  });
};

// Write a method that finds all the unique substrings for a word.
Algorithms.uniqSubs = function (string) {
  let subs = [];
  for(let i = 0; i < string.length - 1; i++){
    for(let j = i; j < string.length - 1; j++){
      subs.push(string.slice(i, j+1));
    }
  }
  return subs;
};


// Given an array of integers (positive and negative) find the largest contiguous subsum (sum of a subarray).
// You can solve this trivially in O(n**2) time by considering all subarrays.
// Try to solve it in O(n) time with O(1) memory.
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

// Write a function that takes a year (four digit integer) and returns an array with the 10 closest subsequent years that meet the following condition:
// the first two digits summed with the last two digits are equal to the middle two digits.
Algorithms.sillyYears = function (number) {
  let sillyYears = [];
  let currentYear = number + 1;
  while(sillyYears.length < 9) {
    let charYear = currentYear.toString();
    let first = charYear.slice(0,2);
    let middle = charYear.slice(1,3);
    let end = charYear.slice(2,4);
    if((parseInt(first) + parseInt(end)) === parseInt(end)){
      sillyYears.push(currentYear);
    }
  }
  return sillyYears;
};

// Given an array of integers, return all pairs that sum up to a specified value k.
// List the pairs in [min, max] order.
// Time complexity: O(n).
// Return an array.
Algorithms.pairSum = function (array, k) {
  let hash = {};
  let pairs = [];
  array.forEach(el => {
    hash[el] = true;
  });
  let found = {};
  array.forEach(el =>{
    let searchItem = k - el;
    if(hash[searchItem && !found[searchItem]]){
      pairs.push([searchItem, el]);
      found[searchItem] = true;
      found[el] = true;
    }
  });
  return pairs;
};

// Given a matrix of integers and coordinates of a rectangular region within the matrix.
// Find the sum of numbers falling inside the rectangle.
// Time complexity: O(number of rows * number of columns).
Algorithms.matrixRegionSum = function (matrix, topLeftCoords, bottomRightCoords) {
  let matrixSum = 0;
  for(let i = topLeftCoords[0]; i < bottomRightCoords[0]; i++){
    for(let j = topLeftCoords[1]; j < bottomRightCoords[1]; j++){
      matrixSum += matrix[i][j];
    }
  }
  return matrixSum;
};



})();
