/**
 * Write a CountDown Iterator using generator function
 */

const countDownIterator = function *() {
  let count = this.count || 0;
  while( count > -1 ) {
    yield count--;
  }
};

const countDown = {
  count: 3,
  [Symbol.iterator]: countDownIterator
};

console.log([...countDown]);