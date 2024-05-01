var c = 400                            
const a = 5                            // global variable         

if(true) {
  let a = 4                            // local variable
  const b = 9
  c =  50
//  console.log(a);                    // => 4
}

//console.log(a);                      // a is not defined
//console.log(b);                      // b is not defined
//console.log(c);                      // => 50 It works outside the block scope  
//console.log(a);                        // => 5


function one() {
  const username ="akash"

  function two() {
    const website = "yt"
    //console.log(username);                   // akash
    //console.log(website);

  }
  //console.log(website);                 // website is not defined
  two();                                  // function execution is very important w/t execution it never runs.
}
one();

// console.log(one(username));                // username is not defined


if(true) {
  const username = "akash"
  if(username === "akash") {
    const website = " yt"
    //console.log(username + website);             // akash yt
  }
  //console.log(website);                        // website is not defined

 // console.log(username);                         // akash
}
//console.log(username);                          // username is not defined



/**********************************************************Intresting*****************************************************************/

function addone(num) {
  return num + 1
}
// console.log(addone(5));                           // => 6

// console.log(addTwo(7));                          // => Cannot access 'addTwo' before initialization

const addTwo = function(num) {                   // NOTE:addTwo is like expression or variable
 return  num + 2
}
//addTwo(5);
 console.log(addTwo(7));                         // => 9