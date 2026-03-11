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