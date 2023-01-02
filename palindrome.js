// Check if a string spells the same word if it is reversed

function palindrome(word) {
  if (word.length < 3) return false;
  const lowerCaseWord = word.toLowerCase();
  let start = 0;
  let end = lowerCaseWord.length - 1;

  while (start <= end && end >= start) {
    const startChar = lowerCaseWord[start];
    const endChar = lowerCaseWord[end];

    if (startChar !== endChar) {
      return false;
    }

    start += 1;
    end -= 1;
  }

  return true;
}

console.log(palindrome("Hannah"));
