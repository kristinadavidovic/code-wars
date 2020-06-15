// ? <6>kyu: Counting Duplicates
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

// Instructions
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits
// that occur more than once in the input string. The input string can be assumed to contain only
// alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// Solution
const duplicateCount = (text) => {
    const textArr = text.toLowerCase()
        ? text.toLowerCase().split('')
        : text.split('');
    const repeats = {};

    for (let d = 0; d < textArr.length; d++) {
        const v = textArr[d];
        repeats[v] = isNaN(repeats[v]) ? 1 : repeats[v] + 1;
    }

    return Object.values(repeats).filter((i) => i > 1).length;
};

// Best Solution :0
function duplicateCount(text) {
    return (
        text
            .toLowerCase()
            .split('')
            .sort()
            .join('')
            .match(/([^])\1+/g) || []
    ).length;
}

// Sample Tests
Test.assertEquals(duplicateCount(''), 0);
Test.assertEquals(duplicateCount('abcde'), 0);
Test.assertEquals(duplicateCount('aabbcde'), 2);
Test.assertEquals(duplicateCount('aabBcde'), 2, 'should ignore case');
Test.assertEquals(duplicateCount('Indivisibility'), 1);
Test.assertEquals(
    duplicateCount('Indivisibilities'),
    2,
    'characters may not be adjacent'
);
