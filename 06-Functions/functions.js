
/* FUNCTIONS -------------------------------------------------------------------------------------------------------------------  */

// Function declaration (call the function before declaration is possible (hoisting))
sum(2, 3);   // Outputs 5

function sum(a, b) {
  return a + b;
}


// Function expression (call the function before declaration is not possible)
f('word');  // Error

const f = function(w){
  return w
}


// Arrow functions
const f1 = () => {};						          //Zero parameters
const f2 = paramOne => {};				        //One parameter
const f3 = (paramOne, paramTwo) => {};	  //Two or more parameters
const double = number => number * 2;      //Single-line block



// Scope
let outerWear = "T-Shirt";        //Global scope

function myOutfit() {
  let outerWear = "sweater";      //Local scope
  return outerWear;
}

console.log(myOutfit());          // Outputs "sweater"
console.log(outerWear);           // Outputs "T-Shirt"



// Default parameters in functions
function increment(arg1, arg2 = 1) {
  return arg1 + arg2;
};
console.log(increment(5));      // Outputs 6
console.log(increment(5, 2));   // Outputs 7



//IIFE (Immediately Invoked Function Expression)
(function () {
  console.log('IIFE')
})();

(() => {
  console.log('arrow function IIFE')
})();

(async () => {
  console.log('async IIFE')
})();

