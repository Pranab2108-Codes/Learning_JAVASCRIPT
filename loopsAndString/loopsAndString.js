console.log("Hey");                      /* Here we are making the code bulky by doing this. */
console.log("Hey");                      /* If we ever need to change something then we have to go and update each of these codes. */
console.log("Hey");                      /* So much time taking task. */
console.log("Hey");
console.log("Hey");

                                         /* That's why when ever we need the set of instructions to be execute all at once then we prefer "loop". */
for(var i=1; i<=5; i++){                 /* for( initialization; condition; updation ) */
    console.log("I am Pranab");          /* { */
}                                        /*   Body */
                                         /* } */

for(let i=5;i>=1;i--){                   /* As i is the blocked variable, it will only run inside of this for loop only. */
    console.log(i);                      /* Reverse order printing. */
}


for(let i=1;i<=5;i++){
    if(i==4){
        break;                           /* Means no more iteration anymore, because after break it will be out of the loop. */
    }
    else if(i==3){
        continue;                        /* Here it means the current iteration will be skip, because of the continue. */
    }
    else console.log(i);
}


var i=1;                                 /* It is better to initialize the variable at outside of while loop. */
while(i<=5 ){                            /* while( condition ), here we apply the condition. */
    if(i==3) {                           /* { */
        i++;                             /* Body, inside of body we must either increment or decrement according to our need so it is the updation part. */
        continue;                        /* } */
    }                 
    else console.log("Hello");           
    i++;                                 
}                                        
 

var j=1;                                 /* It is the initialization. */
do{                                      /* do */
  console.log("Love");                   /* { */
  j++;                                   /* Body, where we must increment or decrement according to our need, which is an updation part. */
}while(j<=5);                            /* }while( condition ), here we apply the condition at the end. */

                                         /* Now starts about Strings. */
let firstName = "Pranab";                /* We can create a string by using double inverted comma. */
var lastName = 'Sethi';                  /* We can create a string by using single inverted comma. */
var newStyle = `Hey                      
Everyone
This is
me.`
console.log(typeof(newStyle));           /* We can create a string by applying back ticks also. */
let fullName = new String("Pranab");     /* This is also a kind of creation. */
console.log(fullName);
console.log(typeof(fullName));


let language1 = "odia ";
let language2 = "English";
console.log(language1+language2);        /* Concatenating two different strings in to one string. */


let op1 = 'Hey';
let op2 = 'Broo';
let finalAns = `${op1} ${op2}`;          /* If we ever want to use the string variables We can use them inside of back ticks but we have to use $(Dollar) sign and followed with curly braces, so inside of those curly braces we can put our variables. */
console.log(finalAns);


console.log(op2.length);                 /* This way we can find length. */
console.log(op1.toUpperCase());          /* We can convert whole string into an uppercase. */
console.log(op2.toLowerCase());          /* We can convert whole string into a lowercase. */


let str = "Hello Babbar bhaiya";
console.log(str.substring(2));           /* We can print the substring also using this method. */
console.log(str.substring(2,7));         /* The last digit which will be the index's character will not include, but the first digit which is also an index's character will include. */

                                         /* If we ever want to put string inside of string , normal double inverted comma cant help, but the only thing to do is use backslash \"(word)\". */
let sentence = "Hey + everyone + \"this\" is Pranab";
let words = sentence.split(' ');         /* We can split the string according to us. */
console.log(words);
console.log(sentence.join(','));         /* Join can not be applied over a string, it can be only apply on array, so this will give us error. */
console.log(words.join("_"));            /* we can join the array into a string according to us. */