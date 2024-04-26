const marvel_heroes = ["thor","loki","ironman"]
const dc_heroes = ["batman","superman","flash"]
  

marvel_heroes.push(dc_heroes)

console.log(marvel_heroes);                               //['thor','loki','ironman',['batman','superman','flash']]

console.log(marvel_heroes[3][0]);                         // batman

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes);                                     //['thor','loki','ironman','batman','superman','flash']


/*NOTE:In concat combines two or more arrays.This methods returns a new array without changing any existing array.*/


const all_newheroes = [...marvel_heroes,...dc_heroes]
console.log(all_newheroes);

const new_arr = [3,5,6,8,9,[3,4,5,[3,4]],2,4,[3,4]]

console.log(new_arr[5][3][1]);                                // => 4

const new_arr2 = new_arr.flat(Infinity)

console.log(new_arr2);                                       // [3,5,6,8,9,3,4,5,3,4,2,4,3,4]


console.log(Array.isArray("akash"));                        //false

console.log(Array.from("akash"));                           // ['a','k','a','s','h']

console.log(Array.from({name:"akash"}));                   // [] => It returns the empty array b/c it didn't get the point


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));               // [100, 200, 300]