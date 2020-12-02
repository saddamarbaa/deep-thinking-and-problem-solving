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