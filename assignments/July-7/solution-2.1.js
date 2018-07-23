/*
 * Create a function than when executed as follows
 * mergeWords(‘There’)(‘is’)(‘no’)(‘water.’)(); should return ‘There is no water.’
 * */

const mergeWords = word => nextWord => nextWord ? mergeWords(`${word} ${nextWord}`) : word;

const result = mergeWords('There')('is')('no')('water.')();

console.log(result);