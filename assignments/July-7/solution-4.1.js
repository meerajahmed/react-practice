/*
 * Create an implementation where we can extract substring from a given string
 *   a) str.substr(start, length)
 * */

const substring = (str = '') =>
    (indexStart = 0) =>
        (indexEnd = str.length - 1) =>
            str.split('')
                .filter((elm, index) => index >= indexStart && index <= indexEnd)
                .join('');

console.log(substring('Sapient')(2)(4));
