const assert = require("assert");
const { describe, it } = require("mocha");
const part1 = require("./part1");
const part2 = require("./part2");

const testInput = `abc

a
b
c

ab
ac

a
a
a
a

b`;

describe.only("Day 6", () => {
	describe("Part 1", () => {
		it("should return the sum of anyone's yes questions", () => {
			assert.strictEqual(part1(testInput), 11);
		});
    });
    describe("Part 2", () => {
		it("should return the sum of everyone's yes questions", () => {
			assert.strictEqual(part2(testInput), 6);
		});
	});
});