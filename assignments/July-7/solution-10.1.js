/*
 * Write a function that executes a callback function after a given delay in milliseconds.
 * The default value of delay is one second.
 * */

const defer = (callBackFn, delay = 1000) => setTimeout(() => callBackFn(delay), delay);

defer((delay) => console.log(`wait: ${delay}`));
defer((delay) => console.log(`wait: ${delay}`), 500);