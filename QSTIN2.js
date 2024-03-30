//A function that accepts two numbers to get an array between them.

function getArray(start, end) {
   // Initialize an empty array 'arr' to store the numbers in the range.
    let arr = [];
    for (let x = start; x<=end;x++) {
         // Push each number 'x' into the 'arr' array.
      arr.push(x);
    }// Return the 'arr' array containing all numbers from 'start' to 'end' inclusive
    return arr;
  }
  console.log(getArray(4, 7)); // 4, 5, 6, 7

  console.log(getArray(-4, 7)); // -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7