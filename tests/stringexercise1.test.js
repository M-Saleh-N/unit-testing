const addChars = require("../src/stringexercise1")

test("it concatinates two strings", () => {
    // assertion
    //this is used to very that the functions outputs the required sum in our case 
    expect(addChars("Rift","Koders")).toBe("Rift Koders")
    expect(addChars("Good","Morning")).toBe("Good Morning")
})