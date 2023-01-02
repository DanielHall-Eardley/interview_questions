function createFreqObj(jewel) {
  const freqCounter = {};

  for (let j of jewel) {
    if (freqCounter[j]) {
      freqCounter[j] += 1;
    } else {
      freqCounter[j] = 1;
    }
  }

  return freqCounter;
}

function getTotal(freqCounter, stones) {
  let total = 0;
  for (let s of stones) {
    if (freqCounter[s]) {
      total += freqCounter[s];
    }
  }

  return total;
}

function compare(jewels, stones) {
  const freqCounter = createFreqObj(jewels);
  return getTotal(freqCounter, stones);
}

console.log(compare("abcccc", "ac"));
