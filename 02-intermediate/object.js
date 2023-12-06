/*
    Objects are super important for grouping the data and functionalities .So we can do a lot of things in object of js.
    Objects are constructed in kry and value pair.
    myCars ={                                   :(Name of the object)
                BMW : "Series7",                :(key : BMW)   
             AUDI : "Q7",                       : (value : Series7)
            }  
*/

/*const jsUsers ={
                    name : "Sony",
                    email : "subhashreelenka56@gmail.com",
                    "full Name" : "Subhasree Lenka",         // when we take more than one word in key then we write it within "".
                    age : 21,
                    location : "odisha",
                    isLoggedIn : "false",
                    lastLoggedInDays : ["monday","wednessday","friday"]
                }
console.log(jsUsers.name);              // method for access the value from the object
console.log(jsUsers["email"]);          // Another method for value access
console.log(jsUsers["full Name"]);      //method for accessing the value who have more than one word in its key.

// method for changing the value in an object.
jsUsers.email="webbocket@gmail.com";
console.log(jsUsers.email);

// method for freezing the value in the object. So that anyone cannot change any value inside ur object.
Object.freeze (jsUsers.email);
jsUsers.email="gift@gmail.com";
console.log(jsUsers.email);

jsUsers.gretting = function(){
    console.log("Hello SONY !!!");
}
jsUsers.grettingTwo = function(){
    console.log(`Hello js User ${this.name}`);
}
jsUsers.gretting();
jsUsers.grettingTwo();
*/

/*const tinderUser ={}
tinderUser.id ="1234",
tinderUser.email = "Sony@gmail.com",
tinderUser.name="Sony"
console.log(tinderUser);
console.log(tinderUser.name);

const regularUser={
    email :"somalin@gmail.com",
    fullName: {
        userFullName:{
            FirstName : "Somalin",
            LastName : "Ray"
        }
    }
}
console.log(regularUser.fullName.userFullName.FirstName);
*/

/*const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}
const obj3 ={
    5:"a",
    6:"b"
}
const obj4 ={obj1,obj2};
console.log(obj4);
const obj5={...obj1,...obj2,...obj3}
console.log(obj5)
*/

//Object deStructuring

const cource = {
    courceName : "Last minute placement.",
    price : 9999,
    courceInstructure :"Rajeev"
}
 const { courceInstructure:teacher}=cource
 console.log(teacher);

 /*
 json :- javaScript Object Notation.
         to help the processing data in our local disc and we can manipulate these data also in one place to another

 API :- Application Programming Interface
        It is a mechanism that enables two software components to communicate with each other using a set of defination and protocols.


 */