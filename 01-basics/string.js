// String creation and print .
const n="Sony";
console.log(n);
const num=50;
console.log(n + num);
console.log(`my name is ${n}`);

// creating string using object.
const namee = new String ("Sony");
console.log(namee); // it will print the String with datatype 
console.log(namee[1]); // it will print the the particular object according to the index number given by you.


// String Methods...........
 console.log(namee.length);
 console.log(namee.toUpperCase()); // to covert the whole String to uppercase
 console.log(namee.toLowerCase()); //to covert the whole String to lowercase
 console.log(namee.indexOf("n")); //find the index number of the given letter in the string
 console.log(namee.charAt(0)); //find the charecter of the given index
 console.log(namee.toLocaleUpperCase());


 //subString of a string
 // it simply devide ur String . which two index u give it will print the letter inside the string in the form of 1St index to perivious index of last number u give.
 const nam="Subhasree";
 const newName = nam.substring(0,5);
 console.log(newName);


 //trim function
 // it simply remove all the blanck space from the 1st and last part of the string.
 const myName="          GIFT   Autonomus  College           ";
 console.log(myName);
 console.log(myName.trim());


// slice function
// it only return thw selected element. means it only give us those element which index we give.
// it is quite similar as substring function.
 const anothername = newName.slice(0,5);
 console.log(anothername);

 // replace function
 // it replaces the selected element with given element which we want to replace .
 const url="www.webbocket.com";
 console.log(url.replace("com","in"));

 // split function
 // it will split rhe string in those section where we give comand to split.
 const demo="gift-is-a-good-college";
 console.log(demo.split('-'));