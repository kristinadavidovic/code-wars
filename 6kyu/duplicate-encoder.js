// ? 6kyu: Duplicate Encoder
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

// Instructions
// The goal of this exercise is to convert a string to a new string where each
// character in the new string is "(" if that character appears only once in
// the original string, or ")" if that character appears more than once
// in the original string. Ignore capitalization when determining if
// a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes

// Assertion messages may be unclear about what they display in some languages.
// If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// Solution
const duplicateEncode = (word) => {
    const wordArr = word.toLowerCase().split('');
    return wordArr
        .map((_, idx) => {
            return wordArr.indexOf(wordArr[idx]) !==
                wordArr.lastIndexOf(wordArr[idx])
                ? ')'
                : '(';
        })
        .join('');
};

// Sample Tests
Test.assertEquals(duplicateEncode('din'), '(((');
Test.assertEquals(duplicateEncode('recede'), '()()()');
Test.assertEquals(duplicateEncode('Success'), ')())())', 'should ignore case');
Test.assertEquals(duplicateEncode('(( @'), '))((');
