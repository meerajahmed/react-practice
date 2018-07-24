/*
 * Rewrite the sumArgs function of this tutorial in ES2015, using a rest parameter and arrow functions.
 * */

const sunArgs = (...args) => args.reduce((acc, cur) => acc + cur, 0);

const result = sunArgs(2,5,7,9);

console.log(result);