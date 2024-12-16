const http=require("http") 
const fs=require("fs")

http.createServer((request,response)=>{
 fs.writeFile("beginner.txt" ,"hello raju ... welcome",(err,data)=>{ // we can append the data into the file using fs.append,write file using 
    response.write(data);                                            // writeFile("filename","text to be writen",(err,data)=>)
    response.end()                                                   // we can delete the file using unlink fs.unlink
  
 })
 console.log("server stared running")

}).listen(7412)
console.log("server stared")