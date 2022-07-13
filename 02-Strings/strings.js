
/* STRINGS ------------------------------------------------------------------------------------------------------------------- */

let str = "Hello";

// Concatenation
let str2 = 'World!';
console.log(str + ' ' + str2);   // Output: Hello World!

// Concatenating Strings with plus equals operator
let ourStr = "I come first. ";
console.log(ourStr += "I come second. ");    // Output: "I come first. I come second. "

// String Interpolation
const myPet = 'cat';
console.log(`I own a pet ${myPet}.`);     // Output: I own a pet cat.

// Length property
str.length;   // Output: 5

// Access character in string
let lastName = "Lovelace";
let firstLetterOfLastName = lastName[0];                    //Output: "L"
let lastLetterOfLastName = lastName[lastName.length - 1];   //Output: "e"


/* Escape Sequences in Strings
\'   single quote
\"   double quote
\\   backslash
\n   newline
\r   carriage return
\t   tab
\b   backspace
\f   form feed
*/


// Strings Methods
str.charAt(1);                  // Output: e. Character at index 2.
str.charCodeAt(2);              // Output: 108. Unicode number.
str.concat(" Wor", "ld");       // Output: "Hello World".
str.indexOf("e");            	  // Output: 1. Find substring, -1 if doesn't contain.
str.includes("llo");			      // Output: true. Return true if the search string is found within the given string, false if not.
str.endsWith("lo");				      // Output: true. True if the given characters are found at the end of the string; otherwise, false.
str.lastIndexOf("l");        	  // Output: 3. Last occurance.
str.match(/[A-H]/gi);			      // Output: ["H", "e"]. (Support RegExp).
str.repeat(3);					        // Output: "HelloHelloHello".
str.replace("H", "123");       	// Output: "123ello". Find and replace. (Support RegExp).
str.search("l");				        // Output: 2. The index of the first match, or -1 if no match was found. (Support RegExp).
str.slice(1, 4);                // Output: "ell". Cuts a portion of string. Negative values count from behind.
str.split("");                 	// Output: ["H", "e", "l", "l", "o"]. (Support RegExp).
str.split(" ");                 // Output: ["Hello"].
str.startsWith("H");			      // Output: true. True if the given characters are found at the beginning of the string; otherwise, false.
str.toLowerCase();              // Convert to lower case.
str.toUpperCase();              // Output: "HELLO". Convert to upper case.
str.trim();						          // Trim whitespaces from left and right side.
str.trimStart();			          // Trim whitespace from left side.
str.trimEnd();				          // Trim whitespace form right side.




/*REGULAR EXPRESSION SYNTAX ------------------------------------------------------------------------------------------------------------------- *//*
// Pattern Modifiers (flags)
e   //Evaluate replacement
i   //Case-insensitive
g   //Global match
m   //Multiple lines
s   //Treat strings as single line
x   //Allow comments and whitespace in pattern
U   //Ungreedy pattern
// Groups and ranges
[abc]  		  //Any of the characters between the brackets
[^abc]  	  //Any character not in the brackets
[0-9]  		  //Any digit from 0 to 9
[A-z] 		  //Any character from uppercase A to lowercase z
(a|b|c) 	  //Find any of the alternatives separated with |
[:punct:]  	  //Any punctu­ation symbol
[:space:]  	  //Any space character
[:blank:]  	  //Space or tab
// Character classes
.   	  //Any single character, except newline or line terminator
\d  	  //A digit
\D  	  //A non-digit character
\w  	  //Word character
\W  	  //Non-word character
\s  	  //Whitespace character
\S  	  //Non-whitespace character
\t  	  //Tab character
\r  	  //Carriage return character
\n  	  //A new line character
\v  	  //Vertical tab character
\f  	  //Form feed character
[\b]	  //A backspace
\0  	  //NUL character
\xxx      //The character specified by an octal number xxx
\xdd      //Character specified by a hexadecimal number dd
\uxxxx    //The Unicode character specified by a hexadecimal number xxxx
\		  //Escape character
// Quantifiers
a+ 		  //One or more of a
a*   	  //Zero or more occurrences of a
a?  	  //Zero or one occurrences of a
a+?  	  //One or more, ungreedy
a*?  	  //Zero or more, ungreedy
?=a  	  //Any string that is followed by a specific string a
?!a  	  //String that is not followed by a specific string a
a{2}      //Exactly 2 of a
a{2,}  	  //2 or more of a
a{,5}     //Up to 5 of a
a{2,5}    //2 to 5 of a
// Assertions
\b  	  //Find a match at the beginning / end of a word
\B  	  //Find a match not at the beginning / end of a word
^a  	  //Any string with "a" at the beginning of it
a$  	  //Any string with "a" at the end of it
x(?=y)	  //Matches "x" only if "x" is followed by "y".
x(?!y)	  //Matches "x" only if "x" is not followed by "y".
(?<=y)x	  //Matches "x" only if "x" is preceded by "y".
(?<!y)x   //Matches "x" only if "x" is not preceded by "y".
*/
