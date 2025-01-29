const biggestNUmber = require('../src/exercise3');


test("returns the largest number in the array" , () => {
    expect(biggestNUmber([456,987,222, 455, 678, 991])).toBe(991);
}) 