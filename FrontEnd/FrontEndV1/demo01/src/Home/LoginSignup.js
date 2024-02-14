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

  const inputChange = (args) => {
    var copyofUser = { ...userInfo };
    copyofUser[args.target.name] = args.target.value;
    setUserInfo(copyofUser);
  };

  const Submit = (event) => {
    if (userInfo.LoginType.length === 0) {
      toast.warning("Select Type Of User");
    } else if (userInfo.username.length === 0) {
      toast.warning("Enter User Name or Email");
    } else if (userInfo.password.length === 0) {
      toast.warning("Enter Password");
    } else if (event.target.getAttribute("name") === "Sign Up") {
      if (action === "Sign Up") {
        axios
          .post("http://127.0.0.1:9999/signup", userInfo)
          .then((reply) => {});
      } else {
        setAction("Sign Up");
      }
    } else if (event.target.getAttribute("name") === "Login") {
      if (action === "Login") {
        console.log(userInfo.LoginType)
        axios.post("http://localhost:9999/login", userInfo).then((reply) => {
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
              setErrorMsg("Incorrect Password");
              toast.error("Incorrect Password");
              break;

            case "User Does not exist":
              setErrorMsg("User Does Not exist");
              toast.error("User Does Not exist");
              break;

            default:
              break;
          }
        });
      } else {
        setAction("Login");
      }
    }
  };

  return (
    <div
      id="loginbody1"
      style={{ backgroundImage: "url(http://localhost:3000//images/back.jpg)" }}
    >
      <div className="container" id="logincontainer">
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
            <div className="input" id="inputlogin">
              <img src={user_icon} alt="" />
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={userInfo.name}
                onChange={inputChange}
              />
            </div>
          )}

          <div className="input" id="inputlogin">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Email Id"
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
