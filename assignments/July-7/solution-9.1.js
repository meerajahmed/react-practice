/*
 * Create a factorial calculator
 * */

const factorial = num => num === 1 ? num : num * factorial(num - 1);

console.log(factorial(5));