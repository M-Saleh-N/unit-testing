function reverseWord(str = "madam") {
    if (str === "") return "";
    return reverseWord(str.substr(1)) + str.charAt(0);
}

module.exports = reverseWord;