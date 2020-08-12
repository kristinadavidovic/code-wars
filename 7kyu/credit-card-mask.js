// ? 7kyu: Credit Card Mask
// https://www.codewars.com/kata/5412509bd436bd33920011bc

// Instructions
// Usually when you buy something, you're asked whether your credit card number,
// phone number or answer to your most secret question is still correct. However, since someone could
// look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

// Solution
const maskify = (cc) => {
    const ccLen = cc.length;
    const visible = cc.substring(ccLen - 4, ccLen);
    const masked = cc.substring(0, ccLen - 4).length;
    return ['#'.repeat(masked), ...visible].join('');
};

// Best Solution
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

// Sample Tests
describe('maskify', function () {
    it('should work for some examples', function () {
        Test.assertEquals(maskify('4556364607935616'), '############5616');
        Test.assertEquals(maskify('1'), '1');
        Test.assertEquals(maskify('11111'), '#1111');
    });
});
