const input = require("./input");

const part2 = (input) => {
    const groupArr = input.split("\n\n");
    const total = groupArr.reduce((sum, group) => {
        const members = group.split("\n");
        const groupCharCounts = {};

        members.forEach((member) => {
            member.split("").forEach((char) => {
                if (!groupCharCounts[char]) {
                    groupCharCounts[char] = 1;
                } else {
                    groupCharCounts[char] = groupCharCounts[char] + 1;
                }
            });
        });

        const groupCharSet = new Set();
        Object.entries(groupCharCounts).forEach(([char, count]) => {
            if (count === members.length) {
                groupCharSet.add(char);
            }
        })
        sum += groupCharSet.size;
        return sum;
    }, 0);
    console.log("total sum", total);
    return total;
};

part2(input);
module.exports = part2;