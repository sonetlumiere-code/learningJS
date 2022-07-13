
/* LOOPS  -------------------------------------------------------------------------------------------------------------------  */

// While loop
let i = 0;
while (i < 10) {
  console.log(i);		// Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  i++;
}


// Do while loop
let j = 0;
do {
  console.log(j);		// Output: 0, 3, 6, 9
  j += 3;
} while (j < 10)


// For loop
for (let i = 0; i < 10; i++) {
  console.log(i);		// Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}


// For in / for of
const arr = [3, 5, 7, 'foo'];

for (let item of arr) {
  console.log(item); 		// Output: 3, 5, 7, 'foo'
}

for (let index in arr) {
  console.log(index); 		// Output: '0', '1', '2', '3'
}


let object = {
  age: 20,
  city: 'Buenos Aires'
};


for(let key in object){
  console.log(key);             // Output: 'age', 'city'
  console.log(object[key]);
}


// Break / continue statements
for(i = 0; i < 10; i++){
  if(i == 3){
    continue;
  }
  if(i == 7){
    break;
  }
  console.log(i);  // Output: 1, 2, 4, 5, 6
}
