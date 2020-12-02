const assert = require("assert");
const { describe, it } = require("mocha");
const part1 = require("./part1");
const part2 = require("./part2");

const testInput = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;

describe("Day 2", () => {
	describe("Part 1", () => {
		it("should return 2", () => {
			assert.strictEqual(part1(testInput), 2);
		});
	});
	
	describe("Part 2", () => {
		it("should return 1", () => {
			assert.strictEqual(part2(testInput), 1);
		});
	});
});