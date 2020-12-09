const input = require("./input");
const getId = require("./utils");

const part2 = (input) => {
    const boardingPasses = input.split("\n");
    const seatIds = boardingPasses
        .map(pass => getId(pass))
        .sort((a, b) => a - b);
    
    for (let i = 0; i < seatIds.length; i++) {
        const currentId = seatIds[i];
        if (seatIds[i + 1] === currentId + 2) {
            console.log('my seat', currentId + 1);
            return currentId + 1;
        }
    }
};

part2(input);
module.exports = part2;