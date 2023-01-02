const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

/* 

Outer loop checks array[i + 1] (right pointer) is less
then array[i] left pointer

if true create an inner for loop starts at i - 1
and decrements towards the start of the array

find 
*/

function selectionSort(array) {
  l;
  for (let i = 0; i < array.length; i += 1) {
    let left = i;
    let right = i + 1;

    if (array[right] < array[left]) {
      let j = i - 1;
      while (array[j] > array[right]) {
        j -= 1;
      }

      const temp = array[right];
      array[right] = array[j];
      array[j] = temp;
    }
  }

  return array;
}

console.log(selectionSort(numbers));
