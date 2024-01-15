const checkTriangle = (a, b, c) => {
  if (a + b > c && b + c > a && c + a > b) {
    console.log("its triangle");
  } else {
    console.log("not a triangle");
  }
};

checkTriangle(10, 8, 1);
