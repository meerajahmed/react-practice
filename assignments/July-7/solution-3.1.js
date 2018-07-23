/*
 * Given that: const humans = ["Rohan", "Mohit", "Sanjay"];
 * Write a function that prints following message for each name in the array.
 *      Rohan is of human type
 *      Mohit is of human type
 *      Sanjay is of human type
 * */

const humans = ['Rohan', 'Mohit', 'Sanjay'];

const msgFormat = msg => name => `${name} ${msg}`;

humans
    .map(msgFormat('is of human type'))
    .forEach(msg => console.log(msg));
