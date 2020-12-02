// iterate two dimensional array javascript

// ceate two dimensional
const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['A', 'B']
];

// create counter variables
let i = j = 0;

// outer loop 
while (i < array.length) {
    j = 0; // rest counter j to zero
    // get the inner array 
    const nestArray = array[i];
    // iterate the inner array(inner loop) 
    while (j < nestArray.length) {
        console.log(nestArray[j]);
        j++; // increment counter j
    }
    i++; // increment counter i
}

// function to Return num starts(take num as parameter)

const starsFun = function(num) {
    let stars = ''; // create array
    i = 0; // rest counter to zero
    while (i < num) {
        stars += "*"; // loop and build stars array
        i++; // increment counter
    }
    return stars; // return stars array
};

// Call function many time and pass argument for testing

console.log(starsFun(2)); // output: **
console.log(starsFun(3)); // output: ***
console.log(starsFun(11)); // output: ***********
console.log(starsFun(1)); // output: *


// function to find sum of all the number in given array

const sum = function name(array) {
    let total = array[0]; // store array[0] on total variable
    i = 1; // rest counter to 1
    while (i < array.length) {
        total = total + array[i]; // calculate sum
        i++; // increment counter
    }
    return total; // return the total sum
}

// Call function many time and pass argument for testing

console.log(sum([1, 2, 3])); // output: 6
console.log(sum([5, 7, 9])); // output: 21
console.log(sum([8, 20, 13])); // output: 41
console.log(sum(['A', 'B', 'C'])); // output: ABC

// for loop

// print numbers divisible by 5

for (let index = 0; index < 20; index++) {
    if (index % 5 == 0) {
        console.log(index);
    }
}