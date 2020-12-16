const input = require("./input");
const runBootSequence = require("./utils");

const part2 = (input) => {
    const instructions = input.split("\n");

    for (let i = 0; i < instructions.length; i++) {
        const matcher = new RegExp("(acc|jmp|nop)\\s([+-]\\d*)");
        const [, operation, units] = instructions[i].match(matcher);

        if (operation === "acc") {
            continue;
        } else if (operation === "jmp" || operation === "nop") {
            let newInstructions = [...instructions];
            newInstructions.splice(i, 1, `${operation === "jmp" ? "nop" : "jmp"} ${units}`);
            const completedSequence = runBootSequence(newInstructions);
            if (completedSequence.idx === newInstructions.length) {
                console.log("accumulator value", completedSequence.accVal);
                return completedSequence.accVal;
            }
        }
    }
};

part2(input);
module.exports = part2;