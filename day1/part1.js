const input = require('./input');

const part1 = (nums, target) => {
    const numArr = Array.isArray(nums)
        ? nums
        : nums.split('\n').map(num => parseInt(num)).sort((x, y) => x-y);
    let numSet = new Set();
    for (let i = 0; i < numArr.length; i++) {
        const difference = target - numArr[i];
        if (numSet.has(difference)) {
            console.log("found part 1", difference * numArr[i]);
            return difference * numArr[i];
        }
        numSet.add(numArr[i]);
    }
};

part1(input, 2020);
module.exports = part1;