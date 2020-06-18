// ? 5kyu: Alphabet war -  Wo lo loooooo priests join the war
// https://www.codewars.com/kata/59473c0a952ac9b463000064

// Instructions
// There is a war and nobody knows - the alphabet war! There are two groups of
// hostile letters. The tension between left side letters and right side letters was
// too high and the war began. The letters have discovered a new unit - a priest
// with Wo lo looooooo power.

// Write a function that accepts fight string consists of only small letters and
// return who wins the fight. When the left side wins return Left side wins!, when
// the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
//  t - 0 (but it's priest with Wo lo loooooooo power)

// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
//  j - 0 (but it's priest with Wo lo loooooooo power)

// The other letters don't have power and are only victims.
// The priest units t and j change the adjacent letters from hostile letters
// to friendly letters with the same power.

// mtq => wtp
// wjs => mjz
// A letter with adjacent letters j and t is not converted i.e.:

// tmj => tmj
// jzt => jzt
// The priests (j and t) do not convert the other priests ( jt => jt).

// Example
// alphabetWar("z")         //=>  "z"  => "Right side wins!"
// alphabetWar("tz")        //=>  "ts" => "Left side wins!"
// alphabetWar("jz")        //=>  "jz" => "Right side wins!"
// alphabetWar("zt")        //=>  "st" => "Left side wins!"
// alphabetWar("azt")       //=> "ast" => "Left side wins!"
// alphabetWar("tzj")       //=> "tzj" => "Right side wins!"

// Solution
const alphabetWar = (fight) => {
    const left = { w: 4, p: 3, b: 2, s: 1, t: 0 };
    const right = { m: 4, q: 3, d: 2, z: 1, j: 0 };

    const fightArr = fight.split('');
    fight = fightArr.map((char, index) => {
        const prev = fight[index - 1];
        const next = fight[index + 1];
        // todo
    });

    let l = [];
    let r = [];

    for (let f = 0; f < fightArr.length; f++) {
        const letter = fightArr[f];

        left.hasOwnProperty(letter) && l.push(left[letter]);
        right.hasOwnProperty(letter) && r.push(right[letter]);
    }

    const lVALUE = l.reduce((acc, curr) => {
        return acc + curr;
    }, 0);

    const rVALUE = r.reduce((acc, curr) => {
        return acc + curr;
    }, 0);

    return lVALUE != rVALUE
        ? `${lVALUE > rVALUE ? 'Left' : 'Right'} side wins!`
        : "Let's fight again!";
};

// Sample Tests
