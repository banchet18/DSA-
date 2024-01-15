const checkTriangle = (a, b, c) => {
  if (a === b && b === c && c === a) {
    console.log("eqvilateral");
  } else if (a !== b && b !== c && c !== a) {
    console.log("scalene");
  } else {
    console.log("isoscaline");
  }
};

checkTriangle(7, 6, 8);
