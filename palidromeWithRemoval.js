function checkPalindrome(word, start) {
  const lowerChar = word[start];
  const higherChar = word[end];

  while (start < end && lowerChar === higherChar) {
    start += 1;
    end -= 1;
  }

  if (start >= end) {
    return true;
  }
  return false;
}

function palindromeWithRemoval(word) {}

const test1 = "abcba";
const test2 = "foobof";
const test3 = "abccab";

console.log(palindromeWithRemoval(test1));
console.log(palindromeWithRemoval(test2));
console.log(palindromeWithRemoval(test3));
