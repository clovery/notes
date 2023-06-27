/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    var numsObject = {};
    nums.forEach(function (num, i) {
        (numsObject[num] = numsObject[num] || []).push(i);
    });
    for (var key in numsObject) {
        var num = Number(key);
        var diff = String(target - num);
        if (numsObject.hasOwnProperty(diff)) {
            if (num === Number(diff)) {
                return [numsObject[num][0], numsObject[num][1]];
            }
            else {
                return [numsObject[num][0], numsObject[diff][0]];
            }
        }
    }
}
console.log(twoSum([3, 3], 6));
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8], 12));
