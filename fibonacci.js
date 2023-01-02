function iterativeFib(n) {
  const fibArray = [0, 1, 1];

  while (fibArray.length - 1 !== n) {
    console.log(fibArray);
    const right = fibArray.length - 1;
    const left = fibArray.length - 2;
    const addRight = fibArray[right];
    const addLeft = fibArray[left];
    console.log(addLeft, addRight);
    const result = addLeft + addRight;
    fibArray.push(result);
  }

  return fibArray[n];
}

function recursiveFib(n) {
  if (n < 2) {
    return n;
  }

  return recursiveFib(n - 1) + recursiveFib(n - 2);
}

console.log(iterativeFib(14));
