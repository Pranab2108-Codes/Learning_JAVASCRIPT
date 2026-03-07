var age = 25 ;                                   /* We can use the "var" keyword to define the variable and it is Global variable. */
if(true){

    console.log(age);

}


function solve(){                                /* This is a function whose name is solve and here we are just printing our age. */

    var age = 25;                                /* This variable "age" is only going to work inside of this function "solve". */
    console.log(age);      

}
solve();                                         /* Calling the function. */
console.log(age);                                /* This cant be run because age is not defined globally yet. */


var x = 10;                                      /* Initialized and assigned the value. */
console.log(x);
x = -76;                                         /* Here we have re assigned the value to the same variable. */
console.log(x);


var me = "Kanhu";                                /* Here we can initialize and assigned the value in the "me" variable. */
console.log(me);
var me = "Pranab";                               /* Here we have re initialize and re assigned the values in the "me" variable at the same time, but not the prefferable way to do. */
console.log(me);


var num = 90.871;                                /* Here we can see we have initialize this with number data type. */
console.log(num);
num = "Pranab Sethi" ;                           /* Now we can re assigned the value in the same variable but with different data type, that's why we call it dynamically typed language. */
console.log(num);


let nameis = "Pranab";                           /* Here we are using "let" keyword to take as variable. */
console.log(nameis);                             /* Let is a blocked scope, means it will only work in there where it has been mentioned in the block. */


{

    let love = "Barsha";                         /* Here the variable "love" will work only inside of this block. */
    console.log(love);

}


console.log(love);                               /* It will give us error. */


let dad = "Sanjeeb";                             /* Here we have initialized and assigned the value. */
console.log(dad);
dad = "Sanjeeb Kumar Sethi";                     /* We can re assigned the value in "let". */
console.log(dad);


let mom = "Pushpa";
console.log(mom);
let mom = "Pushpanjali";                         /* We can't use the "let" keyword to re initialize and re assigned the value in same variable. */


let a = -10;                                     /* Here we have assigned the number data type. */                      
console.log(a);
a = "Hey Barsha";                                /* But here we have re assigned the string data type in the same varibale That's why we called it dynamically typed language. */
console.log(a);


const b = 34;                                    /* The "const" keyword can be also use to declare the variable, but thorugh out the code it can't be change anymore. */
console.log(b);
b = 67;                                          /* Here we are trying to change the value of "const" variable but it can't happen. */
console.log(b);
const b = 88;                                    /* Neither we can re initialize the "const" variable, if it already declared. */
console.log(b);


                                                 /* PRIMITIVE DATATYPES */


var value = 90.871;                              /* This is a number data type. */
console.log(typeof(value));


value = "Pranab Sethi" ;                         /* It is a string data type. */
console.log(typeof(value));


value = true;
console.log(typeof(value));                      /* We can assign the boolean data type. */


let marks;                                       /* Undefined data type, because we have not assigned any value yet in this variable. */
console.log(typeof(marks));


let element = null;                              /* This is a null value so object data type. */
console.log(typeof(element));