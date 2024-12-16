const fs=require("fs")

fs.rename("welcome.txt","welcomeee.txt",(err)=>{  
    if (err){
        console.log(err);
    }
    else{
        console.log("modified");
    }
    
})