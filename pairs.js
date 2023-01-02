// Log all possible pair combinations

// loop thru array
// for each array element pair with every other element
// dont pair elements with themselves
// keep track of current element

// create an new array without the current element
//

function pairs(array) {
  array.forEach((el, index) => {
    const firstPortion = array.slice(0, index);
    const endPortion = array.slice(index + 1);
    const pairArray = [...firstPortion, ...endPortion];

    pairArray.forEach((pairedEl) =>
      console.log(`${el} is paired with ${pairedEl}`)
    );
  });
}
