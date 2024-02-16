const express = require('express');
const config = require('config');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');

const PORT = config.get("PORT");
const key  = config.get("jwtkey");

const connectionDetails = {
    host : config.get("host"),
    database : config.get("database"),
    user : config.get("user"),
    password : config.get("password")
}

const connectionPool = mysql.createPool(connectionDetails);

const app = express();

app.use(cors());
app.use(express.json());

app.post("/", (request, response) => {
    const data = request.body;
    console.log(data);

    const {
        patient_username,
        patient_first_name,
        patient_last_name,
        patient_gender,
        patient_password,
        patient_email,
        patient_dob,
        patient_mob
    } = data;

    // const dateObject = new Date(patient_dob);
    // const formattedDate = dateObject.toISOString().slice(0, 19).replace('T', ' ');

    const statementInsert = `INSERT INTO patients 
        (patient_username, patient_first_name, patient_last_name, patient_password, patient_email, patient_dob, patient_mobile, patient_gender) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
        patient_username,
        patient_first_name,
        patient_last_name,
        patient_password,
        patient_email,
        patient_dob,
        patient_mob,
        patient_gender
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
}
);

module.exports = app;