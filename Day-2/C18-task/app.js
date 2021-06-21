/*  ====== 1) Name a variable with a special character and
            see it the editor shows an error. 
            Name a second variable with a number in its end and
            see if the editor shows an error.
            Make sure you use the right naming convention for naming the variables.
*/ 

// let & = 45;

/* Uncaught SyntaxError: Unexpected token '&'.
  because we cannot name a variable with special characters.
*/

let alpha1 = 45; //it doesn't show an errror because we can use number in last of variable.

/* ===== 2) Declare a variable using let inside a function.
            And console that variable in another function and see what happens.
            Now declare a variable using var in a block and 
            try reassigning the value to that variable in another block and 
            see if it throws an error or not. Create a global variable and 
            try using that variable in another function and
            see if you're able to access that variable.
*/            
 function myTask(){
    let myWork = 79 ;
 }
 function myHwork(){
    console.log(myWork);
 } 
//it isn't printed because let isn't a global variable and it can't console in other function.

function task(){
    var  a = 86 ;
}
function hWork(){
    console.log(a);
}
/* ==== 3) Create a variable my_num and assign it a number. 
            Convert my_num into a string using a toString() method.
            Create a variable myString and assign it a value of "2.3".
            Now create 2 more new variables. 
            One interger and assign it a value of parsInt(myString) and
            other float and assign it a value of parseFloat(myString).
            Check the value and type of integer and float in console.
*/
let  my_num = 68;
let  str = my_num.toString(); 

let myString = "2.3";

let int = 35 ;
console.log(parseInt(myString));

let flt = 6.8 ;
console.log(parseFloat(myString));


/* ===== 4) Create a function called myFunc and
            declare a variable name inside the body of that fuction. 
            In the console check the value of name see what console prints.  
*/
function myFunc(){
   let z = 100;
        console.log(z);
}