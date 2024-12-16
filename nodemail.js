var nodemailer=require("nodemailer")
// user
var transporter= nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'sidney.runolfsson@ethereal.email',
        pass: 'AFxdr5Gn1aJF6AvUtZ'
    },
    tls: {
        rejectUnauthorized: false // Allow self-signed certificates
    }
});

// to send
var mailOptions = {
    from:"sidney.runolfsson@ethereal.email",
    to:"keerthankumar2980@gmail.com",
    subject:"ntr",
    text:"fan of ntr ",
};
transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log("Error_coocure:",error);
    }
    else{
        console.log("email sent"+info.messageId)
        console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
    }
})