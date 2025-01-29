const schoolName = require("../src/stringexercise1")

test("it concatinates two strings", () => {
    // assertion
    //this is used to very that the functions outputs the required sum in our case 
    expect(schoolName("Rift","Koders")).toBe("")
    expect(schoolName("Good","Morning")).toBe("")
})