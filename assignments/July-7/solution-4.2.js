/*
 * Create an implementation where we can extract substring from a given string
 *   b) Modify the Program to find the first nth characters
 * */

const substring = (str = '') =>
    (length = str.length) =>
        str.split('')
            .filter((elm, index) => index < length)
            .join('');

console.log(substring('Sapient')(2));