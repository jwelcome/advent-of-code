module.exports = (instructions) => {
    let accVal = 0;
    let idx = 0;
    let stepsExecuted = new Set();

    while (!stepsExecuted.has(idx)) {
        stepsExecuted.add(idx);

        if (!instructions[idx]) {
            return { idx, accVal };
        }

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

    return { idx, accVal };
};