// Challenge 4: First and last Items In An Array

// function to find the first item in array (take array is parameter)

const FirstItemInArray = function(array) {
    return array[0];
};

// function to find the last item in array (take array is parameter)

const lastItemInArray = function(array) {
    return array[array.length - 1];
};

// Call functions many time and pass argument for testing

console.log(FirstItemInArray([1, 2, 3, 4, 5])); // output: 5
console.log(FirstItemInArray(["ALi", "Adam", "Sadam"])); // output: Sadam
console.log(FirstItemInArray(["Monday", "weekend"])); // output: weekend
console.log(FirstItemInArray(["Javascrpit", "Python", "C++"])); // output:Javascrpit


console.log(lastItemInArray([1, 2, 3, 4, 5])); // output: 1
console.log(lastItemInArray(["ALi", "Adam", "Sadam"])); // output: Ali
console.log(lastItemInArray(["Monday", "weekend"])); // output: Monday
console.log(lastItemInArray(["Javascrpit", "Python", "C++"])); // output:Javascrpit