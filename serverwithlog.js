const http =require("http");
const fs=require("fs");

const myServer=http.createServer((request,response)=>{
    const log=`${Date.now()}: ${request.url}:  New request created\n`;
    fs.appendFile("log.txt",log,(err)=>{
        if(err){
            response.writeHead(500, { "Content-Type": "text/plain" });
            console.log("Error occured",err);
        }
        else{
        //     console.log(request) // information about the request
        // response.writeHead(200, { "Content-Type": "text/plain" });
        // response.end("hello from the Server"); 
        switch(request.url){
            case "/":
                response.end("home page");
                break;
            case "/about":
                response.end("hello keerthan")
                break;
            default:
                response.end("error ocured 404");
        }
        }
    })

})
myServer.listen(7415,()=>{
    console.log("server started")
})