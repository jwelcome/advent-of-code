const input = require("./input");
const getId = require("./utils");

const part1 = (input) => {
    const boardingPasses = input.split("\n");
    const highest = boardingPasses.reduce((seatId, pass) => {
        const currentSeatId = getId(pass);
        if (currentSeatId > seatId) {
            seatId = currentSeatId;
        };
        return seatId;
    }, 0);
    console.log("highest ID", highest);
    return highest;
};

part1(input);
module.exports = part1;