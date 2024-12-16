const url=require("url")
var  address="https://www.youtube.com/watch?v=VrdFuMs0EO0&t=1103s"
var readurl=url.parse(address,true)
console.log(readurl.host)
console.log(readurl.search)
console.log(readurl.pathname)
console.log(readurl.protocol)
console.log(readurl.prot)