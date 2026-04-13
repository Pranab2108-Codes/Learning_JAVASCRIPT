function sayMyName(){                                    /* This part is called as function declaration, inside of the brackets ( parameters ) we can pass many parameters, or no parameters also. */

    console.log("Pranab Sethi");                         /* This is the actual logic inside of the function, which supposed to execute, this is called as function definition. */

}
sayMyName();                                             /* This part is called the function calling, we are not passing any parameters here. */   


function getAverage(num1 , num2){                        /* Passing the parameters, it will automatically take the parameter's datatype. */

    let avg = (num1+num2)/2;
    console.log("Average of these numbers is :", avg);

}
getAverage(10,7);


function getSum(a, b, c){

    let sum = a+b+c;
    return sum;                                          /* Here the function returning the value, and here it is returning an integer. */

}
let ans = getSum(3,6,4);                                 /* We can store the returning value into a variable. */
console.log("The summation is :", ans);                


function getMyName(firstName, lastName){

    let fullName = firstName + lastName;                 /* Here we are concatenating two strings in to one string and returing it. */
    return fullName;

}
let fullName = getMyName("Pranab ", "Sethi");            
console.log(fullName);


function getMe(one , two){

    var answer = one+ " " +two;                          /* Here "one" and "two" were the integers but because of the empty string( " " ) also got concatenated the whole answer got turned in to string. */
    return answer;

}
console.log(getMe(21082001,23223053));                   /* See these are just the "Number" data type. */


function getMultiplication(a,b){                         /* Till now these are the normal way to write the function. */

    return a*b;

}
console.log(getMultiplication(4,7));


let multiplication = function(a,b){                      /* This is a new type of function declaration which is called as Function expression, here the "multiplication" is the variable which is saving the result of the function. */

    return a*b;

}
let answer = multiplication(2,20);                       /* Here we are using the variable multiplication and passing the parameters inside of them, the way we normaly do in regular functions. */
console.log(answer);


function square(num){

    return num**2;                                       /* It means num to the power of 2. */

}
console.log(square(4));


function getExponential(x,y){    

    return x**y;

}
console.log(getExponential(2,5));                        /* See here we are not storing any return value, direct printing and also using the function expression. */


let exponential = (m,n) => {                             /* This is also a new type of function declaration which is called as Arow function, where we are creating a variable which will store the value of function but not mentioning anywhere about function, only use "=>" mark. */

    return m**n;

}
console.log(exponential(3,2));


let greet = function(){                                  /* Here we can assign the function to a variable, which we also known as the "function Expression". */

    console.log("Greeting for the day");

}
greet();


function greetMe(greet,fullName){                        /* Here we can assign the function inside of the function. */

    console.log("Hello ",fullName);
    greet();                                             /* Declaration is in somewhere else. */

}
greetMe(greet,"Pranab");


function solve(number){                                  /* Inside of this solve function nothing will happen with 5, only it will return a function, here we declare the function inside of this solve function. */

    return function(number){                             /* Solve return another function, this whole function(number){ return number*number } will be the result of the solve function. */

        return number*number;
        
    }

}
let result = solve(5);                                   /*  Now the result became a function. */
console.log(result(7));                                  /* So the only answer it will give is 49, and that 5 is not playing any major role now. */


const arr = [                                            /* We can make the array of functions also. */
    
    function(a,b){

        return a+b;

    },
    function(a,b){

        return a-b;

    },
    function(a,b){

        return a*b;

    }

];
let first = arr[0];
console.log(first(10,5));
let second = arr[1];
console.log(second(5,8));


function getMyName(fName = "Prabhu", lName = "Deva"){    /* Here in "fName" and "lName" we are passing default parameters, means if we dont pass anything while calling this function then it will automatically takes the default values of parameters. */

    console.log("Hey my name is:", fName,lName);

}
getMyName("Pranab", "Sethi");                            /* Here we are passing these values, so the parameters will takes these values only. */
getMyName();                                             /* Here it will take the default values of parameters like for "fName" as "Prabhu" and "lName" as "Deva". */

                                                         /* Here we can say that, one parameter is depending on the other parameter. */
function getName(fName = "Prabhu", lName = fName.toUpperCase()){

    console.log("Hey my name is:", fName,lName);

}
getName("Pranab");
getName();

                                                         /* We can pass the default parameters as object also.*/
function solveNow(value = {age:25, weight:76.89, height:"5ft 6 inch"}){

    console.log("Hello the value is:",value);

}
solveNow(63.46);
solveNow();


function solveIt(item = "Pranab2108.codes"){

    console.log("Hello world this is:",item);

}
solveIt();
solveIt(null);                                           /* Here the parameter will go as null and also print the value as null. */
solveIt(undefined);                                      /* But it will print the "Pranab2108.codes". */


function getAge(){

    return 190;

}


function utility(name = "Lovely Barsha", age= getAge()){ /* Here we can pass the parameter as function. */

    console.log(name,age);

}
utility("Barsha",26);
utility();