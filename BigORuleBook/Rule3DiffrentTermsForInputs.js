
// Diffrent term for diffrent inputs    

// NESTED LOOPS
// if you see nested loops we use multiplicaiton

// SO O(n)^2  // n^2 so we use multiplication
// so this horribly inefficient or slow algorithm is called quadratic time



//Log all pairs of array

const boxes = ["a", "b", "c", "d", "e"];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxes);
