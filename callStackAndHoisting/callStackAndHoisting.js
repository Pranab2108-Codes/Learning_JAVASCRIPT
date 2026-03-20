function sayMyName(fullName){                                 /* Here we are 1st declaring the function. */

    console.log(fullName);

}
sayMyName("Pranab Sethi");                                    /* Then here we are calling the function, bydefault the call try to find the function declaration at the top of the current block. */  


loveName("Barsha Barik");                                     /* Here we are calling the function 1st, as we can see in the above statements it is not mentioned the declaration part. */
function loveName(fullName){                                  /* Here we are declaring the function as well as definition, and still it will execute in a fine manner, as the call try to see the top side of the current block, but here it will not find that, so it will move to downward to look whether present or not, if yes then it automatically invisiblly assume like in the top of the block and compile. */

    console.log(fullName);                                    /* This is called function Hoisting. */

} 

{                                                             /* Let's assume it as current block. */

                  
currentQuestion();                                            /* Here 1st we are calling the function, then declaring. */
let currentQuestion = function(){                             /* But function Hoisting not work on function Expression. */

    console.log("Lets check with function Expression");

}


newQuestion();                                                /* Here also 1st we are calling the function, then declaring. */
let newQuestion = () => {                                     /* The function Hoisting also can't work on Arraow function. */

    console.log("Final check");

}

}


console.log(age);                                             /* In variable case it make the assumption of only the declaration so it would shift to top of current block but not the difinition of the variable so that's why it will print the value of age as undefined. */
var age = 25;                                                 /* This is also called variable Hoisting. */
console.log(age);                                             /* Here as we have assigned the value of age above, now after calling this, the value will be print correctly, so no more undefined. */


console.log(name);                                            /* Variable Hoisting is not acceptable in the case of let keyword. */
let name = "Pranab Sethi";


console.log(finalCheck);                                      /* Variable Hoisting not also acceptable in the case of const keyword. */
const finalCheck = "Hey";


class Human{                                                  /* Here we declared the class first. */

}
const object1 = new Human();                                  /* Then calling the class members through the object, so it can accessible. */         
var object2 = new Human();                                    /* We can make object using any keyword among const,var and let, doesn't give error. */
let object3 = new Human();

const obj = new Car();                                        /* Can not access before initialization, so it means Hoisting also applicable on class. */
class Car{

}


console.log(greet);                                           /* Here greet is a variable made by var which is storing a function return, as we have seen in fucntion expression it is not possible for Hoisting but because of it is a variable made by var, it will show undefined because only the declaration part got Hoisted not the definition as we have seen in variable case of using var. */
var greet = function(){

    console.log("Hello Everyone");
    
}