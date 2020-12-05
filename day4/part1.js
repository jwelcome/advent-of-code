const input = require("./input");

const part1 = (passports) => {
    const passportArr = passports.split("\n\n");
    let validPassports = 0;

    for (let i = 0; i < passportArr.length; i++) {
        const regEx = new RegExp("\n", "g");
		const currentPassport = passportArr[i].replace(regEx, " ");
        const passportCreds = currentPassport.split(" ").reduce((acc, cred) => {
            acc.push(cred.split(":")[0]);
            return acc;
        }, []);

        if (
            passportCreds.length === 8 ||
            (passportCreds.length === 7 && !passportCreds.includes("cid"))
        ) {
            validPassports++;
        }
    }

    console.log("number of valid passports", validPassports);
    return validPassports;
};

part1(input);
module.exports = part1;