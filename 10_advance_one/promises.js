const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task is completed");
        resolve();
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise is consumed")
})


// Alternate way of writing the above code
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function () {
    console.log("Async task 2 resolved")
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            username: "akashchauhan",
            email: "ac757@gmail.com",
            job: "devOps engineer",
        })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);

})

// Fourth Promise

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "akashchauhan", gmail: "ac7575@gmail.com", password: "234" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
}).finally( () => console.log("The promise is either resolved or rejected"))


// Promise Five

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({username: "akashchauhan", password: "3774"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response); 
    } catch(error) {
        console.log(error);   
    }
}

consumePromiseFive()


// Introduction to fetch()

async function getAllDetails() {
    try {
        const response = await fetch('https://api.github.com/users/akashchauhan555')
        const data = await response.json()
        console.log(data);  
    } catch(error) {
        console.log(error);
    }
}

getAllDetails()

// Alternate way of doing the above case...

fetch('https://api.github.com/users/akashchauhan555')
.then( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data);  
})
.catch( (error) => console.log(error))