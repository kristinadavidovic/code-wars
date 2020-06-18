// ? 5kyu: Advanced Pig Latin
// https://www.codewars.com/kata/533c46b140aafec05b000d31

// Instructions
// Pig latin is created by taking all the consonants before the first vowel of a word
// and moving them to the back of the word followed by the letters "ay".

// "hello" => "ellohay"
// "creating" => "eatingcray"

// If the first letter of the word is a vowel, the string is left the same and the letters
// "way" are appended to the end.

// "algorithm" => "algorithmway"

// This problem is different from other variations in that it expects casing to remain
// the same so:

// "Hello World" => "Ellohay Orldway"
// as well as punctuation.

// "Pizza? Yes please!" => "Izzapay? Esyay easeplay!"
// Your job is to take a string and translate it to Pig Latin. The string will never be
// undefined but may contain both numbers and letters. A word will never be a
// combination of numbers and letters. Also, there will never be punctuation at the
// beginning of a word and the only capital letter in a word will be the first letter
// meaning there are zero all capitalized words.

// Solution (*)
const translate = (sentence) => {
    const vowels = 'aeiou'.split('');

    const isUpper = (char) => char === char.toUpperCase();

    const pigLatin = (str, i = 0) => {
        if (vowels.includes(str[0])) {
            return i === 0 ? str + 'way' : str + 'ay';
        }

        return pigLatin(str.slice(1) + str.slice(0, 1), i + 1);
    };

    return sentence
        .split(' ')
        .map((word) => {
            let puncs = word.match(/\W/g);
            if (puncs) puncs = puncs.join('');
            if (puncs) plen = puncs.length;
            else {
                plen = 0;
                puncs = '';
            }

            let latin =
                pigLatin(word.toLowerCase().slice(0, word.length - plen)) +
                puncs;
            if (isUpper(word[0]))
                latin = latin[0].toUpperCase() + latin.slice(1);
            return latin;
        })
        .join(' ');
};

// Sample Tests
Test.assertSimilar(translate('hello'), 'ellohay', 'failed to translate hello');
Test.assertSimilar(
    translate('hello world'),
    'ellohay orldway',
    'failed to translate hello world'
);
Test.assertSimilar(
    translate('Hello World'),
    'Ellohay Orldway',
    'failed to retain capital letters'
);
Test.assertSimilar(
    translate('Pizza? Yes Please!!'),
    'Izzapay? Esyay Easeplay!!',
    'failed to move punctuation'
);
Test.assertSimilar(
    translate('How are you?'),
    'Owhay areway ouyay?',
    'failed to translate "How are you?"'
);
