// for loop

for(let i = 9; i < 10; i++) {
    const element = i;
   //console.log(i);                  // => 9
}

for(let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for(let j = 1; j <= 10; j++ ) {
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}

let myArray = ['akash', 'alakh', 'nikhil', 'anuj']

//console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);
}  

for(let i = 1; i <= 20; i++) {
    if(i === 5) {
       // console.log(`Detected 5 `);
        break
    }
   // console.log(`Value of i is ${i}`);
}

for(let i = 1; i <= 20; i++) {
    if(i === 5) {
        console.log(`Detected 5 `);
        continue
    }
    console.log(`Value of i is ${i}`);
}