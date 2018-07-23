/*
 * Write an expression using higher order array methods to compute
 * the total value of machines in the inventory array (Using Arrow Function)
 * */

const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
];

let result = 0;
result = inventory.reduce((acc, cur) => acc + cur.value, result);

console.log(result);