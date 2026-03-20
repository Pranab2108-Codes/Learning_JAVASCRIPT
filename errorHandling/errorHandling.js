console.group(1;                                                               /* This is the compile time error, which is occuring even before execution of the programme, while parsing phase it is giving error, so we can say after being confirm this is a compile time error. */
                                                                               /* Here we can see this is a syntax error. */

try{

    console.log("From here try block got start");                              /* The try block can have many code of lines, while compiling if there will be any error occur then there should have some place which can generate the type of error. */
    console.log(y);                                                            /* Here the y has not been declared anywhere, so it give error, and after that doesn't matter how many line of codes are below of it, those wont run ever. */
    console.log("In here try block end here");                                 /* So as per above error, it will never run. */

}
catch(error){                                                                  /* When error got caught in try block, it will try to look for the catch block, so that it can print the error which is also a parameter for catch block and we can say here it is being handled. */
    
    console.log("Your error got caught");                                      /* After this will be shown in output we can confirm that, the flow switched to catch block. */
    console.log("The error type is:",error);                                   /* It will print the exact type of error. */

}
finally{

    console.log("It will always run doesn't matter any error occur or not");   /* Always run. */

}


console.log(x);                                                                /* This is a runtime error, here we can see x is not defined so it giving reference type of error, which is comes under the runtime error. */
try{

    let errorCode = 100;
    console.log(z);

}
catch(error){                                                                  /* Custom error handling, we can print our own error by using the "throw" keyword. */

    throw new Error("First declare the variable then only it can be initialize.");

}