/**
 * Write a CountDown Iterator using generator function, attach with plain vanilla JavaScript object
 * (Hint: Making object iterable)
 */

const countDownGenerator = function *() {
  let count = this.count || 0;
  while( count > -1 ) {
    yield count--;
  }
};

const countDown = {
  count: 3,
  [Symbol.iterator]: countDownGenerator
};

for( let count of countDown ){
  console.log(count);
}