const input = require("./input");

const part1 = (input) => {
    const instructions = input.split("\n");

    let accVal = 0;
    let idx = 0;
    let stepsExecuted = new Set();

    while (!stepsExecuted.has(idx)) {
        stepsExecuted.add(idx);

        const matcher = new RegExp("(acc|jmp|nop)\\s([+-]\\d*)");
        const [, operation, units] = instructions[idx].match(matcher);

        switch(operation) {
            case 'acc':
                accVal += parseInt(units);
                idx++;
                break;
            case 'jmp':
                idx += parseInt(units);
                break;
            default:
                idx++;
                break;
        }
    }

    console.log("accumulator value", accVal);
    return accVal;
};

part1(input);
module.exports = part1;