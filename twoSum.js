//given an array of integers find sum of two elements that match a given number.

// target = 6
//
// [1, 5, 7, 10, 12]

function targetSum(arr, target) {
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

// should return [2, 4]
const array = [1, 2, 5, 5, 6, 12, 22];
const target = 17;

const result = targetSum(array, target);
console.log(result);

// O (n/2)
