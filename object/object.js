let obj1 ={                                    /* Here obj1 is a reference variable so it will be created inside of stack memory not in heap memory, but what ever we are creating inside of this object will be taken inside of the heap memory, because object ia a non-primitive data type. */

    name: "Pranab",                            /* Here the key is "name" and value is a string type of data. */
    "full name": "Pranab Sethi",               /* Here we only use double inverted comma for key when our key is having space and there is more than 1 words. */
    age: 25,                                   /* We can add multiple data type inside of an object. */
    height: "5ft 6inch",                       /* If there are multiple key value pair, then we should use comma(,) between them. */
    greet: function(){                         /* Here the key value can be function name and the function. */

                console.log("Hello everyone how are you?");
                
            }
    
};
console.log(obj1);
obj1.greet();
console.log(typeof(obj1));
console.log(obj1.name);                        /* In this way we call the key through object by using object name and followed with dot(.). */


let obj2 = obj1;                               /* This obj2 also going to be created in stack memory in different place and also point or refer to the same object which is pointing by obj1. */   
obj2.height = "5ft 5inch";                     /* Here if we make some changes to the obj2 then it also making changes in obj1. */
console.log(obj2);                             
console.log(obj1);


obj1.color = "White";                          /* Now a new property got added in to the object obj1 so that's why we call the object as dynamic in nature, because we can change the state of the object at the runtime. */
console.log(obj1);


let obj3 = {...obj1};                          /* This is called cloning, this is one of the approach to do cloning the object's members called as spreading, which symbolize by 3 dots(...). */                      
console.log(obj3.age);                         /* Here it doesn't mean the obj3 also pointing the same object members which is pointing by obj1, instead it making the new object as well as members also, if we will change anything in obj3 will not affect in obj1. */
obj3.address = "ODISHA";                       /* Adding another property to obj3. */


let obj4 = Object.assign({},obj1,obj3);        /* This technique is the 2nd technique to cloning called as assign.*/
console.log(obj4);
obj4.color = "Black";                          /* In this technique also if we change something in obj4 then will not affect to the obj1 and obj3. */
console.log(obj1);
console.log(obj4);


let obj5 = {};
for(let key in obj4){                          /* This technique called as cloning through iteration, but not the prefferable way as like as spreading and assigning. */

    obj5[key] = obj4[key];
    
}
console.log(obj5);
obj5.address = "RAIPUR";                       /* Here also if we make some changes in obj5 then it will not affect to obj4. */
console.log(obj4);
console.log(obj5);