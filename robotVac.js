//Intake a string of directional steps return true or false
//depending on if the vac returns back to its starting position;

function moveVac(steps) {
  let horizontal = 100;
  let vertical = 100;

  for (let step of steps) {
    const lowerCaseStep = step.toLowerCase();

    if (lowerCaseStep === "l") {
      horizontal -= 1;
    }

    if (lowerCaseStep === "r") {
      horizontal += 1;
    }

    if (lowerCaseStep === "d") {
      vertical -= 1;
    }

    if (lowerCaseStep === "u") {
      vertical += 1;
    }
  }

  if (horizontal === 100 && vertical === 100) {
    return true;
  }

  return false;
}

console.log(moveVac("lrdrduu"));
