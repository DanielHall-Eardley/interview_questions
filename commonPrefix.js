function commonPrefix(array) {
  let commonPrefix = array[0];

  for (let i = 1; i < array.length; i += 1) {
    const compareWord = array[i];

    for (let j = 0; j < compareWord.length; j += 1) {
      if (commonPrefix[j] !== compareWord[j]) {
        commonPrefix = commonPrefix.slice(0, j);
        break;
      }
    }
  }

  return commonPrefix;
}

const wordArray = ["a", "b", "c"];

console.log(commonPrefix(wordArray));
