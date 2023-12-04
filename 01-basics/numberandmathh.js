const score=400;
console.log(score);
const newScore= new Number(100);
console.log(newScore); // print the value with variable name or datatype
console.log(newScore.toString().length); // print the length of the number after converting the number in to the string.
console.log(newScore.toFixed(2)); // it will print the decimal point upto given number after the number.
 // functions

 // toPrecision
 // it will print that much index what we have given in the function.
 const otherNumber =125.8920;
 console.log(otherNumber.toPrecision(4));

 // toLocaleString
 // it will convert the number as per indian currency structure.
 const demoNumber= 1000000;
 console.log(demoNumber.toLocaleString());

 // in anthor tab open inspect. Then in console tab just write "Number." , then it will show you the all methodes and functions that carries insied the number.


 //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


console.log(Math);
console.log(Math.abs(-6)); // it print the positive number always
console.log(Math.round(4.6)); // it print the roundup value of the decimal value
console.log(Math.ceil(4.2)); // it will print the heighest value of the decimal value i.e the next integer value of the decimal value.
console.log(Math.floor(4.8)); // it will print the previous decimal value of the current decimal value. i.e the current integer.
console.log(Math.random()); // it will print any random value between 0 to 1. i.e a decimal value.
console.log(Math.random()); // it will print different value whenever u print it. it will never give u a same value twice.

//formula for print integer between two given range.
// it may be same may be different but in random order not in same order.
const min=10;
const max =20;
console.log(Math.floor(Math.random()*(max-min+1))+min);
console.log(Math.floor(Math.random()*(max-min+1))+min);