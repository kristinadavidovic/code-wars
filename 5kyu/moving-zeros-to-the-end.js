// ? 5kyu: Moving Zeros To The End
// https://www.codewars.com/kata/52597aa56021e91c93000cb0

// Instructions
// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

// moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']); // returns[(false, 1, 1, 2, 1, 3, 'a', 0, 0)];

// Solution
const moveZeros = (arr) => {
    const zeros = arr.join('').replace(/[^0]/g, '').length;
    const endZeros = Array.from('0'.repeat(zeros)).map(Number);
    return arr.filter((i) => i !== 0).concat(endZeros);
};

// Best Solution
var moveZeros = function (arr) {
    return arr
        .filter(function (x) {
            return x !== 0;
        })
        .concat(
            arr.filter(function (x) {
                return x === 0;
            })
        );
};

// Sample Tests
Test.assertEquals(
    JSON.stringify(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])),
    JSON.stringify([1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
);
