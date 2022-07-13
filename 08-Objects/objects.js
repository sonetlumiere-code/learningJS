
/* OBJECTS ------------------------------------------------------------------------------------------------------------------- */

// Object literal
let student = {                
    firstName:"Jane",       							// properties (key: value)
    lastName:"Doe",
    age:18,
    height:170,
    fullName() {     									// method (function)
        return this.firstName + " " + this.lastName;		//the value of 'this' keyword is the calling object.
    }
};


// Accesing objects
student.firstName;			// Dot notation. Output: Jane
student['lastName'];		// Bracket notation. Output: Doe	
student.fullName();  		// Output: Jane Doe.


// Updating Object Properties
student.age = 19;           	  // Dot notation.
student['height'] = 180;		  // Bracket notation.


// Add new properties to an Object
student.hobbie = 'guitar';   			// Dot notation.	
student['favourite food'] = 'pizza';	// Bracket notation.


// Delete operator
delete student.age;


// Deep clone
let obj = { name: 'luna', age: 5 };
let clon2 = { ...obj };                         // Using spread operator
let clon3 = JSON.parse(JSON.stringify(obj));    // Using JSON.parse and JSON.stringify


// Accessing Nested Objects
var myStorage = {
    car: {
        inside: {
            'glove box': 'maps',
            seats: 'crumbs'
        }		
    }
};
var gloveBoxContents = myStorage.car.inside['glove box'];	  //Outputs 'maps'


// Optional chaining
const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah'
    }
};
const dogName = adventurer.dog?.name;
console.log(dogName);                                 // output: undefined
console.log(adventurer.someNonExistentMethod?.());    // expected output: undefined


// Property value shorthand
const a = 'foo';
const b = 42;

const myObject = { a, b };
console.log(myObject.a);     // expected output: "foo"


// Destructured assignment
const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    tastes: {
        drink: 'Blood',
        food: 'Burger'
    }
};
const { residence } = vampire;                    // residence outputs 'Transylvania'
const { name: newName } = vampire;                // newName outputs 'Dracula'
const { tastes: { drink, food } } = vampire;      // drink outputs 'Blood', food outputs 'Burger'
