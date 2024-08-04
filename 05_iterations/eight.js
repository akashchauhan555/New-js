//const myNums = [1, 2, 3, 4, 5, 6, 7]

// const initialValue = 0

// const sumWithInitial = myNums.reduce( (acc,currval) => 
//    acc + currval , initialValue
// );

// console.log(sumWithInitial);



//const myTotal = myNums.reduce( function(acc,currval) {
  //console.log(`acc: ${acc} and currval: ${currval}`);
  //return acc + currval
  //},0)

// console.log(myTotal);

/* Output: acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3
acc: 6 and currval: 4
acc: 10 and currval: 5
acc: 15 and currval: 6
acc: 21 and currval: 7
28 */


const myNums = [1, 2, 3, 4, 6, 7, 8]

const newNums = myNums.reduce( (acc,currval) => acc + currval, 0)

//console.log(newNums);


const shoppingCart = [
  {
    itemName: "py course",
    price: 999
  },
  {
    itemName: "js course",
    price: 499
  },
  {
    itemName: "data science course",
    price: 12999
  },
  {
    itemName: "web dev course",
    price: 1999
  },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);



