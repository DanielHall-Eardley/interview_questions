/* Given an array of positive numbers calculate the largest 
possible container of water using two array elements as the sides 
and the space between array indices as the bottom. 
*/
// answer should be 32
const array = [5, 8, 10, 3, 7, 12];

function biggestContainer(array) {
  let maxArea = 0;

  for (let i = 0; i < array.length; i++) {
    const leftSide = array[i];
    for (let j = i + 1; j < array.length; j += 1) {
      const rightSide = array[j];
      let lowestSide = leftSide;
      if (rightSide < leftSide) {
        lowestSide = rightSide;
      }
      const bottom = j - i;
      const area = bottom * lowestSide;
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }

  return maxArea;
}

console.log(biggestContainer(array));
