const input = require("./input");

const part2 = (passwords) => {
	const passwordsArr = passwords.split("\n");
	let valid = 0;
	for (let i = 0; i < passwordsArr.length; i++) {
		const [ rule, password ] = passwordsArr[i].split(":");
		const letter = rule.charAt(rule.length - 1);
		const [ pos1, pos2 ] = rule.substring(0, rule.length - 2).split("-");
		const firstLetter = password.charAt(pos1);
		const secondLetter = password.charAt(pos2);
		if (
			(firstLetter === letter && secondLetter !== letter) ||
			(firstLetter !== letter && secondLetter === letter)    
		) {
			valid++;
		} else {
			continue;
		}
	}
	console.log("valid part 2", valid);
	return valid;
};

part2(input);
module.exports = part2;