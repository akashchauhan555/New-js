const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = myNumbers.map( (num) => { return num + 10 })

// console.log(newNums);      
 /* Output : [
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
] */

  const newNums = myNumbers.map( (num) => {
    return num * 10
  })
  .map( (num) => {
    return num + 1
  })
  .filter( (num) => {
    return num >= 32
  })

  console.log(newNums);                 /* Output: [
                                                    11, 21, 31, 41,  51,
                                                    61, 71, 81, 91, 101
                                                   ] */
  
