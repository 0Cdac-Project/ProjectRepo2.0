const express = require('express');
const config = require('config');
const jwt = require('jsonwebtoken');
const app = express.Router();
const mysql = require('mysql2');

const key  = config.get("jwtkey");

app.post("/", (request, response)=>
{
    var username = request.body.username;
    var password = request.body.password;

    const connectionDetails = {
        host : config.get("host"),
        database : config.get("database"),
        user : config.get("user"),
        password : config.get("password")
    }
    const connection = mysql.createConnection(connectionDetails);

    var statement = `select * from patients where username = "${username}" and password = "${password}"`;

    connection.query(statement, (error, result) =>{
        if(error == null){
            console.log(result);
            if(result.length == 0){
                var responseMessage = {
                    message : "Invalid User Credentials"
                }
                response.write(JSON.stringify(responseMessage));
                response.end();
            }
            else{
                var d = new Date().getDate();
                var payload = {
                    "username" : username,
                    "login_date":d
                }
                var token = jwt.sign(payload, key);
                var responseMessage = {
                    logintoken : token,
                    message : "success"
                }
                response.write(JSON.stringify(responseMessage));
                response.end();
            }
        }else{
            response.write(JSON.stringify(error));
            response.end();
        }
    });
})

module.exports = app;