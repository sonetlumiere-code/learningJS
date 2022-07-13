
/* CLASSES ------------------------------------------------------------------------------------------------------------------- */

class Dog {						//By convention, we capitalize and camelCase class names. 
    constructor(name) {			//constructor method
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
  
    
// Instance
let bradford = new Dog('Bradford');       // Create dog name Bradford
console.log(bradford.name);         	  // Output: Bradford
  
  
// Inheritance
// Parent class (superclass)
class Animal {                            
    constructor(name) {       	
        this._name = name;
    }
    get name() {
        return this._name;
    }
} 
  
// Child class (subclass)
class Cat extends Animal {              // The extends keyword makes the methods of the animal class available inside the cat class.     
    constructor(name, usesLitter) {
        super(name);                    // The super keyword calls the constructor of the parent class.
        this._usesLitter = usesLitter;
    }
    get usesLitter() {
        return this._usesLitter;
    }
}
const bryceCat = new Cat('Bryce', true);
console.log(bryceCat.name);     		    // Output: Bryce
console.log(bryceCat.usesLitter);           // Output: true
  
  
// Static methods  			
class Human {
    constructor(name) {
        this._name = name;
    }
    static greet() {		// You can call it directly from the class, but not from an instance of the class.
        return 'Hello World!'
    }
}
console.log(Human.greet());  // Returns 'Hello World!'
  
  
// Private properties
class Client {
    #name;
    constructor(name, country) {
        this.#name = name;
        this.country = country;
    }
    getInfo(){
        return `Client: ${this.#name}, lives in ${this.country}`;
    }
    set setClientName(name) {
        this.#name = name;
    }
    get getClientName() {
        return this.#name;
    }
}
let ada = new Client('Ada', 'England');
console.log(ada.getInfo()); 
//console.log(ada.#name);       // Error (#name property not accessible from outside)
//ada.#name = 'Lovelace';       // Error
ada.setClientName = 'Lovelace';
console.log(ada.getClientName);
  