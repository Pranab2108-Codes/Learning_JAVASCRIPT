let arr = [1,2,3,4,5];                                            /* Creation of array. */             
console.log(arr);
console.log(typeof(arr));                                         /* Object. */
console.log(Array.isArray(arr));                                  /* In this way we can check whether it is really an array or not. */


let brr = new Array('love',1,true);                               /* We can create the array using array constructor also and we can assign different data type values at once. */
console.log(typeof(brr));
console.log(brr);
console.log(Array.isArray(brr));
console.log(brr[0]);                                              /* To access the array element, we use it's index number inside of the bracket([]). */

brr.push("Pranab");                                               /* By using push we can add element at the end of array. */
console.log(brr);
brr.push(20,30,"Hey");                                            /* We can also use to push multiple elements all at once. */
console.log(brr);                         
brr.pop();                                                        /* By using pop we can remove element at the end of array. */
console.log(brr);         

brr.shift();                                                      /* We can remove the element from the start by using this shift. */
console.log(brr);
brr.unshift("Barsha");                                            /* We can add the element from start by using the unshift. */
console.log(brr);

console.log(brr.slice(2,4));                                      /* Last index will not include, shallow copy will be created while slice. */
console.log(brr);                                                 /* Slice will not change the original array. */

brr.splice(1,2,"Pranab",69);                                      /* Here in the splice the first number(1) is indicating the starting index then the 2nd number(2) indicate the how may number of time it iterate and lastly the items. */                                 
console.log(brr);                                                 /* Here it means as per our code the 1st index and 2nd index will be replace with the "Pranab" ad 69 number. */
brr.splice(1,0,"Weds");                                           /* Here because of the 0 iteration it will not remove from the 1st index , but only insert an element at 1st index with "Weds" value. */
console.log(brr);


let crr = [10,20,30];
let ansCrr = crr.map((number) => {                                /* Map function create a new array with values which are returned, in this case map is taking the each and every elements of existing array one by one and multiplying with same value then store at new array. */

    return number*number;        

});
console.log(ansCrr);                                              /* It also cant replace the original array. */

crr.map((number,index,array) => {                                 /* Map function's generalize syntax. */
    console.log(number,index,array);
});


var drr = [1,2,3,4,5,6];
var ansDrr = drr.filter((number) =>{                              /* This filter function also creates a new array which are returned, in this case filter will go each and every value of an existing array and keep those value in new array which are satisfied by the filter function. */

    if(number%2 ==0) return true;                                 /* Only the elements which are passing the conditions are being kept like 2,4 ad 6. */
    else return false;

});
console.log(ansDrr);

var err = [1.76,"love",null,true];
let ansErr = err.filter((number) =>{

    if(typeof(number) === "string") return true;                  /* Here the 's' of string is small. */
    else return false;                                            /* This filter will not replace the original array. */

});
console.log(ansErr);       

err.filter((number,index,array) =>{                               /* This is the generalize syntax. */

    console.log(number,index,array);

});


let frr = [10,26,39,4,5];
let ansFrr = frr.reduce((acc,curr,index,array) => {               /* acc denote accumulator, curr denote crrent in the reduce function. */

    console.log(acc,curr,index,array);                            /* Here the index will print according to the current, means where it is situated. */
    return acc+curr;

},0);                                                             /* Here we have initialize the accumulator so that's why acc is 0 at start and current is in 0th index, after doing acc+curr the value will be store in acc. */
console.log(ansFrr);

let answerFrr = frr.reduce((acc,curr,index,array) => {           

    console.log(acc,curr,index,array);                            /* Here also index will be print according to the current, means where it is located. */
    return acc+curr;

});                                                               /* Here the accumulator has not been initialized so bydefault the accumulator points on index 0 and the current points at 2st index. */
console.log(answerFrr);


var grr = [9,3,7,4,0];
console.log(grr.sort());                                          /* We can sort this array. */
console.log(grr);                                                 /* After doing this operation the original array also become sorted. */


let hrr = [6,2,7,8,3,6,7,5];
console.log(hrr.indexOf(8));                                      /* Here "indexOf" print the first index of the number/element. */
console.log(hrr.indexOf(7));                                      
console.log(hrr.lastIndexOf(7));                                  /* Here "lastIndexOf" print the last index of element where it is occuring. */


let irr = [19,20,15,63];
let sumOfElements = function(irr){                                /* We can also pass the array in the function, and it is pass by reference. */

    let sum =0;
    irr.forEach((element) => {
        sum += element;
    });
    return sum;
    
}
console.log(sumOfElements(irr));