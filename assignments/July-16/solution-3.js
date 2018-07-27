/**
 * Write a generator which increases the counter indefinitely whenever called
 */

const countGenerator = function *() {
  let count = 0;
  while( count < count + 1 ) {
    yield count++;
  }
};

const counter = countGenerator();

console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);