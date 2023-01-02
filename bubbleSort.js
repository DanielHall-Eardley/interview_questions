const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

/* 
If the left pointer is greater then right pointer
switch the values and increment the both pointers +1

If the left pointer is less than the rp pointer increment both pointer + 1
*/

function bubbleSort(array) {
  let counter = 0;
  let left = 0;
  let right = 1;

  while (counter < array.length) {
    if (array[left] > array[right]) {
      const greaterValue = array[left];
      const smallerValue = array[right];
      array[left] = smallerValue;
      array[right] = greaterValue;
    }

    left += 1;
    right += 1;

    if (right === array.length) {
      counter += 1;
      left = 0;
      right = 1;
    }
  }

  return array;
}

console.log(bubbleSort(numbers));
