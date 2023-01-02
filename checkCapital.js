function checkCapital(word) {
  for (let i = 1; i < word.length; i += 2) {
    const firstChar = word[i];
    let nextChar = word[i + 1];

    if (i === word.length - 1) {
      nextChar = word[i - 1];
    }

    if (
      (firstChar === firstChar.toUpperCase() &&
        nextChar === nextChar.toLowerCase()) ||
      (firstChar === firstChar.toLowerCase() &&
        nextChar === nextChar.toUpperCase())
    ) {
      return false;
    }
  }

  return true;
}

const test1 = "DASF";
const test2 = "ehtrhg";
const test3 = "Dgnrtnrt";
const test4 = "trnrtYbnnetnet";

console.log(checkCapital(test1));
console.log(checkCapital(test2));
console.log(checkCapital(test3));
console.log(checkCapital(test4));
