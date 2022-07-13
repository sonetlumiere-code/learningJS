/* VARIABLES ------------------------------------------------------------------------------------------------------------------- */

var myName = "Lucas";        //functional or globed scoped
let myAge = 31;              //block scoped
const siete = 7;             //block scoped + cannot get new value




/* DATA TYPES ------------------------------------------------------------------------------------------------------------------- */

// Primitives (immutable data types)
let dataString = "This is a string";
let dataNumber = 20;
let dataBigInt = 9007199254740991n || BigInt(9007199254740991);
let dataBoolean = true || false;
let dataUndefined = undefined;
let dataSymbol = Symbol('foo');
let dataNull = null;

// Non-primitives (mutable data types)
let dataObject = { key: 'value', method(){"Hello"} };
let dataArray = [1, 2, 3];


// Typeof operator
typeof dataString;  	      //string
typeof dataNumber;		      //number
typeof dataBigInt;          //bigint
typeof dataBoolean;		      //boolean
typeof dataUndefined;	      //undefined
typeof dataSymbol;          //symbol
typeof dataNull;		        //object
typeof dataObject;		      //object
typeof dataArray;           //object


// Strict Equality Comparison
console.log(3 == '3');      //true
console.log(3 === '3');     //false (does not convert types of data)
console.log(2 != '2');      //false
console.log(2 !== '2');     //true (does not convert types of data)