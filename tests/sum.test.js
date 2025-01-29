const {sum, subtract, multiply, divide} = require("../src/sum")

test("adds 10 + 20 to equal 30", () => {
    expect(sum(10,20)).toBe(30)
})
//first argument is a message of what we expect our test to do
//the second argument is a callback function
//callback function -> a functions whose value is another function  
test("it adds 20 + 50 to equal 70", () => {
    // assertion
    //this is used to very that the functions outputs the required sum in our case 
    expect(sum(20,50)).toBe(70)
})


test("it subtracts 10 from 20 to equal 10", () => {
    // assertion
    //this is used to very that the functions outputs the required sum in our case 
    expect(subtract(20,10)).toBe(10)
    // create teo assertions to validate your function to 
})

test("it multiplys 20 with 50 to equal 1000", () => {
    // assertion
    //this is used to very that the functions outputs the required sum in our case 
    expect(multiply(20,50)).toBe(1000)
})

test("it divides 20 from 100 to equal 5", () => {
    // assertion
    //this is used to very that the functions outputs the required sum in our case 
    expect(divide(100,20)).toBe(5)
})


// RED
// GREEN
// REFRACTOR