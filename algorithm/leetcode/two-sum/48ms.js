/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // loop through values in array
  // at every value in the array, calcuclate the 'pair' im searching for- target-current value
  // check to see if the key(number) is in the object
  // if it is return the value(indexes)
  // else add it as a new key value pair
  let numsObj = {};
  for (let i = 0; i < nums.length; i++) {
      let current = nums[i];
      let match = target - current;
      if (match in numsObj) {
          return [i, numsObj[match]];
      } else {
          numsObj[current] = i;
      }
      
  }
};
