const isDivisbleByTwo  = require("../src/exercise2")

test("it returns true if the number is divisible by 2" , () => {
    expect(isDivisbleByTwo (6)).toBe(true);
})

test("it returns false if the number is not divisble by 2" , () => {
    expect(isDivisbleByTwo (5)).toBe(false);

})

test("it returns false if the number is not divisble by 2" , () => {
    expect(isDivisbleByTwo (7)).toBe(false);

})