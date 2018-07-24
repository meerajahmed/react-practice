/*
 * Change the below code such that the second argument of printComment has a default value
 * that’s initially 1, and is incremented by 1 after each call.
 *
 * function printComment( comment , line ) { console.log( line, comment ) }
 *
 * */

const getLogger = (line = 1) => comment => console.log( line++, comment );

let printComment = getLogger(10);
printComment('Comment - 10');
printComment('Comment - 20');
printComment('Comment - 30');

printComment = getLogger();
printComment('Comment - 1');
printComment('Comment - 2');
printComment('Comment - 3');