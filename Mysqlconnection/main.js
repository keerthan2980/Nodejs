const express = require("express");
const db= require("./db")
const app=express();
const port=7412 

// app.get("/mysqlusers",(request,response)=>{
//      return response.end(" welcome to mysql users");
// });

// middle ware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// get users //select users
app.get("/mysqlusers",(request,response)=>{
    const query =" select * from nodemysql";
    db.query(query,(err,result)=>{
        if(err){
            return response.status(500).json({staus:"error",message:err.message});
        }
        response.json(result);
    });
    console.log("success full feteched the data");

});

// select from specfic id 

app.get("/mysqlusers/:id",(request,response)=>{
    const {id} =request.params;
    const query="select * from nodemysql where id=?";
    db.query(query,[id],(err,result)=>{
        if (err) {
            return response.status(500).json({ status: "error", message: err.message });
          }
          if (result.length === 0) {
            return response.status(404).json({ status: "error", message: "User not found" });
          }
          response.json(result[0]);
    });
    
})

// post users insert users
app.post("/mysqlusers",(request,response)=>{
    const {id,Name,email,age} =request.body;
    const query="insert into nodemysql (id,Name,email,age) values (?,?,?,?)";
    db.query(query,[id,Name,email,age],(err,result)=>{
        if(err){
            return response.status(500).json({status:"error",message:err.message});
        }
        response.status(200).json({status:"successful",message:"user added",id:result.insertId});
     
    });
    console.log("successful added users"+result.insertId)

})

// delete users 
app.delete("/mysqlusers/:id",(request,response)=>{
    const {id}= request.params;
    const query="delete from nodemysql where id = ?";
    db.query(query,[id],(err,result)=>{
        if(err){
            return response.status(500).json({status:"error",message:err.message});
        }
        if(result.affectedRowa===0){
            return response.status(404).json({status:"error",message:"user not found"});
        }
        response.status(200).json({status:"success",message:`user with  id: ${id} deleted successful`})
    });
    console.log(`User with ID ${id} deleted successfully`)
})

 // put users update the user 

 app.put("/mysqlusers/:id",(request,response)=>{
    const {id} =request.params;
    const {Name,email,age}=request.body // as we are rquesting what to update 
    const query="update nodemysql set Name=?,email=?,age=? where id= ?";

    console.log("Incoming Request Body:", request.body); // Log the incoming body
    console.log("Name:", Name, "Email:", email, "Age:", age);


    db.query(query,[Name,email,age,id],(err,result)=>{
        if(err){
            return response.status(500).json({staus:"error",message:err.message});
        }
        if(result.affectedRows===0){
            return response.status(404).json({status:"error",message:"user not found"});
        }
        response.status(200).json({status:"success",message:`user with ${id} updated successful`})
    })
    console.log("user updated successful")
 })

app.listen(port,()=>{
    console.log(`mysql server is started...${port}`);

})