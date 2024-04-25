const name = "Akash"
const repoCount = 59

// console.log(name + repoCount + "value");


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);              // String interpolation


const gameName = new String('Akashchauhan')

console.log(gameName[3]);                         //s
console.log(gameName.__proto__);                  //{}

console.log(gameName.length);                     //5
console.log(gameName.toUpperCase());              //AKASH
console.log(gameName.charAt(3));                  //s
console.log(gameName.indexOf('h'));               //4    



const newString = gameName.substring(0,4)
console.log(newString);                              //Akas


const anotherString = gameName.slice(-12,4)
console.log(anotherString);                          //Akas


const newStringOne = "      Akash       "           
console.log(newStringOne);                              //print with spaces available
console.log(newStringOne.trim());                   //ignores spaces


const url = "https://hitesh.com/hitesh%20chaoudhary"
console.log(url.replace('%20','-'));

const newWord = "hello"

console.log(newWord.includes('jfjfjf'));             //false

const newVarSplit = "akash-chauhan-bbd"
console.log(newVarSplit.split('-'));                //['akash', 'chauhan','bbd']

