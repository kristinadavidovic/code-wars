// ? 7kyu: Counting Array Elements
// https://www.codewars.com/kata/5569b10074fe4a6715000054

// Instructions
// Write a function that takes an array and counts the number of each unique element present.

// count(['james', 'james', 'john'])
// #=> { 'james': 2, 'john': 1}

// Solution
const count = (array) => {
    const obj = {};
    array.forEach((el) => (obj[el] = (obj[el] || 0) + 1));
    return obj;
};

// Best Solution
function count(array) {
    return array.reduce(function (stack, value) {
        return stack[value] ? stack[value]++ : (stack[value] = 1), stack;
    }, {});
}

// Sample Tests
Test.assertSimilar(count(['a', 'a', 'b', 'b', 'b']), { a: 2, b: 3 });
