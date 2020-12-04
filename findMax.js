// Challenge 8: Finding the Maximum

// function to Find the Maximum value in array (take array as parameter)
// let assume is array of numbers

const findMax = function(array) {
    // label first value to be the maximum 
    let maximum = array[0];
    // iterate over the array starting from the second index
    for (let index = 1; index < array.length; index++) {
        // if found new maximum  value then update maximum variable
        if (array[index] > maximum) {
            maximum = array[index]
        }
    }
    // return the maximum  value
    return maximum
};

// Call function many time and pass argument for testing

console.log(findMax([1, 2, 3, 4])); // output : 4
console.log(findMax([16, 22, 3, 4, 2])); // output : 22
console.log(findMax([7, 15, 5, 6, 8, 15, 30, 500, 0])); // output : 500
console.log(findMax([16, 12, 4, 44, 23, 4])); // output : 44

// Math.max()
// Array.reduce() can be used to find the maximum element in a numeric array, by comparing each value

let arr = [11, 200, 3000, 54];
let max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});

console.log(max); // output : 3000