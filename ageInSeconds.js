// Challenge 3: Your Age In Seconds


// function to Convert Age to Seconds and return the result(take age as Parameter)

const yourAgeInSeconds = function(age) {

    /*
       1 year = 12 months = 365 days
       1 month = 30 days = (30*24) hours, etc.
       1 day = 24 hours = (24 *60) minutes = (60*60*24) seconds
       1 hour = 60 minutes = 3600 seconds
       1 minute = 60 seconds
       return(years * months(12) * days(30) * hours(24) * minutes(60) * seconds(60))
      */

    return (age * 12 * 30 * 24 * 60 * 60);
}

// Call function many time and pass argument for testing

console.log(yourAgeInSeconds(1)); // output: 31104000
console.log(yourAgeInSeconds(2)); // output: 62208000
console.log(yourAgeInSeconds(3)); // output: 93312000
console.log(yourAgeInSeconds(10)); // output: 311040000
console.log(yourAgeInSeconds(25)); // output: 777600000