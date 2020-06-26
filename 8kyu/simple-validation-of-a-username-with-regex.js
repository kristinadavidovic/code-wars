// ? 8kyu: Simple validation of a username with regex
// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023

// Instructions
// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

// Solution
const validateUsr = (username) => /^[a-z0-9_]{4,16}$/.test(username);

// Sample Tests
Test.describe('Basic tests', (_) => {
    Test.assertEquals(validateUsr('asddsa'), true);
    Test.assertEquals(validateUsr('a'), false);
    Test.assertEquals(validateUsr('Hass'), false);
    Test.assertEquals(
        validateUsr('Hasd_12assssssasasasasasaasasasasas'),
        false
    );
    Test.assertEquals(validateUsr(''), false);
    Test.assertEquals(validateUsr('____'), true);
    Test.assertEquals(validateUsr('012'), false);
    Test.assertEquals(validateUsr('p1pp1'), true);
    Test.assertEquals(validateUsr('asd43 34'), false);
    Test.assertEquals(validateUsr('asd43_34'), true);
});
