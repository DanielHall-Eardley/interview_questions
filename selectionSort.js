const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    const start = array[i];
    const lowest = array[minIndex];
    array[i] = lowest;
    array[minIndex] = start;
  }

  return array;
}

console.log(selectionSort(numbers));
