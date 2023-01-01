function counter() {
  const freqCounter = {};

  return {
    checkProperty(el) {
      return freqCounter[el];
    },

    setProperty(el) {
      freqCounter[el] = 1;
    },

    incProperty(el) {
      freqCounter[el] += 1;
    },

    checkDuplicate(el) {
      if (freqCounter[el] > 1) return true;
      return false;
    },

    getCounter() {
      return freqCounter;
    },
  };
}

function checkDuplicate(arr) {
  const count = counter();
  for (let el of arr) {
    if (!count.checkProperty(el)) {
      count.setProperty(el);
    } else {
      count.incProperty(el);
    }

    if (count.checkDuplicate(el)) return true;
  }
  console.log(count.getCounter());
  return false;
}

const array = [1, 5, 3, 6, 5, 8, 2];
console.log(checkDuplicate(array));
