import React, { useState } from "react";
import axios from "axios";
import "./LoginSignup.css";

import user_icon from "./Assets/person.png";
import email_icon from "./Assets/email.png";
import password_icon from "./Assets/password.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LoginSignup() {
  const navigate = useNavigate();
  const [action, setAction] = useState("Login");
  const [errormsg, setErrorMsg] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    username: "",
    password: "",
    LoginType: "",
    managementType: "",
  });
  const [userInfoSignup, setUserInfoSignup] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputChange = (args) => {
    var copyofUser = { ...userInfo };
    copyofUser[args.target.name] = args.target.value;
    setUserInfo(copyofUser);
  };
  const inputChangeSignup = (args) => {
    var copyofUser = { ...userInfoSignup };
    copyofUser[args.target.name] = args.target.value;
    setUserInfoSignup(copyofUser);
  };
  const emailPattern = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  const lengthcheck = new RegExp(/^.{8,20}$/);
  const Submit = (event) => {
    if (event.target.getAttribute("name") === "Sign Up") {
      if (action === "Sign Up") {
        if (
          userInfoSignup.firstName.length === 0 ||
          userInfoSignup.lastName.length === 0 ||
          userInfoSignup.email.length === 0 ||
          userInfoSignup.email.length === 0 ||
          userInfoSignup.password.length === 0 ||
          userInfoSignup.confirmPassword.length === 0
        ) {
          toast.warning("All Fields Are Mandatory");
        } else if (!lengthcheck.test(userInfoSignup.username)) {
          toast.warning("Username Should be greater than 8 and less than 20");
        } else if (!emailPattern.test(userInfoSignup.email)) {
          toast.warning("Enter Valid Email");
        } else if (!lengthcheck.test(userInfoSignup.password)) {
          toast.warning("Password Should be greater than 8 and less than 20");
        } else if (userInfoSignup.password !== userInfoSignup.confirmPassword) {
          toast.warning("Password Mismatch");
        } else {
          axios
            .post("http://127.0.0.1:9999/loginSignup/new", userInfoSignup)
            .then((reply) => {
              toast.success("User Created Successfully");
            })
            .catch((err) => {
              var x = JSON.parse(err.response.request.response);
              toast.error(x.error+" "+x.sqlMessage.substring(0,16));
              console.log(err);
            });
        }
      } else {
        setAction("Sign Up");
      }
    } else if (event.target.getAttribute("name") === "Login") {
      if (action === "Login") {
        if (userInfo.LoginType.length === 0) {
          toast.warning("Select Type Of User");
        } else if (userInfo.username.length === 0) {
          toast.warning("Enter User Name or Email");
        } else if (userInfo.password.length === 0) {
          toast.warning("Enter Password");
        } else {
          axios
            .post("http://127.0.0.1:9999/loginSignup", userInfo)
            .then((reply) => {
              console.log(reply.data);
              switch (reply.data.message) {
                case "success":
                  setErrorMsg("User Logged In");
                  toast.success("Successfully Logged In");
                  window.sessionStorage.setItem("token", reply.data.logintoken);
                  if (userInfo.LoginType === "patients") navigate("/patient");
                  if (userInfo.LoginType === "doctors") navigate("/doctor");
                  if (userInfo.LoginType === "management") {
                    if (userInfo.managementType === "Admin") navigate("/admin");
                    else if (userInfo.managementType === "Accountant")
                      navigate("/accountant");
                    else if (userInfo.managementType === "Receptionist")
                      navigate("/receptionist");
                  }
                  break;

                case "Incorrect Password":
                  toast.error("Incorrect Password");
                  break;

                case "User Does not exist":
                  toast.error("User Does Not exist");
                  break;

                default:
                  break;
              }
            });
        }
      } else {
        setAction("Login");
      }
    }
  };

  return (
    <div
      id="loginbody1"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg)",
      }}
    >
      <div className="container">
        <div className="header" id="loginheader">
          <div className="text" id="logintext">
            {action}
          </div>
          <div className="underline" id="underline"></div>
        </div>
        <div className="inputs" id="logininputs">
          {action === "Sign Up" ? (
            <div></div>
          ) : (
            <div className="radioBtn" id="radioBtn1">
              <label>
                <input
                  type="radio"
                  value="patients"
                  name="LoginType"
                  checked={userInfo.LoginType === "patients"}
                  onChange={inputChange}
                />{" "}
                Patient
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  value="doctors"
                  name="LoginType"
                  checked={userInfo.LoginType === "doctors"}
                  onChange={inputChange}
                />{" "}
                Doctor
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  value="management"
                  name="LoginType"
                  checked={userInfo.LoginType === "management"}
                  onChange={inputChange}
                />{" "}
                Management
              </label>
            </div>
          )}

          {userInfo.LoginType === "management" && action === "Login" ? (
            <div className="management-type">
              <label htmlFor="roles">Select a role :</label>
              <select
                id="rolesLogin"
                name="managementType"
                value={userInfo.managementType}
                onChange={inputChange}
              >
                <option value="" disabled defaultValue>
                  Select Management Type
                </option>
                <option value="Admin">Admin</option>
                <option value="Accountant">Accountant</option>
                <option value="Receptionist">Reception</option>
              </select>
            </div>
          ) : (
            <div></div>
          )}

          {errormsg === "" ? <div></div> : <div>{errormsg}</div>}
          {action === "Login" ? (
            <div></div>
          ) : (
            <>
              <div className="input" id="inputlogin">
                <img src={user_icon} alt="" />
                <input
                  type="text"
                  placeholder="Enter FirstName"
                  name="firstName"
                  id="firstName"
                  value={userInfoSignup.firstName}
                  onChange={inputChangeSignup}
                />
              </div>
              <div className="input" id="inputlogin">
                <img src={user_icon} alt="" />
                <input
                  type="text"
                  placeholder="Enter FirstName"
                  name="lastName"
                  id="lastName"
                  value={userInfoSignup.lastName}
                  onChange={inputChangeSignup}
                />
              </div>
              <div className="input" id="inputlogin">
                <img src={user_icon} alt="" />
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  id="username"
                  value={userInfoSignup.username}
                  onChange={inputChangeSignup}
                />
              </div>
              <div className="input" id="inputlogin">
                <img src={email_icon} alt="" />
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={userInfoSignup.email}
                  onChange={inputChangeSignup}
                />
              </div>
              <div className="input" id="inputlogin">
                <img src={password_icon} alt="" />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={userInfoSignup.password}
                  onChange={inputChangeSignup}
                />
              </div>
              <div className="input" id="inputlogin">
                <img src={password_icon} alt="" />
                <input
                  type="password"
                  placeholder="Re-Enter Password"
                  name="confirmPassword"
                  value={userInfoSignup.confirmPassword}
                  onChange={inputChangeSignup}
                />
              </div>
            </>
          )}
          {action === "Sign Up" ? (
            <div></div>
          ) : (
            <>
              <div className="input" id="inputlogin">
                <img src={email_icon} alt="" />
                <input
                  type="email"
                  placeholder="Enter Email/Username"
                  name="username"
                  value={userInfo.username}
                  onChange={inputChange}
                />
              </div>
              <div className="input" id="inputlogin">
                <img src={password_icon} alt="" />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={userInfo.password}
                  onChange={inputChange}
                />
              </div>
            </>
          )}
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password" id="forgot-password">
            {" "}
            Forgot Password ? <span>Click Here</span>
          </div>
        )}
        <div className="submit-container" id="submit-container">
          {userInfo.LoginType === "doctors" ||
          userInfo.LoginType === "management" ? (
            <div
              className={action === "Sign Up" ? "submit gray" : "submit"}
              name="Login"
              onClick={Submit}
            >
              Login
            </div>
          ) : (
            <div className="btn-cont" id="btn-contlogin">
              <div
                className={action === "Login" ? "submit gray" : "submit"}
                name="Sign Up"
                onClick={Submit}
              >
                Sign up
              </div>
              <div
                className={action === "Sign Up" ? "submit gray" : "submit"}
                name="Login"
                onClick={Submit}
              >
                Login
              </div>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default LoginSignup;
