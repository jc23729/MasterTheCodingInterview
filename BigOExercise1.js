// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10;  // O(1) constant because were only running once
  a = 50 + 3; // O(1) constant because were only running once

  for (let i = 0; i < input.length; i++) { // O(n) linear because we are looping through the input array
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; //0(1)
}


// 3 steps


// 3 + n + n + n + n
// BIG O(3 + 4n)


