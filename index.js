function hasTargetSum(array, target) {
  // Use a nested loop to check all pairs of numbers
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // If the pair adds up to the target, return true
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  // If no pair is found, return false
  return false;
}

/* 
  Pseudocode:
  - Iterate over each element in the array using a nested loop.
  - For each pair of elements, check if their sum equals the target.
  - If a pair is found, return true.
  - If no pair is found, return false.

  Written explanation:
  The function iterates through each element in the array and checks all possible pairs to see if their sum equals the target. If a pair is found, the function returns true; otherwise, it returns false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
