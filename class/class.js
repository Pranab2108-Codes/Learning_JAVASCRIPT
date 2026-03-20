class Human{

    age = 25;                                                                     /* Public member of the class, so we can access this property inside of this class block as well as the outside of this class block. */
    #weight = 76.89;                                                              /* Because of '#' it got private, so it means we can only access this property only inside of this class. */
    height = "5ft 6inch";
    address;
    city;

    constructor(newAddress , newCity , newWeight){

        this.address = newAddress;                                                /* Here we are assigning the values of these parameters, but we can only use to do those which are mentioned in this class. */
        this.city = newCity;
        this.#weight = newWeight;

    }

    walking(){

        console.log("Let's walk ", this.#weight);                                 /* We have to use "this.#(private_member_name)" for access the private member, here "this" denote the current class, means we are accessing the member of this current class. */

    }

    running(){

        console.log("I am running");

    }

    get fetchWeight(){                                                            /* Even if we would've not use this "get" method we can still access the value of weight which is a private member of class, but as per semantic purpose we used this "get" keyword. */

        return this.#weight ;

    }

    set modifyWeight(val){

        this.#weight = val;                                                       /* Here by using this "set" keyword we can set the new value as per us, even if we would've not use this "set" keyword we could assign the new value. */

    }

}
let obj1 = new Human("ODISHA" , "ROURKELA" , 101);                                /* Here we are actually making the object to execute the blueprint which is class, and also passing the parameters for the constructor. */
console.log(obj1.age);
obj1.walking();
console.log(obj1.this.#weight);                                                   /* Even if we use "this.#(private_member_name) We can't access the private member of class outside of that class. */
console.log("This is the new weight: ",obj1.fetchWeight());                       /* This is not the right way to access the value of the weight, because fetchWeight is not a normal function, rather than it's a method of a class. */
console.log("This is the new weight: ",obj1.fetchWeight);                         /* So we made the get method which is inside of the class, which will return the value. */
obj1.modifyWeight(76.89);                                                         /* This is not the right way to pass the value, because modifyWright is not a normal function, rather than it's method of a class. */
obj1.modifyWeight = 82.21;
console.log("This is the next_new weight: ",obj1.fetchWeight);