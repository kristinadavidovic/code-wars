// ? 7kyu: Reverse words
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

// Instructions
// Complete the function that accepts a string parameter, and reverses each
// word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// Solution
const reverseWords = (str) =>
    str
        .split(' ')
        .map((el) => [...el].reverse().join(''))
        .join(' ');

// Sample Tests
Test.describe('Sample Tests', (_) => {
    Test.it('Should pass Sample tests', (_) => {
        Test.assertEquals(
            reverseWords('The quick brown fox jumps over the lazy dog.'),
            'ehT kciuq nworb xof spmuj revo eht yzal .god'
        );
        Test.assertEquals(reverseWords('apple'), 'elppa');
        Test.assertEquals(reverseWords('a b c d'), 'a b c d');
        Test.assertEquals(
            reverseWords('double  spaced  words'),
            'elbuod  decaps  sdrow'
        );
    });
});
