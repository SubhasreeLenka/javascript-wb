// Functions :-
/*
Defination  :-A javascript function is a block of code designed to perform a parform a particular task .
            :- A JavaScript function is executed when "something" invokes it (calls it).

spread method :- concartinate , copy.

*/



/*function sayName(){
    console.log("G");
    console.log("I");
    console.log("F");
    console.log("T");
}
sayName();

// here sayName :- Reference 
//      () :- Execution
*/



/*
function addTwoNumber (num1,num2){
    console.log("Addition is :",num1+num2);
}

addTwoNumber(3,4); // arguments.
// (num1,num2) :- parameters.
*/



/*
function addTwoNumber1(num1,num2){
    let result = num1 +num2 ;
    return result;                      // return the variable after assign it in the function block.
}
const result =addTwoNumber1(3,5);
console.log("result : ",result);
*/



/*
function loginUserMessage(username){
    return `${username} just logged in .`
}
console.log(loginUserMessage());
*/



/*
function loginUserMessage(username){
    if(username===undefined)
    {
        console.log ("please enter your username");
    }
    return `${username} just logged in.`
}
loginUserMessage();
*/



/*
function loginUserMessage(username ="Rohit"){
    if(!username)                               // it converts true to false or false to true.
    {
        console.log ("please enter your username");
        return
    }
    return `${username} just logged in.`
}
console.log(loginUserMessage("sam"));           // if we give parameter in this function call it override the function.
console.log(loginUserMessage("Ram"));
*/


/*
function calculatePrice(num1){
    return num1;
}
console.log(calculatePrice(500));
console.log(calculatePrice(500,300));       // it will print the 1st value only because the function have only one parameter.

function calculatePrice2(...num2){          // ... rest operator :- to print all the values in an array format even if function have only one parameter.
    return num2;
}
console.log(calculatePrice2(500,300,600,700));  

function calculatePrice2(val3, val2,...num3){
    return val3; // can't return multiple values . ones at a time
}
console.log(calculatePrice2(500,300,700,300,800,600));  
*/



/*
const user ={
    userName : "gift",
    price : 400
}
function handelObject(anyObject){
    console.log(`userName is ${anyObject.userName} and price is ${anyObject.price}`);
}
handelObject(user);

*/







