/**
 * Write a generator which increases the counter indefinitely whenever called. It can be reset by the caller when next is called.
 * (Hint: Pass argument with next() and reset counter in generator)
 */

const RESET = 'RESET';

const countGenerator = function *() {
  let count = 0, signal;
  while (count < count + 1) {
    signal = yield count++;
    (signal === RESET) && (count = 0);
  }
};

const counter = countGenerator();

console.log(counter.next());
console.log(counter.next());
console.log(counter.next(RESET));
console.log(counter.next());