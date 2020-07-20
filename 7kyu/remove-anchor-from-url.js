// ? 7kyu: Remove anchor from URL
// https://www.codewars.com/kata/51f2b4448cadf20ed0000386

// Instructions
// Complete the function/method so that it returns the url
// with anything after the anchor (#) removed.

// Examples
// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')

// // returns 'www.codewars.com?page=1'
// removeUrlAnchor('www.codewars.com?page=1')

// Solution
const removeUrlAnchor = (url) => url.split('#')[0];

// Sample Tests
Test.assertEquals(
    removeUrlAnchor('www.codewars.com#about'),
    'www.codewars.com'
);
