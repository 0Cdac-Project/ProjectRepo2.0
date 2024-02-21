const express = require('express');
const config = require('config');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');
require("dotenv").config();

const loginApp = require('./routes/login');
const pDashApp = require('./routes/pDashApp');
const nodemailer = require("nodemailer");

const PORT = config.get("PORT");
const key  = config.get("jwtkey");

const connectionDetails = {
    host : config.get("host"),
    database : config.get("database"),
    user : config.get("user"),
    password : config.get("password")
}


const app = express();

app.use(cors());
app.use(express.json());

// app.use((request, response, next)=>{
//     if(!request.url.includes("login"))
//     {
//         console.log(request.headers.authorization);
//         console.log(request.header.authorization);
//         if(request.headers.authorization!==undefined ||
//             request.header.authorization!=null)
//             {
//                 console.log("Authorization header received is " + 
//                             request.headers.authorization);
                

//                 var tokenReceived = request.headers.authorization;

//                 console.log(tokenReceived);

//                 var payloadDecodedFromToken = jwt.verify(tokenReceived, key);

//                 const connection = mysql.createConnection(connectionDetails);    
                
//                 var stmt = `select logged_in_at from userlogs where username = "${payloadDecodedFromToken.username}" and curr_status = "Logged In";`;
//                 console.log(stmt);
//                 connection.query(stmt, (error, result)=>{
//                     if(error == null){
//                         console.log(result[0].logged_in_at);
//                         var date = new Date(Date.parse(result[0].logged_in_at));
//                         var date2 = new Date();
//                         // console.log(date2);
//                         // console.log(date);
//                         // console.log(date.getTime());
//                         // console.log(date2.getTime());
                        
//                         if(date2.getTime()/60000 - date.getTime()/60000 >= 3){

//                             var query1 = `update userlogs set curr_status = "Logged Out" where username = "${payloadDecodedFromToken.username}";`;
//                             connection.query(query1, (error, result)=>{
//                                 if(error == null){
//                                     var responseMessage = {
//                                         message : "User Logged Out"
//                                     }
//                                     console.log("User logged out")
//                                     response.write(JSON.stringify(responseMessage));
//                                     response.end();
//                                 }
//                                 else{
//                                     response.setHeader("Content-type", "application/json");
//                                     response.write(JSON.stringify(error));
//                                     connection.end();
//                                     response.end();
//                                 }
//                             })

//                         }
//                         else{
//                             var responseMessage = {
//                                 message : "User is Still logged in"
//                             }
//                             console.log("User is still Logged in");
//                             response.write("")
//                         }
//                     }
//                 })

//                 var statement = `select password from userlogs where username = "${payloadDecodedFromToken.username}" and curr_status = "Logged In";`;
                
//                 console.log(statement);

//                 connection.query(statement, (error, result)=>{
//                     if(error == null){
//                         console.log(result)
//                         if(result.length == 0){
//                             var responseMessage = {
//                                 message : "Session Logged Out"
//                             }
//                             response.write(JSON.stringify(responseMessage));
//                             response.end();
//                         }else{
//                             next();
//                         }
//                     }
//                     else{
//                         response.setHeader("Content-type", "application/json");
//                         response.write(JSON.stringify(error));
//                         connection.end();
//                         response.end();
//                     }
//                 })
//             }
//         else
//         {
//             var responseMessage = {
//                                     message: "Need Token!"
//                                   }

//             response.write(JSON.stringify(responseMessage));
//             response.end();
//         }
//     }
//     else
//     {
//         next();
//     }
// })

app.use("/loginSignup", loginApp);
app.use("/patientDashBoard", pDashApp);
function sendEmail({ recipient_email, OTP }) {
    console.log(process.env.MY_EMAIL)
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
        Method:'PLAIN'
      },
    });

    const mail_configs = {
      from: process.env.MY_EMAIL,
      to: recipient_email,
      subject: "Apollo Hospital PASSWORD RECOVERY",
      html: `<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - OTP Email Template</title>
  

</head>
<body>
<!-- partial:index.partial.html -->
<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:50px auto;width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Apollo Hospital Welcome - ${recipient_email}</a>
    </div>
    <p style="font-size:1.1em">Hi,</p>
    <p>Thank you for choosing Apollo Hospitals. Use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes</p>
    <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${OTP}</h2>
    <p style="font-size:0.9em;">Regards,<br />Koding 101</p>
    <hr style="border:none;border-top:1px solid #eee" />
    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
      <p>Koding 101 Inc</p>
      <p>1600 Amphitheatre Parkway</p>
      <p>California</p>
    </div>
  </div>
</div>
<!-- partial -->
  
</body>
</html>`,
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occured` });
      }
      return resolve({ message: "Email sent succesfuly" });
    });
  });
}

// app.get("/", (req, res) => {
//   console.log(process.env.MY_EMAIL);
// });

app.post("/send_recovery_email", (req, res) => {
  sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});


app.listen(PORT, ()=>{console.log(`server started listening at ${PORT}`)})