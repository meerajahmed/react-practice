/*
 * Define a function that concatenates several strings
 * – Function should take a separator and list of arguments
 * – Function should return list of arguments concatenated and separated by separator
 * */

const concat = (seperator = ' ', ...strs) => strs.join(seperator);

console.log(concat(', ', 'Hello', "World"));
