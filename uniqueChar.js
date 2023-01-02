function uniqueChar(word) {
  if (word.length === 1) return 0;
  let str = word;
  for (let i = 0; i < str.length; i += 1) {
    const currentChar = str[i];
    const startCompareStr = str.slice(0, i);
    const endCompareStr = str.slice(i + 1);
    const compareStr = startCompareStr + endCompareStr;
    let isUnique = true;

    for (let j = 0; j < compareStr.length; j += 1) {
      if (currentChar === char) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) return i;
  }

  return -1;
}

console.log(uniqueChar("thaemnetmeanh"));
