const input = require("./input");

const isValidYear = (val, min, max) => {
    const num = parseInt(val);
    return val.length === 4 && num >= min && num <= max;
};

const isValidHeight = (val) => {
    const matcher = new RegExp("([0-9]*)([a-z]*)");
    const [, num, unit] = val.match(matcher);
    if (unit === 'in') {
        return num >= 59 && num <= 76;
    } else if (unit === 'cm') {
        return num >= 150 && num <= 193;
    } else {
        return false;
    }
};

const isValidHairColor = (val) => {
    const matched = val.match(new RegExp("^#([0-9|a-f]){6}"));
    return !!(matched && matched[0] === val);
};

const isValidEyeColor = (val) => {
    const eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
    return eyeColors.includes(val);
};

const isValidPassportId = (val) => {
    const matched = val.match(new RegExp("^[0-9]{9}"));
    return !!(matched && matched[0] === val);
};

const isValidCredential = (name, val) => {
    switch(name) {
        case 'byr':
            return isValidYear(val, 1920, 2002);
        case 'iyr':
            return isValidYear(val, 2010, 2020);
        case 'eyr':
            return isValidYear(val, 2020, 2030);
        case 'hgt':
            return isValidHeight(val);
        case 'hcl':
            return isValidHairColor(val);
        case 'ecl':
            return isValidEyeColor(val);
        case 'pid':
            return isValidPassportId(val);
        case 'cid':
            return false;
    }
};

const part2 = (passports) => {
    const passportArr = passports.split("\n\n");
    let validPassports = 0;

    for (let i = 0; i < passportArr.length; i++) {
        const regEx = new RegExp("\n", "g");
		const currentPassport = passportArr[i].replace(regEx, " ");
        const passportCreds = currentPassport.split(" ").reduce((acc, cred) => {
            const [ name, val ] = cred.split(":");
            if (isValidCredential(name, val)) {
                acc.push(name);
            }
            return acc;
        }, []);

        if (passportCreds.length === 7) {
            validPassports++;
        }
    }

    console.log("number of valid passports part 2", validPassports);
    return validPassports;
};

part2(input);
module.exports = part2;