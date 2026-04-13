var age = 25;                                                       /* Global scope, because it's parent is this file only not any block, so we can use this inside of any function, loop, block anywhere. */

console.log(age);                                                   /* Inside of this file, but not inside of any scope, function, iteration, condition... */

{

    console.log(age);                                               /* Can be accessible inside of the scope. */

}

if(true){
 
    console.log(age);                                               /* Can be accessible inside of the condition. */

}

for(let i=0;i<2;i++){

    console.log(age);                                               /* Can be accessible inside of the iteration. */

}


function sayHello(){

    console.log("Hi Pranab your age is:",age);                      /* Can be accessible inside of the function. */

}
sayHello();


function sayMe(){

    var fullName = "Earth";                                         /* Here full name is declared as well as defined in the function "sayMe" only, so it will only accessible inside of this function, although the var is not a block scope.  */                        
    console.log("Hello World this is",fullName);

}
sayMe();
console.log(fullName);                                             


{

    var height = "5ft 6inch";

}
console.log("Your height is:",height);                              /* The var is not the block scope, so work at anywhere. */


{

    let weight = 76.89;                       

}
console.log(weight);                                                /* let is a block scope, so won't work. */


{

    const location = "ODISHA";                       

}
console.log(location);                                              /* const also is a block scope, so won't work. */


console.log(marks);                                                 /* From 63 to 66 is the temporal dead zone. */
console.log(address);
const address = "ODISHA";
let marks = 100;
console.log(marks);