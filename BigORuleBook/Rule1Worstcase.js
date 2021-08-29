//#1 -- For loop in Javascript.
const nemo = ["nemo"];

// When dealing with big O your always looking at the worst case scenario.
// Meaning if we looped through this array we can find it in say the the first array, 
// but worst case scenario we would have to loop through the entire array. meaning O(n)
function findNemo1(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
}

findNemo1(nemo);
