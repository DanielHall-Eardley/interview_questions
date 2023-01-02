function tenTimesTable() {
  for (let i = 1; i < 2; i += 1) {
    let row = "x";
    for (let j = 1; j < 11; j += 1) {
      row += " " + i * j;
    }
    console.log(row);
  }

  for (let i = 1; i < 11; i += 1) {
    let row = i;
    for (let j = 1; j < 11; j += 1) {
      row += " " + i * j;
    }
    console.log(row);
  }
}

tenTimesTable();
