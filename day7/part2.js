const input = require("./input");
const createBagMap = require("./utils");

const part2 = (bags) => {
    const rules = bags.split("\n");
    let bagMap = {};
    bagMap = createBagMap(rules, bagMap);

    let nestedBags = 0;
    const traceShinyGoldPath = (childColor, runningSum) => {
        const children = bagMap[childColor].map((obj) => Object.entries(obj).join());
        if (children.length === 0) {
            return;
        }

        for (let i = 0; i < children.length; i++) {
            const [color, number] = children[i].split(",");
            const newChildren = runningSum * number;
            nestedBags += newChildren;
            traceShinyGoldPath(color, newChildren);
        }
    };

    traceShinyGoldPath('shiny gold', 1);
    console.log("number of nested bags", nestedBags);
    return nestedBags;
};

part2(input);
module.exports = part2;