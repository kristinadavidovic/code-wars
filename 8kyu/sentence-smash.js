// ? 8kyu: Sentence Smash
// https://www.codewars.com/kata/53dc23c68a0c93699800041d

// Instructions
// Sentence Smash
// Write a function that takes an array of words and smashes them together into a
// sentence and returns the sentence. You can ignore any need to sanitize words or
// add punctuation, but you should add spaces between each word. Be careful, there
// shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// Solution
const smash = (words) => words.join(' ');

// Sample Tests
Test.assertEquals(smash(['hello']), 'hello');
Test.assertEquals(smash(['hello', 'world']), 'hello world');
