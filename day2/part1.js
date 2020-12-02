const input = require("./input");

const part1 = (passwords) => {
	const passwordsArr = passwords.split("\n");
	let valid = 0;
	for (let i = 0; i < passwordsArr.length; i++) {
		const [ rule, str ] = passwordsArr[i].split(":");
		const letter = rule.charAt(rule.length - 1);
		const [ min, max ] = rule.substring(0, rule.length - 2).split("-");
		const password = str.substring(1, str.length);
		const regEx = new RegExp(letter, "g");
		const reducedPassword = password.replace(regEx, "");
		const instances = password.length - reducedPassword.length;
		if (instances >= min && instances <= max) {
			valid ++;
		} else {
			continue;
		}
	}
	console.log("valid part 1", valid);
	return valid;
};

part1(input);
module.exports = part1;