/*
 * Define a function that creates HTML lists
 *   – Creates a string containing HTML for a list
 *   – Only formal argument for a function is a string that is “u” for unordered list and “o” for ordered list
 * */

const buildListMarkup = (listType = 'u', ...listItems) =>
    [`<${listType}l>`, ...listItems.map(listItem => `<li>${listItem}</li>`), `</${listType}l>`].join('');

const result = buildListMarkup('u', 'list item 1', 'list item 2', 'list item 3');

console.log(result);