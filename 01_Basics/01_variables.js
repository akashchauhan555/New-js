 const accountId = 3874877
 let accountEmail = "ac1675229@gmail.com"
 var accountPassword = "34353"
 accountCity = "Jaipur"
 let accountState;

/*
Prefer not to use var
because of issue in the block scope and functional scope
*/

console.log(accountId)
accountEmail = "afjkfj@gmail.com"
accountPassword = "4887585"
accountCity = "Bengluru"
console.table([accountEmail,accountPassword,accountCity,accountState])