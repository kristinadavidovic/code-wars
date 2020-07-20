// ? 6kyu: +1 Array
// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9

// Instructions
// Given an array of integers of any length, return an array
// that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

// Solution - NOT YET
const upArray = (arr) => {
    if (arr.length == 0) return null;
    if (!arr.every((el) => /^\d$/.test(el))) return null;
    console.log(arr);
    let num;

    if (arr.join('').length > 10) {
        const s = arr.join('').slice(0, 11);
        const e = +arr.join('').slice(10, arr.length) + 1;

        num = `${s}${e}`;
    } else {
        num = +arr.join('') + 1 + '';
    }
    return !isNaN(num) ? [...num].map((n) => +n) : null;
};

// Sample Tests
Test.assertSimilar(upArray([2, 3, 9]), [2, 4, 0]);
Test.assertSimilar(upArray([4, 3, 2, 5]), [4, 3, 2, 6]);
Test.assertSimilar(upArray([1, -9]), null);
