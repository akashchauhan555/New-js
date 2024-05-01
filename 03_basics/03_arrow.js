const user = {
    username:"akash",
    price:88,
  
    welcomeMessage: function() {
      console.log(`${this.username}, welcome to the website`);
      // console.log(this);
    }
  }
  // user.welcomeMessage();                               // akash, welcome to the website
  // user.username = "sam"
  // user.welcomeMessage();                               // sam, welcome to the website
  
  //console.log(this);                                    // {}     
  
   /*NOTE: Global object inside browser is treated as Window whereas in node environment it treared as empty object {}*/
  
  
  function newFun() {
    let username = "akash"
    //console.log(username)                                  // akash
    //console.log(this.username);                           // NOTE: 'this' can only be used in object not in function 
    //console.log(this);
  
  }
  //newFun();                                                // undefined
  
  
  // const chai = function () {
  //   let username = "akash"
  //   console.log(this.username);                              // undefined
  // }
  // chai();
  
  
  const chai = () => {
    let username = "akash"
    // console.log(this.username);                              // undefined
    console.log(this);                                          // empty object {}
  }
  // 
  
  // const addTwo = (num1, num2) => {
  //   return num1 + num2
  // }
  // console.log(addTwo(4,5));                                          // 9
  
  
  //const addTwo = (num1, num2) => num1 + num2                          // NOTE:This arrow function is known as implicit return. 
  //const addTwo = (num1, num2) => (num1 + num2)                        // 9
  
  const addTwo = (num1, num2) => ({username: "akash"})                 // { username: 'akash' }
  console.log(addTwo(4,5));                                            // 9