// Challenge 2: Convert Minutes to Seconds

// function Convert Minutes to Seconds and return the result(take minutes as Parameter)

const convertMinutesToSeconds = function(mintues) {
    return mintues * 60;
}

// Call function many time and pass argument for testing

console.log(convertMinutesToSeconds(1) + " seconds"); // output: 60 seconds
console.log(convertMinutesToSeconds(2) + " seconds"); // output: 120 seconds
console.log(convertMinutesToSeconds(3) + " seconds"); // output: 180 seconds
console.log(convertMinutesToSeconds(10) + " seconds"); // output: 600 seconds