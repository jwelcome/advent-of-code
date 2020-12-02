const input = require('./input');
const part1 = require('./part1');

const part2 = (nums) => {
    const numArr = nums.split('\n').map(num => parseInt(num)).sort((x, y) => x-y);
    let finalProduct;
    for (let i = 0; i < numArr.length; i++) {
        const difference = 2020 - numArr[i];
        const partialProduct = part1(numArr, difference);
        if (partialProduct) {
            console.log('found part 2', partialProduct * numArr[i]);
            finalProduct = partialProduct * numArr[i];
            break;
        }
    }
    return finalProduct;
}

part2(input);
module.exports = part2;