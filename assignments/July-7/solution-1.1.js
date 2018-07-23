/*
 * Given this array: `[3,62,234,7,23,74,23,76,92]`,
 * use an arrow function to create an array of the numbers greater than `70`
 * */

const numberList = [3, 62, 234, 7, 23, 74, 23, 76, 92];

const result = numberList.filter(num => num > 70);

console.log(result);