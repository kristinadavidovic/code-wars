// ? 8kyu: Grasshopper - Debug
// https://www.codewars.com/kata/55cb854deb36f11f130000e1

// Instructions
// Debug celsius converter
// Your friend is traveling abroad to the United States so he wrote a program to
// convert fahrenheit to celsius. Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:

// celsius = (fahrenheit - 32) * (5/9)
// Remember that typically temperatures in the current weather conditions are
// given in whole numbers. It is possible for temperature sensors to report
// temperatures with a higher accuracy such as to the nearest tenth.
// Instrument error though makes this sort of accuracy unreliable for many
// types of temperature measuring sensors.

// Solution
const weatherInfo = (temp) => {
    return `${convertToCelsius(temp)} is${
        convertToCelsius(temp) > 0 ? ' above' : ''
    } freezing temperature`;
};

const convertToCelsius = (temperature) => (temperature - 32) * (5 / 9);

// Sample Tests
describe('celsius converter', function () {
    it('should get correct answer', function () {
        Test.assertEquals(weatherInfo(50), '10 is above freezing temperature');
        Test.assertEquals(weatherInfo(23), '-5 is freezing temperature');
    });
});
