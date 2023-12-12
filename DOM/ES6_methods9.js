// filter
/*
const myArray = [1,2,3,4,5,6,7,8]
const myFilterArray = myArray.filter((item) => {
    return item >4
})
console.log(myFilterArray);

*/

// filtering using forEach - used for only checking

/*
const myArray = [1,2,3,4,5,6,7,8]
const filterArray = myArray.forEach((data) => {
    if (data >5){
       
        return data               // return is a exit statement of the array.
        //console.log(data)
    }
})
console.log(filterArray);

*/



//Map Method 

/*
const arrayNumbs = [2,4,6,8,10]
const changedArray = arrayNumbs.map( ( value ) => {
    return value +2 ;
})
console.log(changedArray);

*/


// Chaining

/*
const ChainingArray = [3,4,6,7,8,9,10]
const updatedArray = ChainingArray 
                                    .map( (data) => data +10)
                                    .map( (data) => data*10)
                                    //.map( (data => data>150))      // checkes true or false
                                    
                                    .filter( (data => data>150)) 

console.log(updatedArray);

*/

// Reduce Method

/**
 Here what ever ew take as initial value it is 1st access to accumulator .
 After that each addition result upto final result is assigned to the accumulator.

 */


const arrOfNum = [1,2,3,4,5]
const reduceArray = arrOfNum.reduce( function(accumulator , currentValue){
    console.log(`accumulator ${accumulator} and ${currentValue}`)
    return accumulator+currentValue
},5)
console.log(`Our final value is = ${reduceArray}`);



//reduce method using arrow function

const modifiedArray= arrOfNum.reduce((acc,cv) => acc +cv ,5)
console.log(`Our reduced array = ${modifiedArray}`);


const books = [
    { title: 'Book 1', genere: 'friction',        publish: 1981, edition: 2004},
    { title: 'Book 2', genere: 'Non-friction',    publish: 1992, edition: 2008},
    { title: 'Book 3', genere: 'History',         publish: 1978, edition: 1990},
    { title: 'Book 4', genere: 'Science',         publish: 1956, edition: 1986},
    { title: 'Book 5', genere: 'Non-friction',    publish: 1920, edition: 2000},
    { title: 'Book 6', genere: 'friction',        publish: 2010, edition: 2012},
    { title: 'Book 7', genere: 'Science',         publish: 2008, edition: 2008},
    { title: 'Book 8', genere: 'Non-friction',    publish: 2003, edition: 2004},
    { title: 'Book 9', genere: 'History',         publish: 1990, edition: 2007},
];

const findGenere = books.fill((fg) => fg.genere === 'Non-friction');
//console.log(findGenere);

const filterData = books.filter((fd) => {return fd.genere === "History" && fd. edition >= 2004})
//console.log(filterData);


// how to create set ?

const mySet =new Set();

//Add elements to the set
mySet.add(4);
mySet.add(4);
mySet.add(14);
mySet.add(10);
mySet.add(13);
mySet.add(11);
mySet.add(11);
mySet.add(4);
mySet.add(0);
mySet.add(12);

console.log(mySet);

//how to get length or size of set.
 const mySetSize = mySet.size;
 console.log(mySetSize);

 //delete an element from the set.

 const deleteElement = (mySet.delete(0));
 console.log(deleteElement)                     // give true or false value
 console.log(mySet)

 // check the element is existing or not.

 console.log(mySet.has(8))                      // give true or false value 