function hasTargetSum(array, target) {
  // Write your algorithm here
  for (i = 0; i < array.length; i++){
    const remainder = target - array[i];
    for (let j = i + 1; j < array.length; j++){
      if (array[j] === remainder) return true
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/
// O(n) - the time complexity is linear in the size of the input array. The function iterates through the input array once and for each element it checks if it is in the set.
/* 
  Add your pseudocode here

*/

/*
  Add written explanation of your solution here
  The function hasTarget takes in two elements as the input. an array of integers and an integer as a target
  The remainder variable stores integers that are a result of the subtraction of target and array[i]
  The second for loop checks for a similar integer as the remainder in our input array 
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
