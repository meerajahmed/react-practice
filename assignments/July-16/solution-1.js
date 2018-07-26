/**
 * Write a CountDown Iterator using non generator function
 */


const countDownIterator = function () {
  let count = this.count || 0, done = true, value;
  const next = () => {
    done = count < 0;
    value = done ? undefined : count--;
    return {done, value};
  };
  return {next};
};

const countDown = {
  count: 3,
  [Symbol.iterator]: countDownIterator
};

console.log([...countDown]);