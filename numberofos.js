const fs=require("fs");


console.log(1);
// blocking syn  after completing the task it will allow the user to go to other task
// const result=fs.readFileSync("beginner.txt","utf-8")
// console.log(result);  

//non blocking sync no need of blocking
fs.readFile("beginner.txt","utf-8",(error,result)=>{
    console.log(result)
})

console.log(2)

// const os= require("os");
// console.log(os.cpus().length)