/*
 * Make this sum function work for all three scenarios.
 * 1. For numbers2 kind of scenario think about default value
 * 2. For third scenario think about handling undefined element in an array
 * */

const numbers = [1, 3, 6, 9];
const numbers2 = undefined;
const numbers3 = [1, 3, undefined, 6, 9];

const sum = (numbers = []) => numbers.filter(Boolean).reduce((acc, curr) => acc + curr, 0);

console.log(sum(numbers));
console.log(sum(numbers2));
console.log(sum(numbers3));

