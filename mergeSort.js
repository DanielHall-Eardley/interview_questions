//Merge two sorted arrays into one sorted array

// only numbers
// different length arrays
// duplicate numbers within the same array

/* 
  [1, 4, 6]  [4, 5, 10]

  [6]  [5, 10]

  [1, 4, 4]
*/

// compare the two first elements
// remove the lesser value
// add to sorted array

function mergeSort(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return;
  const sortedArray = [];
  const firstArr = [...arr1];
  const secondArr = [...arr2];

  // continue iterating until the smallest array is empty
  while (firstArr.length !== 0 && secondArr.length !== 0) {
    if (firstArr[0] < secondArr[0]) {
      const lowerEl = firstArr.shift();
      sortedArray.push(lowerEl);
    } else {
      const lowerEl = secondArr.shift();
      sortedArray.push(lowerEl);
    }
  }

  if (firstArr.length > 0) {
    sortedArray.push(...firstArr);
  }

  if (secondArr.length > 0) {
    sortedArray.push(...secondArr);
  }

  return sortedArray;
}
