// ? 8kyu: Squash the bugs
// https://www.codewars.com/kata/56f173a35b91399a05000cb7

// Instructions
// Simple challenge - eliminate all bugs from the supplied code so
// that the code runs and outputs the expected value. Output should be the
// length of the longest word, as a number.

// There will only be one 'longest' word.

// Solution
const findLongest = (str) => Math.max(...str.split(' ').map((w) => w.length));

// Sample Tests
Test.describe('Basic tests', (_) => {
    Test.assertEquals(
        findLongest('The quick white fox jumped around the massive dog'),
        7
    );
    Test.assertEquals(findLongest('Take me to tinseltown with you'), 10);
    Test.assertEquals(findLongest('Sausage chops'), 7);
    Test.assertEquals(findLongest('Wind your body and wiggle your belly'), 6);
    Test.assertEquals(findLongest('Lets all go on holiday'), 7);
});
