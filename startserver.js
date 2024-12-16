const http = require("http") // u can star the server 

const myserver=http.createServer((request,response)=>{
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write("welcome Node js tutorial ")
    response.end()
    console.log("server running........")

})
myserver.listen(4563)
console.log("succesfull create")


// const http=require("http")

const myserver2=http.createServer(function(request,response){
    // response.writeHead(200,{"Content-Type":"text/plain"})
    response.write(request.url)// will write the url given in the urlbox
    response.end()
    console.log("server2 running........")


})
myserver2.listen(8524);
console.log("success server2")

