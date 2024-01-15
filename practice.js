const checkTriangle = () => {
  if (a === b && b === c && c === a) {
    console.log("eqvilateral");
  } else if (a !== b && b !== c && c !== a) {
    console.log("scalene");
  } else {
    console.log("isoscaline");
  }
};
