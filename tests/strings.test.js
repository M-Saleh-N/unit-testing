const fullname = require("../src/strings")

test("it concatinates two strings", () => {
    // assertion
    //this is used to very that the functions outputs the required sum in our case 
    expect(fullname("salouhi","kalalo")).toBe("salouhi kalalo")
})