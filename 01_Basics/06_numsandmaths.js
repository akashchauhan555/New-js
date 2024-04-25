const score = 100
console.log(score);                              //100

const balance = new Number(500)
console.log(balance);                           //[Number:500]

console.log(balance.toString().length);         //[Number:500] and length:3
console.log(balance.toFixed(3));                //500.000


const otherNum1 = 23.8966

console.log(otherNum1.toPrecision(3));            //23.9

const otherNum2 = 123.8966

console.log(otherNum2.toPrecision(3));             //124


const hundreds = 10000000
console.log(hundreds.toLocaleString());             //10,000,000      

console.log(hundreds.toLocaleString('en-IN'));       //1,00,00,000


/*********************************************************Maths******************************************************/

console.log(Math);                                      //Object [Math] {}
console.log(Math.abs(-5));                              //5
console.log(Math.ceil(4.3));                            //5
console.log(Math.floor(6.7));                           //6
console.log(Math.max(1,2,3,4,7,8,9,10));               //10
console.log(Math.min(1,2,3,4,7,8,9,10));               //1


console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);         //9


const max = 10
const min = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);              //16