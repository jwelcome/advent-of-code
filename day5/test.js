const assert = require("assert");
const { describe, it } = require("mocha");
const part1 = require("./part1");

const testInput = `BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`;

describe("Day 5", () => {
	describe("Part 1", () => {
		it("should return the highest seat ID in the group (820)", () => {
			assert.strictEqual(part1(testInput), 820);
		});
	});
});