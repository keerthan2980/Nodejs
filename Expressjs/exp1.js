const express=require("express");
const app= express();

app.get("/",(request,response)=>{
     return response.send(" hello from the home page");
})

app.get("/about",(request,response)=>{
    return response.send(" hello from about page");
})

app.listen(7412,()=>{
    console.log("server is running ...");
})