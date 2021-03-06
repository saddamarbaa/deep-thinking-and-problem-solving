// Challenge 7: Finding the Minimum

// function to Find the minimum  value in array (take array as parameter)
// let assume is array of numbers

const findMin = function(array) {
    // label first value to be the minimum  
    let minimum = array[0];
    // iterate over the array starting from the second index
    for (let index = 1; index < array.length; index++) {
        // if found new minimum value then update minimum variable
        if (array[index] < minimum) {
            minimum = array[index]
        }
    }
    // return the minimum value
    return minimum
};

console.log(findMin([1, 2, 3, 4])); // output : 1
console.log(findMin([16, 22, 3, 4, 2])); // output : 2
console.log(findMin([7, 15, 5, 6, 8, 15, 30, 500, 0])); // output : 0
console.log(findMin([16, 12, 4, 44, 23, 4])); // output : 4

// Math.min()
// Array.reduce() can be used to find the Minimum element in a numeric array, by comparing each value

let arr = [11, 200, 3000, 8, 54];
let min = arr.reduce(function(a, b) {
    return Math.min(a, b);
});

console.log(min); // output : 8