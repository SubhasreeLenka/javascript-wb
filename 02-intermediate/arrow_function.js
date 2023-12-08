/* Arrow function   :- In ES6 major update had done . It changes the old syntax of function declaration and tried to reduce the length of a code .
                    :- In arrow function we need a variable to declar it amd majorly used => this operatorto define arrow function.

    Parameter       :- the variable inside the function is called parameter.
    Argument        :- the value passed by the function when it called is known as argument.
*/


/*
// old syntax of a function 

function addTwoNos (num1,num2){
    return num1+num2;
}
console.log(addTwoNos(5,5));

*/


//Arrow function

/*
const user ={
    userName : "Sony",
    location : "bbsr",
    welComeMessage : function(){
        console.log(this);
        console.log(`${this.userName}, Good Morning...`);
        
    }
}
// console.log(user);
user.welComeMessage();
user.userName="Subhasree";
user.welComeMessage();
*/

/*
const person ={
    name : "Seema",
    age : "21",
    logInDays: ["sunday","monday","tuesday"],
    username :{
        userDetails :{
            lname : "priyadarshini",
            fname :"Gayatri"
        }
    }
}
console.log(person);
console.log(person.username.userDetails.fname);
console.log(person.username.userDetails.lname);
console.log(person.username.userDetails);

*/


// arrow function example

/*
const userDetails = () => {
    let fname="Web_Bocket"
    console.log(this);
    console.log(fname);
}
userDetails();

*/


/*
const addTwoNos = (num1,num2) =>{
    return num1+num2;
}
console.log("addition using arrow_function having body is ",addTwoNos(5,3));
*/


const addNos =(num3,num4) => num3+num4;
console.log("Addition is using arrow_function without having body is " , (addNos(4,3)));



const addTwo =() =>({userName : "Web_Bocket"})
    console.log(addTwo())
