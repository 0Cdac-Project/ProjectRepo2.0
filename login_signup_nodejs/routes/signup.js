const express = require('express');
const mysql = require('mysql2');
const config = require('config');

const app = express.Router();

const connectonDetails = {
    host: config.get("host"),
    database: config.get("database"),
    user: config.get("user"),
    password: config.get("password")
}

const connectionPool = mysql.createPool(connectonDetails);

app.get("/", async (request, response) => {
    try {    
        const patient_email = request.headers.patient_email;
    
        const statementFindByEmail = 'SELECT patient_email FROM patients WHERE patient_email = ?';
    
        console.log(patient_email);
    
        response.setHeader("Content-Type", "application/json");
    
        const result = await query(statementFindByEmail, [patient_email]);
    
        console.log(result);
    
        if(result.length > 0) {
            respondWithMessage(response, result);
        }
        else {
            respondWithMessage(response, "New user");
        }
    }
    catch(error) {
        respondWithError(response, error);
    }
    finally {
        connection.end();
    }

    function respondWithMessage(response, message) {
        const responseMessage = {
            message : message
        };
        response.json(responseMessage);
    }

    function respondWithError(response, error) {
        const errorMessage = {
            error : error.message
        };
        response.status(500).json(errorMessage);
    }

    function query(statement, params) {
        return new Promise((resolve, reject) => {
            connectionPool.query(statement, params, (error, result) => {
                if(error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        });
    }

    // connection.query(statementFindByEmail, (error, result) => {
    //     console.log(result);
    //     const firstResult = result[0];
    //     const emailValue = firstResult.patient_email;
    
    //     // console.log('Email Value:', emailValue);
    //     if(emailValue === patient_email) {
    //         var responseMessage ={
    //             message: "User already exists"
    //         }

    //         response.write(JSON.stringify(responseMessage));
    //         connection.end();
    //         response.end();
    //     }
    //     else if(emailValue != patient_email) {
    //         var responseMessage ={
    //             message: "New User"
    //         }

    //         response.write(JSON.stringify(responseMessage));
    //         connection.end();
    //         response.end();
    //     }
    //     else {
    //         response.write(JSON.stringify(error));
    //         connection.end();
    //         response.end();
    //     }
    // });
});

app.post("/", (request, response) => {
    const data = request.body;
    console.log(data);

    const {
        patient_username,
        patient_first_name,
        patient_last_name,
        patient_password,
        patient_email,
        patient_dob
    } = data;

    const dateObject = new Date(patient_dob);
    const formattedDate = dateObject.toISOString().slice(0, 19).replace('T', ' ');

    const statementInsert = `INSERT INTO patients 
        (patient_username, patient_first_name, patient_last_name, patient_password, patient_email, patient_dob) 
        VALUES (?, ?, ?, ?, ?, ?)`;

    const values = [
        patient_username,
        patient_first_name,
        patient_last_name,
        patient_password,
        patient_email,
        formattedDate
    ];

    response.setHeader("Content-Type", "application/json");

    connectionPool.query(statementInsert, values, (error, result) => {
        if (error) {
            console.error("Error during insertion:", error);
            response.status(500).json({ error: "Internal Server Error" });
        } else {
            response.json(result);
        }
    });

    // var connection = mysql.createConnection(connectonDetails);
    // var data = request.body;
    // console.log(data);
    // var patient_username = request.body.patient_username;
    // var patient_first_name = request.body.patient_first_name;
    // var patient_last_name = request.body.patient_last_name;
    // var patient_password = request.body.patient_password;
    // var patient_email = request.body.patient_email;
    // var patient_dob = request.body.patient_dob;

    // const dateObject = new Date(patient_dob);

    // const formattedDate = dateObject.toISOString().slice(0, 19).replace('T', ' ');

    // var statementInsert = `INSERT INTO patients (patient_username, patient_first_name, patient_last_name, patient_password, patient_email, patient_dob) VALUES ('${patient_username}', '${patient_first_name}', '${patient_last_name}', '${patient_password}', '${patient_email}', '${formattedDate}')`;

    // response.setHeader("Content-Type", "application/json");
    // connection.query(statementInsert, (error, result) => {
    //     if(error == null) { 
    //         response.write(JSON.stringify(result));
    //         connection.end();
    //         response.end();
    //     }
    //     else {
    //         response.write(JSON.stringify(error));
    //         connection.end();
    //         response.end();
    //     }
    // });
});

module.exports = app;