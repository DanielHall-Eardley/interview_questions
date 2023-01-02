function createCompObject(arr) {
  const obj = {};
  arr.forEach((item) => {
    const itemExists = obj[item];
    if (!itemExists) {
      obj[item] = true;
    }
  });
  return obj;
}

function checkForPair(arr, obj) {
  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    const itemExists = obj[item];
    if (itemExists) return true;
  }

  return false;
}

function findCommonItem(arr1, arr2) {
  const hashObj = createCompObject(arr1);
  return checkForPair(arr2, hashObj);
}
