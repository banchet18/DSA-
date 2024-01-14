// approach 1

// function minimum(x, y, z) {
//   if (x < y) {
//     if (x < z) {
//       console.log(x);
//     } else {
//       console.log(z);
//     }
//   } else if (y < z) {
//     console.log(y);
//   } else {
//     console.log(z);
//   }
// }

// minimum(10, 100, 5);

// approach 2

function minimum(x, y, z) {
  if (x < y && x < z) {
    console.log(x);
  } else if (y < z) {
    console.log(y);
  } else {
    console.log(z);
  }
}
minimum(10, 5, 30);
