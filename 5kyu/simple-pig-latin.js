// ? 5kyu: Simple Pig Latin
// https://www.codewars.com/kata/520b9d2ad5c005041100000f

// Instructions
// Move the first letter of each word to the end of it, then add "ay" to the
// end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// Solution
const pigIt = (str) =>
    str
        .split(' ')
        .map((el) => {
            const isLetter = el.split('').every((p) => p.match(/[a-z]/i));
            return el.slice(1) + el.slice(0, 1) + (isLetter ? `ay` : '');
        })
        .join(' ');

// Best Solution
function pigIt(str) {
    return str.replace(/(\w)(\w*)(\s|$)/g, '$2$1ay$3');
}

// TIL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

// Sample Tests
Test.assertEquals(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');
Test.assertEquals(pigIt('This is my string'), 'hisTay siay ymay tringsay');
