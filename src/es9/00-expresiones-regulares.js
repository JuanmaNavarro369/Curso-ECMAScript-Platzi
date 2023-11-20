// Regular Expresions (regEx)

const regEx = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regEx.exec('2018-11-27');

console.table(match);