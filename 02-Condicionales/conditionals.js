
/* CONDITIONALS  -------------------------------------------------------------------------------------------------------------------  */

// if else statements
let a = 1;
let b = 2;
if (a < b) {
  console.log('is true!');
} else {
  console.log('is false!');
}


// Multi if else statements
let val = 8;
if (val > 10) {
  console.log("Greater than 10");
} else if (val < 5) {
  console.log("Smaller than 5");
} else {
  console.log("Between 5 and 10");
}


// Ternary operators (same as if else)
let uno = 1;
let dos = 2;
const isEqual = uno === dos ? true : false;
console.log(isEqual);   //false


// Switch statements
function switchCase(n) {
  switch(n) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
    case 5:
      answer = "delta";
      break;
    default:
      answer = "default";
      break;
  }
  return answer;
}
console.log(switchCase(4));		//Outputs 'delta'