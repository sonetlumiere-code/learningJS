// Export assign
			
let specialty = "chicken teriyaki";
let isVegetarian = function() {
    console.log('is veg')
}; 
let isLowSodium = function() {
    console.log('is low sodium')
}; 
export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };	// The 'as' keyword allows us to give a variable name.