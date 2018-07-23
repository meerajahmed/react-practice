/*
 * Write a function that list only those records which are human
 * */

const species = [
    {name: "Mohan", type: "human"},
    {name: "Sanjay", type: "human"},
    {name: "OG", type: "alien"}
];

const isTypeOf = type => individual => type === individual.type;

const onlyHumans = species.filter(isTypeOf('human'));

console.log(onlyHumans);
