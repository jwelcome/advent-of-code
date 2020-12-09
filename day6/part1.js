const input = require("./input");

const part1 = (input) => {
    const groupArr = input.split("\n\n");
    const total = groupArr.reduce((sum, group) => {
        const members = group.split("\n");
        const groupCharSet = new Set();
        members.map((member) => {
            member.split("").forEach((char) => {
                if (!groupCharSet.has(char)) {
                    groupCharSet.add(char);
                }
            });
        });
        sum += groupCharSet.size;
        return sum;
    }, 0);
    console.log("total sum", total);
    return total;
};

part1(input);
module.exports = part1;