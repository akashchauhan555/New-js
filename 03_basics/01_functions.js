// function addTwoNum (num1, num2) {
// console.log(num1 + num2);
// }
function addTwoNum (num1, num2) {
    //let result = num1 + num2;
   // console.log("Akash");
  
  return num1 + num2
    //console.log("Akash");                                     // After return no instruction is executed.
    }
  const result = addTwoNum(3, 5);            
   //console.log(result);                                       // => 8 
  
  //  function loginUserMessage(username) {
  //   return `${username} just logged in `
  //  }
  //  console.log(loginUserMessage("akash"));
  
  function loginUserMessage(username) {
    if(username === undefined) {
      //console.log("Please enter a username")                    // Please enter a username
      return
    }
    return `${username} just logged in `
   }
  //  console.log(loginUserMessage());                            // undefined
  //console.log(loginUserMessage("Akash"));                        // Akash just logged in  
  
  
  // function calculateCartPrice(...num1) {                        // Rest Operator
  //   return num1
  // }
  // console.log(calculateCartPrice(3,8,4,4,3));                   // => [ 3, 8, 4, 4, 3 ]
  
  
  function calculateCartPrice(val1, val2, ...num1) {               // Rest Operator
    return num1
  }
  //console.log(calculateCartPrice(300, 400, 5000,4400));            // [5000, 4400]  
  
    /* Note: val1 and val2 takes the value of 300 and 400 respectively.*/
  
    const user = {
      name:"Akash",
      price:449,
      email:"ac3838@gmail.com"
    }
   
  
    function handleObject(anyobject) {
      console.log(`Username is ${anyobject.name} and price is ${anyobject.price} and the email is ${anyobject.email}`);
    }
    // handleObject(user);                   // Username is Akash and price is 449 and the email is ac3838@gmail.com
  
    // handleObject({
    //   name:"Akash",
    //   price:449,                             // Username is Akash and price is 449 and the email is ac3838@gmail.com
    //   email:"ac3838@gmail.com"
    // })
  
    
    // handleObject({
    //   name:"Hitesh",
    //   price:500,                             // Username is Hitesh and price is 500 and the email is sly71@gmail.com
    //   email:"sly71@gmail.com"
    // })
  
  const newArr = [499, 944, 788, 400]
  
  function newFun(getArray) {
    return getArray[2]
  }
  // console.log(newFun(newArr));                   // 788
  console.log(newFun([300, 993, 900, 899]));        // 900