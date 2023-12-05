/*
Array is an object which can store type of data in a contigious memory location.
Array index Starts from 0.
In array we can store multiple value in one variable.
*/

const myArr=[3,4,5,6,7,8,9]; // Array initializing and declaring
console.log(myArr[0]); // Accessing the element

const myArrNew =["sony","puja","seema","avi"];
console.log(myArrNew[0]);

const myArrNew2 =["sony","puja",1,"seema","avi"]; // an array can Store both string and number value in javaScript.
console.log(myArrNew2[2]);

// array creating new method.
const newArr= new Array (1,2,3,4);
console.log(newArr);

//-------------------------------------------------------------------------------------------------------------------------------
/*Array methods.
push :- Insertion at last
pop :- Deletion at last
unshift :- insertion at 1st
shift :- Deletion at 1st
splice :- show the value of index from given starting to ending index
inclueds :- check the value is present or not and gives the result true or false
indexof :- shows the index value peresent in the given value . and if the index is not present then return -1.
join :- converts our array into the String.
typeof :- it displays the type of the array.
slice :- it display the elements from given 1st index to perivious of last index.
concat :- Add two arrays one inside another
...arr1,...arr2,...arr3 :- add more than one array in one array.(but you have to commentout all the above arry because of strings are present before).
flat.(infinity):- flat the whole complecated array into a simple array.
isArray :-it used to check whether it is array or not.
form :- it creates the array automatically using the given string

*/

const myArray=[1,2,3,4,5,6,7];
console.log(myArray);
myArray.push(8); 
console.log(myArray.splice(2,0,"s"));
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.unshift(0);
console.log(myArray);
myArray.shift();
console.log(myArray);
console.log(myArray.includes(9));
console.log(myArray.indexOf(7));

console.log(myArray);

const demoArray= myArray.join();
console.log(demoArray);
console.log(typeof demoArray);

console.log("A",myArray); // Add the element outside the array.
const myArray1= myArray.slice(1,3);
console.log(myArray1);

const myArray2= myArray.splice(1,3);
console.log(myArray2);

const cars =["maruti","alto","xuv","wagnor"];
const supercars =["bmw","audi","g-wagon","defer"];
cars.push(supercars);
console.log(cars);
cars.concat(supercars);
console.log(cars);
const allcars = cars.concat(supercars);
console.log(allcars);

const allNewCars =[...cars,...supercars];
console.log(allNewCars);

const anotherArray =[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realAnotherArray =anotherArray.flat(Infinity);
console.log(realAnotherArray);

//----------------------------------------------------------------------------------------------------------------------------------------------------

console.log(Array.isArray("sony"));
console.log(Array.from("Sony"));