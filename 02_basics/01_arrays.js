// Array

const myArr = [0,3,5,6,7,8,9]

const myHeroes = ["Loki", "Aquaman", "Batman"]

const newArr = new Array(3,4,6,6,9,4)

console.log(newArr);                                     // => [3,4,6,6,9,4]

console.log(myArr[2]);                                  // => 5

myArr.push(7)
console.log(myArr);                                       // => [0,3,5,6,7,8,9,7]

newArr.pop()
console.log(newArr);                                      // => [3,4,6,6,9]


newArr.unshift(11)
console.log(newArr);                                       // => [11,3,4,6,6,9,4]

newArr.shift()
console.log(newArr);                                      // => [3,4,6,6,9,4]
 
const newArr2 = [3,4,5,6,7,8]

console.log(newArr2.includes(7));                           // => true
console.log(newArr2.indexOf(8));                           // => 5

const newArr3 = newArr2.join()

console.log(newArr2);                                       // [3,4,5,6,7,8] Normal in array form

console.log(newArr3);                                       // => 3,4,5,6,7,8 Now it's converted into string

console.log(typeof newArr3);                                // string 



/***************************slice and splice**********************************/ 

const newArrr = [3,4,5,6,7,8,9]

console.log("A ", newArrr);                   //A:[3,4,5,6,7,8,9]

const myn1 = newArrr.slice(1,3)

console.log(myn1);                            //[4,5]

console.log("B ", newArrr);                   //B:[3,4,5,6,7,8,9]  


const myn2 = newArrr.splice(1,3)
console.log("C ", newArrr);                   //C:[3,7,8,9]        
console.log(myn2);                            //[4,5,6]

  /* NOTE:The main difference b/w slice and splice => In slice source array not manipulated but in splice the source array get manipulated. */




