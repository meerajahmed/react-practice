/*
 * Complete the below function that calculates the nth fibonacci number in the sequence with
 * one destructuring assignment. Definition of Fibonacci number is the following
 *      – fib( 0 ) = 0
 *      – fib( 1 ) = 1
 *      – fib( n ) = fib( n - 1 ) + fib( n - 2 ) ;
 * */

function fib(n) {
    let fibCurrent = 1;
    let fibLast = 0;
    if (n < 0) return NaN;
    if (n <= 1) return n;
    for (let fibIndex = 1; fibIndex < n; ++fibIndex) {
        // Insert one destructuring expression here
        [fibCurrent, fibLast] = [fibCurrent + fibLast, fibCurrent];
    }
    return fibCurrent;
}

console.log(fib(10));

