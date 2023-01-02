/* 
  Given an array and a number move the 
  last element to the beginning of the array (n) times.
*/

function rotateArray(arr, num) {
  if (num < 1) return;
  const startIndex = arr.length - num;
  const start = arr.slice(startIndex);
  const end = arr.slice(0, startIndex);
  console.log("start", start);
  console.log("end", end);
  return [...start, ...end];
}

const test = [1, 2, 3, 4, 5, 6];

console.log(rotateArray(test, 3));
