/*
 * Create an implementation where we can extract substring from a given string
 *   c) Modify the Program to find the first character from a given string
 * */

const substring = (str = '') => ([firstChar = ''] = [...str]) => firstChar;

console.log(substring('Sapient')());