// Challenge 5: Label Good Movies and Bad Movies

// function to Label Movies (take movie rating as parameter)
// assume that rating is positive number between 0 to 10

const badOrGoodMovie = function(movieRating) {
    // badOrGoodMovie(6) "Bad Movie"
    // badOrGoodMovie(8) "Good Movie"
    // badOrGoodMovie(2) "Bad Movie"
    // badOrGoodMovie(7) "Good Movie"
    // badOrGoodMovie(9-4) "Good Movie"
    if (movieRating < 0 || movieRating > 10)
        return "movie rating must be between 0-10";
    else if (movieRating >= 7)
        return "Good Movie";
    else
        return "Bad Movie";
};

// Call function many time and pass argument for testing

console.log(badOrGoodMovie(20)); // output: movie rating must be between 0-10
console.log(badOrGoodMovie(-2)); // output: movie rating must be between 0-10

console.log(badOrGoodMovie(8)); // output: Good Movie
console.log(badOrGoodMovie(7)); // output: Good Movie
console.log(badOrGoodMovie(9.2)); // output: Good Movie

console.log(badOrGoodMovie(3)); // output: Bad Movie
console.log(badOrGoodMovie(1)); // output: Bad Movie
console.log(badOrGoodMovie(6)); // output: Bad Movie