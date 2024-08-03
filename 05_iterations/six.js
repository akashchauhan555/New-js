// const coding = ["python", "java", "cpp", "ruby", "javaScript"]

// const values = coding.forEach( (item) => {
//  // console.log(item);
//   return item
// })
 
// console.log(values);                       // undefined


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNums.filter( (num) => num > 3)
 //console.log(newNums);

 // In the Case of explicit return

//  const newNums = myNums.filter( (num) => {               // when scope {} start then we have to use the return keyword to get the result.
//   return num > 6
//  })
  
//  console.log(newNums);

const newNums = []

myNums.forEach( (num) => {
  if(num > 3) {
    newNums.push(num)
  }
})

// console.log(newNums);

const books = [
  {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
  {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
  {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
  {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
  {title: 'Book Five', genre: 'Science', publish: 1981, edition: 2004},
  {title: 'Book Six', genre: 'Fiction', publish: 1981, edition: 2010},
  {title: 'Book Seven', genre: 'Fiction', publish: 1981, edition: 2011},
  {title: 'Book Eight', genre: 'History', publish: 2000, edition: 2009},
  {title: 'Book Nine', genre: 'Zoology', publish: 1995, edition: 2008},
];

//const bookList = books.filter( (bk) => bk.genre === 'Non-Fiction')

//console.log(bookList);

let bookList = books.filter( (bk) => {
   return bk.genre === 'History'
})

bookList = books.filter( (bk) => {
  return bk.publish >= 2000 && bk.genre === 'History'
})

console.log(bookList);

/* Output1 : [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Eight',
    genre: 'History',
    publish: 2000,
    edition: 2009
  }
]
  */

/* Output2 :
[
  {
    title: 'Book Eight',
    genre: 'History',
    publish: 2000,
    edition: 2009
  }
] */



 
