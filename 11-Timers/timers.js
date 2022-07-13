
/* TIMERS ------------------------------------------------------------------------------------------------------------------- */

// setTimeout
setTimeout (() => {
    console.log("Hello World");	
}, 2000);							
  
// setInterval	
const pep = setInterval (() => {
    console.log("Hello boy");
}, 2000);
    
// clearInterval
setTimeout(() => {
    clearInterval(pep);
}, 12000);
