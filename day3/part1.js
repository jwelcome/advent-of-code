const input = require("./input");

const part1 = (grid, slope) => {
    const gridRows = grid.split("\n");
    let currentCoordinate = 0;
    let numTrees = 0;
    for (let yPos = 0; yPos < gridRows.length; yPos = yPos + slope.y) {
        const xPos = currentCoordinate % gridRows[yPos].length;
        if (gridRows[yPos][xPos] === "#") {
            numTrees++;
        }
        currentCoordinate = currentCoordinate + slope.x;
    }
    console.log("number of trees", numTrees);
    return numTrees;
};

part1(input, { x: 3, y: 1 });
module.exports = part1;