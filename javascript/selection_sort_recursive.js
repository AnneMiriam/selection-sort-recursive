function selectionSortRecursive(arr) {
  //* My code reworked based on Observable HQ - Recursion
  // base case
  if (arr.length < 2) {
    return arr
  }
// create a central element that other elements will pivot around
  const center = arr[arr.length - 1];
// other elements will pivot to the left or right of center
  const left = [],
    right = []
// iterate through the array
  for (let i = 0; i < arr.length-1; i++) {
  // if element is less than center pivot left
    if (arr[i] < center) {
      left.push(arr[i])
  // if element is greater than or equal center pivot right 
    } else {
      right.push(arr[i])
    }
  }
// the return recursively calls the function on the left and right arrays
// it is concatenating the sorted left, center and right using the spread operator
  return [...selectionSortRecursive(left), center, ...selectionSortRecursive(right)]

  // * original code-ish
  // if (arr.length < 2){
  //   return arr
  // }
  // const pivot = arr[arr.length - 1];
  // const left = [],
  //     right = []
  // for (let i = 0; i < arr.length - 1; i++) {
  //     if (arr[i] < pivot) {
  //       left.push(arr[i])
  //     } else {
  //       right.push(arr[i])
  //     }
  // }
  // return [...selectionSortRecursive(left), pivot, ...selectionSortRecursive(right)]
}

if (require.main === module) {
  console.log("Expecting: [-1, 1, 3, 5, 7, 9, 11]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 1, 9, 11, 7]));

  console.log("");

  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
