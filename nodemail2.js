var nodemailer=require("nodemailer")

var transporter=nodemailer.createTransporter({
    service:" ",
    auth:{
        user:"",
        password:"",
    }
});

var mailOptions={
    from:"",
    to:"",
    subject:"",
    text:" ",
};
transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log("Error_occured:",erro);
    }
    else{
        console.log("Email Sent"+info.messageId);
    }
})