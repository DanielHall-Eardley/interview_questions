function createCounterObj(str1) {
  const freqCounter = {};

  for (let letter of str1) {
    if (freqCounter[letter]) {
      freqCounter[letter] += 1;
    } else {
      freqCounter[letter] = 1;
    }
  }

  return freqCounter;
}

function checkChar(str2, freqCounter) {
  for (let letter of str2) {
    if (!freqCounter[letter] || freqCounter[letter] < 0) {
      return false;
    }

    freqCounter[letter] -= 1;
  }

  return freqCounter;
}

function checkCharCount(freqCounter) {
  const keys = Object.keys(freqCounter);

  for (let key of keys) {
    if (freqCounter[key] > 0) {
      return false;
    }
  }
  return true;
}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const freqCounter = createCounterObj(str1);
  const obj = checkChar(str2, freqCounter);
  if (!obj) return false;
  return checkCharCount(obj);
}

console.log(isAnagram("tatter", "ettart"));
