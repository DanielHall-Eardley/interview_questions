//given an array of integers find sum of two elements that match a given number.

// Sorted array
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

// should return [2, 5]
const array = [1, 2, 5, 5, 6, 12, 22];
const target = 17;

const result = twoSumSorted(array, target);
console.log(result);

// O(n/2)

// Unsorted array brute force
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

// Unsorted array optimized
function twoSumOptimized(array, target) {
  if (array.length < 2) {
    return false;
  }

  return false;
}
