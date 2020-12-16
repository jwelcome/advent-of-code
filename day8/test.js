const assert = require("assert");
const { describe, it } = require("mocha");
const part1 = require("./part1");
const part2 = require("./part2");

const testInput = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;

describe("Day 8", () => {
    describe("Part 1", () => {
        it("returns an accumulator value of 5", () => {
            assert.strictEqual(part1(testInput), 5);
        });
    });

    // describe("Part 2", () => {
    //     it("returns an accumulator value of 8", () => {
    //         assert.strictEqual(part2(testInput), 8);
    //     });
    // });
});