
/* ARRAYS ------------------------------------------------------------------------------------------------------------------- */

let dogs = ['Bulldog', 'Beagle', 'Labrador'];
const numbers = [2, 5, 8, 7, 1, 6, 10, 3, 4, 9];


// Nested Arrays
let nestedArray = [[10, 20], [30, 40], ['strings', 60]];


// Length property
dogs.length;                            // Output: 3


// Accessing Array elements
console.log(numbers[3]);                // Output: 7
console.log(nestedArray[1][0]);         // Output: 30


// Modify Array data with indexes
nestedArray[2][0] = 45;                 // nestedArray now equals [[10, 20], [30, 40], [45, 60]]


// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2);				              // Output: [1, 2, 3, 4, 5, 6]


// Destructuring assignment
const array = [1, 2, 3, 4, 5, 6];
const [w, x, , ...z] = array;           // ignore index 2
console.log(w, x, z);                   // Outputs 1, 2, [4, 5, 6]


// Destructuring assignment to switching places in arrays
let a = 8, b = 6;
[a, b] = [b, a];                        // a = 6, b = 8


// Deep clone arrays
let array1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let array2 = [...array1];                           //Using Spread Operator
let array3 = array1.slice();                        //Using slice() method
let array4 = JSON.parse(JSON.stringify(array1));    //Using JSON.parse and JSON.stringify



// Array Methods
let myArray = Array(7);								            // Output: [empty x 7]. Creates an array with 7 empty slots.
let arrayOf = Array.of(7, 8, 9);					        // Output: [7, 8, 9]. Creates an array.
let arrayFrom = Array.from('foo');					      // Output: ["f", "o", "o"].
let penultimateElement = dogs.at(-2);             // Output: 'Beagle'.
let animals = dogs.concat('cats', 'birds'); 		  // Output: ["Bulldog", "Beagle", "Pug", "Boxer", "Labrador", "cats", "birds"]
let every = numbers.every(n => n < 11);				    // Outputs: true. All elements in the array pass the test. Returns a boolean value.
let filtered = numbers.filter(x => x > 3);     		// Output: [5, 8, 7, 6, 10, 4, 9]
let find = numbers.find(n => n > 5);				      // Output: 8. Returns the value of the first element in the array that passes the test.
let findIndex = numbers.findIndex(n => n > 5);    // Output: 2. Returns the index of the first element in the array that passes the test.
dogs.indexOf('Beagle');  			    			          // Output: 1
dogs.includes('Labrador');							          // Output: true. Returns a boolean value.
let joined = dogs.join(' * ');                    // Output: "Bulldog * Beagle * Labrador"
let maped = numbers.map(x => x * 2);    			    // Output: [4, 10, 16, 14, 2, 12, 20, 6, 8, 18]
let popped = dogs.pop();                          // Remove last element. dogs = ['Bulldog', 'Beagle']. popped = 'Labrador'
dogs.push('Chihuahua');                 			    // Add new element to the end
let reduced = numbers.reduce((x, y) => x + y);    // Output: 55
dogs.reverse();                         			    // Reverse unicode sorting
let shifted = dogs.shift();                       // Remove first element. dogs = ['Beagle', 'Labrador']. shifted = 'Bulldog'
let sliced = dogs.slice(1, 3);              		  // Pulls a copy of a portion of an array into a new array
let sameDogs = dogs.slice();                      // Deep copy
let some = numbers.some(n => n > 9);				      // Output: true. At least one element in the array passes the test. Returns a boolean value.
dogs.sort();                            			    // Output: ["Beagle", "Bulldog", "Labrador"]. Unicode sorting.
numbers.sort((a, b) => a - b);   					        // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Numeric sort.
numbers.sort((a, b) => b - a);   					        // Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]. Numeric descending sort.
numbers.sort((a, b) => 0.5 - Math.random());			// Random order sort.
dogs.splice(2, 0, 'Pug', 'Boxer');					      // Modify Array (where, how many to remove, add elements).
dogs.toString();                       				    // Convert to string, Output: "Bulldog,Beagle,Labrador".
dogs.unshift('Dogo');              					      // Add new element to the beginning.
