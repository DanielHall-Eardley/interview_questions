//split string into character array
//iterate thru char array starting from 0 index
//each iteration put character before the last char

function reverseStr(str) {
  const charArray = str.split("");
  const reversedStr = charArray.reduce((str, char) => {
    return char + str;
  }, "");

  return reversedStr;
}
