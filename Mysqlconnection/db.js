// connection to the data base
const mysql =require("mysql2");

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mysqlusers",
    port:3306
});

db.connect((err)=>{
    if(err){
        console.log("failed to connect"+err.message)
    }
    else{
        console.log("connected to mysql");
    }

});

module.exports=db;