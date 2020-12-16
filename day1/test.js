const assert = require("assert");
const { describe, it } = require("mocha");
const part1 = require("./part1");
const part2 = require("./part2");

const testInput = `1721
979
366
299
675
1456`;

describe("Day 1", () => {
	describe("Part 1", () => {
		it("should return 514579", () => {
			assert.strictEqual(part1(testInput, 2020), 514579);
		});
	});
	
	describe("Part 2", () => {
		it("should return 241861950", () => {
			assert.strictEqual(part2(testInput), 241861950);
		});
	});
});