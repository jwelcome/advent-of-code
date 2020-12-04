const assert = require("assert");
const { describe, it } = require("mocha");
const part1 = require("./part1");
const { part2, slopes } = require("./part2");

const testInput = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;

describe("Day 3", () => {
	describe("Part 1", () => {
		it("should return 7", () => {
			assert.strictEqual(part1(testInput, slopes[1]), 7);
		});
	});
	
	describe("Part 2", () => {
		it("should return 336", () => {
			assert.strictEqual(part2(testInput, slopes), 336);
		});
	});
});