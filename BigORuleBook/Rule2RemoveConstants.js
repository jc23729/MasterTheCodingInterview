// RULE # 2 REMOVE CONSTANTS




function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);//Console log first item in the array.     Big O(1)

  var middleIndex = Math.floor(items.length / 2);// print the first half of the items. 
  var index = 0;
// as long as middle index is greater than 0 i want you to console log items, 
    // We're only logging half of the items.  Big O(n/2)
  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }
// console log "hi" 100 times `Big O(100)`
  for (var i = 0; i < 100; i++) {
    console.log("hi");
  }
}

// Whats the big O of this function?

// Big O(1 + n/2 + 100) = Big O(n)
// Big O(n/2 + 101) = Big O(n)
// Big O(1 + n) = Big O(n)
// Big O(n) = Big O(n)

