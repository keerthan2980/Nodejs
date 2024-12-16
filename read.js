const fs=require("fs")

fs.readFile("notes.txt","utf8",(err,data)=>{      //("filename",encoder,funnctiom) utf8 is a encoder which change the the data into the string 
            if (err){                             // without encoder we will get the buffer data and err used to display the errror and data is 
               console.log(err) ;                 // used to display the data 
            }   
            console.log(data);     

})

fs.writeFile("welcome.txt","welcome to the nodejs","utf8",(err)=>{  //(filename,content in the  file ,  )
    if (err){
        console.log(err);
    }
        console.log("welcome to my world");
    
})