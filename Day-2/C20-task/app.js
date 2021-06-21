/*Answer these following in T/F,
 and try out whether expected answer is correct or not.
*/

// 1.  !(2 === 2)
let numb1 = !(2 === 2); // the answer is false because ! invert the answer
    numb1 = false;

// 2.  4 > 2 && 59 === 9
let numb2 = 4 > 2 && 59 === 9;  // because 59 is not equal to 9 and both side are not true
    numb2 = false;

// 3.  79 < 80 && 80 > 79
let numb3 = 79 < 80 && 80 > 79; //because both value are euqal and both side are true
    numb3 = true;

// 4.  true && true && true && true && true && false
let numb4 = true && true && true && true && true && false;
    numb4 = false;  // because all values are not true

// 5.   !false
let numb5 = !false;
    numb5 = true;  //  because ! invert the answer

// 6.  true && true && !true
let numb6 = true && true && !true;
    numb6 = false;  // because all values are not true

// 7.   !false && !false
let numb7 = !false && !false;
    numb7 = true; // because both values are true

// 8.  !(99 < 9) && 1000 > 100
let numb8 = !(99 < 9) && 1000 > 100;
    numb8 = true;  // because both values are true

// 9.  48 > 8 && 34 < 90 && 49 > 50
let numb9 = 48 > 8 && 34 < 90 && 49 > 50;
    numb9 = false;  // because all values are not true

// 10.   !(48 > 8 && 34 < 90)
let numb10 = !(48 > 8 && 34 < 90);
    numb10 = false; // because all values are not equal