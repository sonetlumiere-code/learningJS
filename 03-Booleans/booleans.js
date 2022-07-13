/* BOOLEANS ------------------------------------------------------------------------------------------------------------------- */

let boolean = true || false;



// truthy and falsy values

//falsy
let falsy1 = false;
let falsy2 = 0;              //zero
let falsy3 = -0;             //minus zero
let falsy4 = 0n;             //BigInt zero
let falsy5 = '' || "" || ``; //empty string
let falsy6 = null;
let falsy7 = undefined;
let falsy8 = NaN;

//truthy
let truthy1 = '0';           //a string containing a single zero
let truthy2 = 'false';       //a string containing the text 'false'
let truthy3 = [];            //an empty array
let truthy4 = {};            //an empty object
let truthy5 = function(){};  //an 'empty' function