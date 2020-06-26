// ? 8kyu: Regex count lowercase letters
// https://www.codewars.com/kata/56a946cd7bd95ccab2000055

// Instructions
// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// lowercaseCount("abc"); ===> 3

// lowercaseCount("abcABC123"); ===> 3

// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

// lowercaseCount(""); ===> 0;

// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

// lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26

// Solution
const lowercaseCount = (str) =>
    str.match(/[a-z]/g) ? str.match(/[a-z]/g).length : 0;

// Best Solution
function lowercaseCount(str) {
    return (str.match(/[a-z]/g) || []).length;
}

// Sample Tests
Test.assertEquals(lowercaseCount('abc'), 3);
Test.assertEquals(lowercaseCount('abcABC123'), 3);
Test.assertEquals(
    lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"),
    3
);
Test.assertEquals(lowercaseCount(''), 0);
Test.assertEquals(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"), 0);
Test.assertEquals(lowercaseCount('abcdefghijklmnopqrstuvwxyz'), 26);
