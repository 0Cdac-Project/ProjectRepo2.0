const express = require('express');
const config = require('config');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');

const loginApp = require('./routes/login');
const pDashApp = require('./routes/pDashApp');

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

app.use((request, response, next)=>{
    if(!request.url.includes("login"))
    {
        console.log(request.headers.authorization);
        console.log(request.header.authorization);
        if(request.headers.authorization!==undefined ||
            request.header.authorization!=null)
            {
                console.log("Authorization header received is " + 
                            request.headers.authorization);
                

                var tokenReceived = request.headers.authorization;

                console.log(tokenReceived);

                var payloadDecodedFromToken = jwt.verify(tokenReceived, key);

                const connection = mysql.createConnection(connectionDetails);    
                
                var stmt = `select logged_in_at from userlogs where username = "${payloadDecodedFromToken.username}" and curr_status = "Logged In";`;
                console.log(stmt);
                connection.query(stmt, (error, result)=>{
                    if(error == null){
                        console.log(result[0].logged_in_at);
                        var date = new Date(Date.parse(result[0].logged_in_at));
                        var date2 = new Date();
                        // console.log(date2);
                        // console.log(date);
                        // console.log(date.getTime());
                        // console.log(date2.getTime());
                        
                        if(date2.getTime()/60000 - date.getTime()/60000 >= 3){

                            var query1 = `update userlogs set curr_status = "Logged Out" where username = "${payloadDecodedFromToken.username}";`;
                            connection.query(query1, (error, result)=>{
                                if(error == null){
                                    var responseMessage = {
                                        message : "User Logged Out"
                                    }
                                    console.log("User logged out")
                                    response.write(JSON.stringify(responseMessage));
                                    response.end();
                                }
                                else{
                                    response.setHeader("Content-type", "application/json");
                                    response.write(JSON.stringify(error));
                                    connection.end();
                                    response.end();
                                }
                            })

                        }
                        else{
                            var responseMessage = {
                                message : "User is Still logged in"
                            }
                            console.log("User is still Logged in");
                            response.write("")
                        }
                    }
                })

                var statement = `select password from userlogs where username = "${payloadDecodedFromToken.username}" and curr_status = "Logged In";`;
                
                console.log(statement);

                connection.query(statement, (error, result)=>{
                    if(error == null){
                        console.log(result)
                        if(result.length == 0){
                            var responseMessage = {
                                message : "Session Logged Out"
                            }
                            response.write(JSON.stringify(responseMessage));
                            response.end();
                        }else{
                            next();
                        }
                    }
                    else{
                        response.setHeader("Content-type", "application/json");
                        response.write(JSON.stringify(error));
                        connection.end();
                        response.end();
                    }
                })
            }
        else
        {
            var responseMessage = {
                                    message: "Need Token!"
                                  }

            response.write(JSON.stringify(responseMessage));
            response.end();
        }
    }
    else
    {
        next();
    }
})

app.use("/login", loginApp);
app.use("/patientDashBoard", pDashApp);

app.listen(PORT, ()=>{console.log(`server started listening at ${PORT}`)})