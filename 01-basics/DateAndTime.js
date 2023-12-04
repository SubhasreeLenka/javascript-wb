let myDate = new Date();
console.log(myDate); // print the date in own format
console.log(myDate.toString()); // print the date accoring to coordinated Universal Time
console.log(myDate.toDateString()); // print the date in 1st day and then month,date and year format
console.log(myDate.toLocaleString()); // print the date in normal format and time in  universal format
console.log(typeof myDate);//print the type of mydate

 let myOwnDate = new Date(2023,0,23);
console.log(myOwnDate.toDateString());  // print the date in normal form

let myOwnDatee = new Date(2023,0,23,5,3);
console.log(myOwnDatee.toDateString()); 
console.log(myOwnDatee.toLocaleTimeString()); //print the time
console.log(myOwnDatee.toLocaleDateString()); //print the date

let newDate =new Date();
console.log(newDate);
console.log(newDate.getMonth()); //print month with range 0 to 11
console.log(newDate.getDay()); // print day according to day of week
console.log(newDate.getHours()); //print hourd accoring to universal time 
console.log(newDate.getFullYear()); // print the year
console.log(newDate.getMinutes()); // print the minuites accoring to universal time
console.log(newDate.getSeconds()); //// print the second accoring to universal time
console.log(newDate.getMilliseconds()); //// print the milisecond accoring to universal time