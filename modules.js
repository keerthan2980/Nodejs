// exporting the modules 
function add(a,b){
    return a+b;    
}
function sub(a,b){
    return a-b
}
// console.log(add(2,3))
// module.exports=add; if there is only one function

// if there is multipuel function 

module.exports={
    add,
    sub
    // addfun:add,
    // subfun:sub,
    //we can write the names
}