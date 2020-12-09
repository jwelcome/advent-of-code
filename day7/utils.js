module.exports = (rules, bagMap) => {
    rules.map((rule) => {
        const [bagColor, contents] = rule.split(" bags contain ");
        if (contents === "no other bags.") {
            bagMap[bagColor] = [];
        } else {
            const contentArr = contents.split(", ");
            const transformedContent = contentArr.reduce((reducedContents, bagType) => {
                const [, num, color] = bagType.match(new RegExp("(\\d+)((\\s\\w*)*\\s)(bags|bag)"));
                reducedContents.push({ [color.trim()]: num });
                return reducedContents;
            }, []);
            bagMap[bagColor] = transformedContent;
        }
    });
    return bagMap;
};