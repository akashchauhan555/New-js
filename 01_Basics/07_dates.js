// Dates => It is considered as Object in JavaScript

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toJSON());
console.log(typeof myDate);



let myCreatedDate = new Date(2024, 0, 26)
console.log(myCreatedDate.toDateString());                          // => Fri Jan 26 2024   //In Js months starts from zero


let myCreatedDate2 = new Date("01-04-2024")
console.log(myCreatedDate2.toLocaleString());                      // => 1/26/2024, 5:03:00 AM

console.log(myCreatedDate2.toLocaleString());                      // => 1/4/2024, 12:00:00 AM


let myTimeStamp = Date.now()

console.log(myTimeStamp);                                          //1714103440440

console.log(myCreatedDate2.getTime());                             //1704326400000    


console.log(Date.now());                                           //1714103749995  => In Miliseconds

console.log(Date.now() / 1000);                                    //1714103881.281  => In seconds

console.log(Math.floor(Date.now()/1000));                          //1714103881  => In seconds  

let newDate = new Date()

console.log(newDate);                                                 //2024-04-26T04:12:07.869Z

console.log(newDate.getMonth() + 1);                                  //4
   
console.log(newDate.getDay());                                        //5 => 5th day of the week 
 
console.log(newDate.toLocaleString('default', {
 weekday:"long",                                                      // => Friday
}));



