// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);                      // DB CONNECTED
  })();                                               // semicolon (;) is important at the end of the IIFE function.
  
  ( (name) => {
    // simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);         // DB CONNECTED TWO Akash
  } )("Akash")