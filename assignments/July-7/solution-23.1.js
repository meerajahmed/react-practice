/*
 * Write a function that calculates the prices after tax calculation for each price element in the prices array.
 * Result should be pricesWithTax. Assume taxRate to be 0.07
 * */

const prices = [1.1, 2.32, 3.68, 4.9];

const pricesWithTax = prices => tax => prices.map(price => price + price * tax);

const result = pricesWithTax(prices)(0.07);

console.log(result);

