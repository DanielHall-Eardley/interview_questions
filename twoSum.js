//given an array of integers find sum of two elements that match a given number.

function twoSumSorted(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start !== end) {
    const sum = arr[start] + arr[end];

    if (sum === target) {
      return [start, end];
    }

    if (sum < target) {
      start += 1;
    }

    if (sum > target) {
      end -= 1;
    }
  }

  return false;
}

const array = [1, 2, 5, 5, 6, 12, 22];
const target = 17;

const result = twoSumSorted(array, target);
console.log(result);
// O(n/2)

function twoSumUnsorted(array, target) {
  if (array.length < 2) {
    return false;
  }

  for (let i = 0; i < array.length; i++) {
    const leftNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const rightNum = array[j];
      const sum = leftNum + rightNum;
      if (sum === target) {
        return [i, j];
      }
    }
  }

  return false;
}

// should return [3, 5]
const arrayUnsorted = [6, 1, 2, 12, 22, 5];
const resultUnsorted = twoSumUnsorted(arrayUnsorted, target);
console.log(resultUnsorted);
// O(n * m - 1)

// Unsorted array partially optimized
function twoSumOptimized(array, target) {
  if (array.length < 2) {
    return false;
  }

  const obj = array.reduce((obj, number, index) => {
    obj[number] = index;
    return obj;
  }, {});

  for (let i = 0; i < array.length; i++) {
    const remainder = target - array[i];
    if (obj[remainder]) {
      return [i, obj[remainder]];
    }
  }

  return false;
}

const resultOptimized = twoSumOptimized(arrayUnsorted, target);
console.log(resultOptimized);

/* 
target = 17;
[6, 1, 2, 12, 22, 5];
 

{
  11: 0
  16: 1
  15: 2
  5: 3
  -5: 4
}
*/

// Unsorted array fully optimized
function twoSumFullyOptimized(array, target) {
  if (array.length < 2) {
    return false;
  }

  const numObj = {};

  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i];
    if (numObj[currentNum]) {
      return [numObj[currentNum], i];
    } else {
      const remainder = target - currentNum;
      numObj[remainder] = i;
    }
  }

  return false;
}

const resultFullyOptimized = twoSumFullyOptimized(arrayUnsorted, target);
console.log(resultFullyOptimized);
