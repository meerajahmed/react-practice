/*
 * Create a 10 x 10 matrix of null values
 * */


const getEmptyArray = length => new Array(length + 1).join(' ').split('').map(() => null);

const matrix = (length = 0) => getEmptyArray(length).map(() => getEmptyArray(length));

const result = matrix(10);

console.log(result);