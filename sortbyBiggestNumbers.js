// Challenge 9: Sort by Biggest Numbers

//  Given a list of movies and their rating ..
//  you need to sort the list in a descending order 

const sortBestRatingsFirst = function(Numbers) {
    // sortBestRatingsFirst([5, 8, 2, 9, 3, 10]) ---> [ 10, 9, 8, 5, 3, 2 ]
    // outer loop
    // findMax
    for (let j = 0; j < Numbers.length - 1; j++) {
        let maximum = Numbers[j];
        let maxLocation = j;
        // inner loop
        for (let i = j; i < Numbers.length; i++) {
            // to sort in ascending order just change 
            // ( Numbers[i] > maximum) to (Numbers[i] < maximum)
            if (Numbers[i] > maximum) {
                // know max AND it,s index(location)
                maximum = Numbers[i];
                maxLocation = i;
            }
        }
        // Swap the values 
        Numbers[maxLocation] = Numbers[j];
        Numbers[j] = maximum;
    }
    // return the sorted array
    return Numbers;
};

// Call function many time and pass argument for testing

console.log(sortBestRatingsFirst([5, 8, 2, 9, 3, 10])); // output : [ 10, 9, 8, 5, 3, 2 ]

console.log(sortBestRatingsFirst([20, 30, 40, 50])); // output : [ 50, 40, 30, 20 ]

console.log(sortBestRatingsFirst([5, 9, 8, 1, 12, 3, 10])); // output :[12, 10, 9, 8, 5, 3, 1]