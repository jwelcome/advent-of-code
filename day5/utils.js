module.exports = (pass) => {
    let rowMin = 0;
    let rowMax = 127;
    let columnMin = 0;
    let columnMax = 7;

    let finalRow = 0;
    let finalColumn = 0;

    for (let i = 0; i < pass.length; i++) {
        const rowsLeft = rowMax - rowMin;
        const columnsLeft = columnMax - columnMin;
        const rowMidpoint = rowsLeft / 2;
        const columnMidpoint = columnsLeft / 2;

        if (pass[i] === 'F') {
            if (rowsLeft === 1) {
                finalRow = rowMin;
            }
            rowMax = Math.floor(rowMax - rowMidpoint);
        } else if (pass[i] === 'B') {
            if (rowsLeft === 1) {
                finalRow = rowMax;
            }
            rowMin = Math.ceil(rowMax - rowMidpoint);
        } else if (pass[i] === 'L') {
            if (columnsLeft === 1) {
                finalColumn = columnMin;
            }
            columnMax = Math.floor(columnMax - columnMidpoint);
        } else if (pass[i] === 'R') {
            if (columnsLeft ===1) {
                finalColumn = columnMax;
            }
            columnMin = Math.ceil(columnMax - columnMidpoint);
        }
    }
    return (finalRow * 8) + finalColumn;
};