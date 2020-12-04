// Challenge 6: Check if a string is empty

// function to check if the string empty or not

const isEmptyString = function name(givenString) {
    // isEmptyString("") : True
    // isEmptyString("ABC") : False
    if (givenString == "") return true;
    else return false;
}

// Call function many time and pass argument for testing

console.log(isEmptyString("")); // output: True
console.log(isEmptyString("ABCD")); // output: false
console.log(isEmptyString("123")); // output: false
console.log(isEmptyString(" ")); // output: false
console.log(isEmptyString('')); // output: True