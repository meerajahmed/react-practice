/*
 * Write an arrow function that expects an array of integers, and returns the sum of elements
 * of the array. Use the built-in method reduce on the array argument
 * */

const getTotal = (integers = []) => integers.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0);

const integers = [1, 2, 3, 4, 5];

console.log(getTotal(integers));