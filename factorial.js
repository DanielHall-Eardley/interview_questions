function recursiveFactorial(number) {}

function iterativeFactorial(number) {
  let factorial = 1;

  for (let currentNumber = number; currentNumber > 1; currentNumber -= 2) {
    const result = currentNumber * (currentNumber - 1);
    factorial = factorial * result;
  }

  return factorial;
}

console.log(iterativeFactorial(6));
