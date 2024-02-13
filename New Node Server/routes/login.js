const express = require("express");
const config = require("config");
const jwt = require("jsonwebtoken");
const app = express.Router();
const mysql = require("mysql2");

const key = config.get("jwtkey");

app.post("/", (request, response) => {
  var username = request.body.username;
  var password1 = request.body.password;
  var userType = request.body.LoginType;
  var staffType = request.body.managementType;
  
  const connectionDetails = {
    host: config.get("host"),
    database: config.get("database"),
    user: config.get("user"),
    password: config.get("password"),
  };
  const connection = mysql.createConnection(connectionDetails);

  var urlFun = () => {
    if (userType == "management")
      var statement = `select management_password,management_category from management where management_username = '${username}' or management_email = '${username}'`;
    else if (userType == "doctors")
      var statement = `select doctor_password from doctors where doctor_username = "${username}" or doctor_email = "${username}"`;
    else if (userType == "patients")
      var statement = `select patient_password from patients where patient_username = "${username}" or patient_email  = "${username}"`;
    return statement;
  };

  var checkPassword = (result) => {
    if (userType == "management") {
      if (result.management_password == password1 && result.management_category==staffType) return true;
      return false;
    } else if (userType == "doctors") {
      if (result.doctor_password == password1) return true;
      return false;
    } else if (userType == "patients") {
      if (result.patient_password == password1) return true;
      return false;
    }
  };
  connection.query(urlFun(), (error, result) => {
    if (error == null) {
      if (result.length == 0) {
        var responseMessage = {
          message: "User Does not exist",
        };
        response.write(JSON.stringify(responseMessage));
        response.end();
      } else if (!checkPassword(result[0])) {
        var responseMessage = {
          message: "Incorrect Password",
        };
        response.write(JSON.stringify(responseMessage));
        response.end();
      } else {
        var d = new Date().getTime();
        var payload = {
          username: username,
          category:userType.toLowerCase(),
          type:(staffType!=null)?staffType.toLowerCase():null,
          login_date: d,
        };
        var token = jwt.sign(payload, key);
        var responseMessage = {
          logintoken: token,
          message: "success",
        };
        response.write(JSON.stringify(responseMessage));
        response.end();
      }
    } else {
      response.write(JSON.stringify(error));
      response.end();
    }
  });
});

module.exports = app;
