/*
 * Create an mapper function using arrow semantics that returns an object having following attribute when operating on array
 * */

const mapperFns = input => ({isEven: 0 === input % 2, number: input, squared: input * input});

const result = [1, 2, 3].map(mapperFns);

console.log(result);

