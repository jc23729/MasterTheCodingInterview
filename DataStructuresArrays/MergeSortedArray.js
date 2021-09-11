function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  // grab our first item in the array
  let array1Item = array1[0];
  //    array2Item  grabs the 3 in the second array mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    // Check input
    // if first is empty return the second array
  if (array1.length === 0) {
    return array2;
  }
  // if second is empty return the first array
  if (array2.length === 0) {
    return array1;
  }
// what happens if both arrays are empty?
  while (array1Item || array2Item) {
    // if the first array item is less than the second array item so O less than 4
    if (array2Item === undefined || array1Item < array2Item) {
      // push the first array item into the merged array which is 0
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
 }

// step 1: check if array1 is empty

// function mergeSortedArrays(array1, array2) {
//   // STEP 1: check if array1 is empty
//   // this is going to be our answer mergeddArray  
//   const mergedArray = [];
//   // grab our first item in the array array 1 which would be 0
//   let array1Item = array1[0];
//   // grab our first item in the array array 2 which would be 4
//   let array2Item = array2[0];

//   // STEP 2: check INPUT
//   if (array1.length === 0) {
//     return array2;
//   }

// }






mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
