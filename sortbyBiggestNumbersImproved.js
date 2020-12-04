// Challenge 10: How to Use Helper Functions

// Helper function to Find the Maximum value in array 

const findMaxHelper = function(Numbers, startIndex) {
    // label first value to be the maximum 
    let maximum = Numbers[startIndex];
    let maxLocation = startIndex;
    // iterate over the array starting from the given index +1
    for (let i = startIndex + 1; i < Numbers.length; i++) {
        if (Numbers[i] > maximum) {
            // find max item and its index
            maximum = Numbers[i]
            maxLocation = i;
        }
    }
    // return object with max item and its index 
    return { maxNumber: maximum, maxIndex: maxLocation };
};

//  Given a list of movies and their rating ..
//  you need to sort the list in a descending order 

const sortBestRatingsWithHelper = function(Numbers) {
    // run as many times as there are items
    for (let j = 0; j < Numbers.length - 1; j++) {
        // find max number and max location starting from j
        let max = findMaxHelper(Numbers, j);
        let maximum = max['maxNumber'];
        let maxLocation = max['maxIndex'];

        // Swap the first and max item in an array
        Numbers[maxLocation] = Numbers[j];
        Numbers[j] = maximum;

    }
    // return the sorted array
    return Numbers;
};

// Call function many time and pass argument for testing

console.log(sortBestRatingsWithHelper([2, 3, 11])); // output : [ 11, 3, 2 ]
console.log(sortBestRatingsWithHelper([5, 8, 2, 9, 3, 10])); // output : [ 10, 9, 8, 5, 3, 2 ]
console.log(sortBestRatingsWithHelper([20, 30, 40, 50])); // output : [ 50, 40, 30, 20 ]
console.log(sortBestRatingsWithHelper([5, 9, 8, 1, 12, 3, 10])); // output :[12, 10, 9, 8, 5, 3, 1]