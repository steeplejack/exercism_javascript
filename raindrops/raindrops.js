//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const RAINDROPS = [
    { factor: 3, sound: 'Pling' },
    { factor: 5, sound: 'Plang' },
    { factor: 7, sound: 'Plong' }
]

export function convert(number) {
    const result = RAINDROPS
        .filter( drop => number % drop.factor === 0)
        .map( drop => drop.sound )
        .join('');
    return result || `${number}`;
};
