const numArray = require("./input");

const part1 = (nums, target) => {
    let numSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        if (numSet.has(difference)) {
            console.log("found part 1", difference * nums[i]);
            return difference * nums[i];
        }
        numSet.add(nums[i]);
    }
};

part1(numArray, 2020);
module.exports = part1;