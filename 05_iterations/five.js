const coding = ["js", "py", "java", "cpp", "ruby"]

/* coding.forEach(function(item) {
  console.log(item);      js
                          py
                         java
                         cpp
                         ruby 
}) */


     // coding.forEach((item) => {
     //   console.log(item);
     // })
     
    // function printMe(item) {
    //  console.log(item);
    // }

   //  coding.forEach(printMe)

  // coding.forEach((item,index,arr) => {
  //  console.log(item,index,arr);
  // })

  const myCoding = [
    {
      languageName: "javaScript",
      languageFileName: "js"
    },
    {
      languageName: "java",
      languageFileName: "java"
    },
    {
      languageName: "Python",
      languageFileName: "py"
    },
  ]

  myCoding.forEach((item) => {
    console.log(item.languageFileName);
  })

  /* Output : js
             java
             py */