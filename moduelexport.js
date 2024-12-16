// const maths=require("./modules");  u can use like this 
 const {add,sub}=require("./modules") // destructhing
//  console.log("the result is",maths(2,5)); // if one maths(arguments) 
//console.log("the result is",maths.sub(2,5));// maths.functionnmae
console.log("the result is",add(2,5)); // destructhing



// here the function is created in other file ie (moduel.js) and exported 
// in this way we have create a moduel in nodejs
// called in this file 