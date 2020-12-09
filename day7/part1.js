const input = require("./input");
const createBagMap = require("./utils");

const part1 = (input) => {
    const rules = input.split("\n");
    let bagMap = {};
    bagMap = createBagMap(rules, bagMap);

    const containerBags = new Set();

    const getPathToShinyGold = (child, parent) => {
        const children = bagMap[child].map((obj) => Object.keys(obj).join());

        if (children.includes('shiny gold')) {
            containerBags.add(parent);
            return;
        }

        if (children.length === 0) {
            return;
        }

        for (let i = 0; i < children.length; i++) {
            getPathToShinyGold(children[i], parent);
        }
    };

    const bagColors = Object.keys(bagMap);
    for (let i = 0; i < bagColors.length; i++) {
        getPathToShinyGold(bagColors[i], bagColors[i], bagMap);
    }

    console.log("number of container bags", containerBags.size);
    return containerBags.size;
};

part1(input);
module.exports = part1;