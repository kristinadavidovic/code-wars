// ? 8kyu: Do you speak \"English\"?
// https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058

// Instructions
// Given a string of arbitrary length with any ascii characters.
// Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef"
// is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also
// correct.

// Return value as boolean values, true for the string to contains
// "English", false for it does not.

// Solution
const spEng = (st) => !!st.split(' ').filter((s) => s.toLowerCase().match('english')).length;

// Best Solution
function spEng(s) {
    return /english/i.test(s);
}

// Sample Tests
Test.assertEquals(spEng('english'), true);
Test.assertEquals(spEng('egnlish'), false);
