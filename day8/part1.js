const input = require("./input");
const runBootSequence = require("./utils");

const part1 = (input) => {
    const instructions = input.split("\n");
    const { accVal } = runBootSequence(instructions);
    console.log("accumulator value", accVal);
    return accVal;
};

part1(input);
module.exports = part1;