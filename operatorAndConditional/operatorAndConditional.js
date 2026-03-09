function arithmeticOperators(){

    let a = 9;
    let b = 5;
                                                      /* Here the operators are '+', '-', '*', '/','%' and '**' <--- This last one indicate the power. */
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);
    console.log(a**b);

}
arithmeticOperators();


function unaryOperators(){

    var c = 3;
    let d = 7;

    console.log(++c);                                 /* Pre-Increment, means first it will increment the value then it will be in use. */
    console.log(c++);                                 /* Post-Increment, means first it will be in use then it will increment the value. */
    console.log(c);

    console.log(--d);                                 /* Pre-Decrement, means first it will decrement the value then it will be in use. */
    console.log(d--);                                 /* Post-Decrement, means first it will be in use then it will decrement the value. */
    console.log(d);

}
unaryOperators();


function assignment(){

    let e = -12;                                      /* Here  we have assigned the -12 value in a memory whose address is named as 'e' here. */
    console.log(e);
    e += 6;                                           /* Short hand notation to do assignment. */
    console.log(e);

}
assignment();


function comparisionOperator(){
                                                      /* Ans Always comes in terms of yes or no means true or false. */
    console.log(10>5);
    console.log(10<5);
    console.log(5<=5);
    console.log(10>=10);
    console.log(50<=5);
    console.log(5>=50);

    console.log(4==4);
    console.log(4!=4);
    console.log(4!=5);

    console.log('5' == 5);                            /* Here it only cmpare with value , so it called as loose equality. */
    console.log('5' === 5);                           /* Here it is not only compare with value but also compare with the data type so it called as strict equality. */
    console.log('5' !== 5);

}
comparisionOperator();


function ternaryOperator(){
                                                      /* (condition) ? val1 : val2. */
    let age = 5;                                      /* Here if the condition will be true, then the val1 will be print, otherwise the val2 will be print. */
    console.log(age>18 ? "Yes i can eligible for vote" : "Not eligible for vote");

}
ternaryOperator();


function logicalOperator(){
     
    console.log(true && true && true);                /* Here logical AND(&&) operator states that if all conditions are true then it will be true, but if there will be atleast one condition will false, then whole answer will be false. */
    console.log(true && false && true);
    console.log(true || false || false);              /* Here logical OR(||) operator states that if atleast one condition will true, then it will give true, otherwise false. */
    console.log(false || false || false);
                                                      /* Working eith non booleans. */
    console.log(false && "Pranab");                   /* There are few things which are always considered as falsy like 0,null,undefined,false....., so here answer will be false because of AND(&&). */
    console.log(true && "Pranab");                    /* Here answer will be Pranab. */
    
    console.log(false || "Pranab" || "Hello");        /* Here when it was hit with the value of "Pranab which is a truthy value will automatically return truth , so wont go further for check." */
    console.log(false  && null);                      /* Obviously false. */

}
logicalOperator();


function bitwiseOpearator(){

    console.log(2 & 5);                               /* This is called as Bitwise AND(&). */
    console.log(2 | 5);                               /* This is called as Bitwise OR(|). */
    console.log(~0);                                  /* This is called as Bitwise NOT(!). */

    console.log(2 ^ 2);

    console.log(5<<1);                                /* Whenever a number is being left shift it will multiply with 2 but the last digit denote how many times it will multiply. */
    console.log(5<<2);                                /* It means 5 will multiply by 2 with 2 times = 5*2*2 so answer should be 20 here.  */

    console.log(10>>1);                               /* When ever a number is being right shift it will devide by 2 , but the last digit denote how many times it will devide. */
    console.log(20>>2);                               /* it means 20 will be devide by 2 with 2 times = (20/2)/2 so answer should be 5 here. */

}
bitwiseOpearator(); 


function conditionalStatements(){

    let age = 19;

    if(age>3) {
        console.log("Yes age is greater than 3");     /* Normal If statement, through this we can surely say this, else statement is optional. */
    }

    if(age<18){
        console.log("Not eligible for voting");       /* If-Else statement */
    }
    else{
        console.log("Eligible for voting");           /* Because of the if condition didn't satisfied so, it go further and print the else statement. */   
    }

    if(age <18){                                      /* Here we can see  Else-If statements, means if the condition1 will fail then it can go further and check for condition2, but if the condition2 will succeed then it will print the answer and not going to move further checks, if this condition2 also fails then it will go to condition3 and so on. */
        console.log("Less than 18");
    }
    else if(age < 19){
        console.log("Less than 19");
    }
    else if(age < 20){
        if(age > 19 && age <= 20){                    /* Nested If-Else, it means inside of If we can give as many as we want if-else and that also goes for the Else part. */
            console.log("Less than 20");
        }
        else console.log("Go further");               /* It will print this statement "Go further" and won't go further to else case. */

    }
    else{                                             /* This case will never be check because in above it was already give us the answer. */
        console.log(age);
    }

    let num = 3;
    switch(num){
        case 1: console.log('A');                     /* For each case there will be the answer, ofcourse in a question there will be no more than one answer so after printing/returning the answer there should be break. */
        break;
        case 2: console.log('B');
        break;
        case 3: console.log('C');                     /* Just like here, after the case 3 got satisfied it should print only 'C', but as we have not mentioned the break statement it will also print the 'D'. */
        case 4: console.log('D');
        break;
        default: console.log('F');
    }
    
}
conditionalStatements();

