const input = require("./input");
const part1 = require("./part1");

const slopes = [
    { x: 1, y: 1 },
    { x: 3, y: 1 },
    { x: 5, y: 1 },
    { x: 7, y: 1 },
    { x: 1, y: 2 }
];

const part2 = (grid, slopes) => {
    return slopes.reduce((product, slope) => {
        product = product * part1(grid, slope);
        console.log("product of trees", product);
        return product;
    }, 1);
};

part2(input, slopes);
module.exports = { part2, slopes };