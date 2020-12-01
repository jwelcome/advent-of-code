const numArray = require('./input');
const part1 = require('./part1');

const part2 = (nums) => {
    let finalProduct;
    for (let i = 0; i < nums.length; i++) {
        const difference = 2020 - nums[i];
        const partialProduct = part1(nums, difference);
        if (partialProduct) {
            console.log('found part 2', partialProduct * nums[i])
            finalProduct = partialProduct * nums[i];
            break;
        }
    }
    return finalProduct;
}

part2(numArray);