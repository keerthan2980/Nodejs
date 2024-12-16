const fs=require("fs")

fs.unlink("dummy.txt",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("deleted ")
    }
})