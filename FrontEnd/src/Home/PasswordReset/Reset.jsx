import React, { useState } from "react";
import { useContext } from "react";
import { RecoveryContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function Reset() {
  const navigate = useNavigate();
  const { setEmail, setPage, email, setOTP } = useContext(RecoveryContext);
  const [changePassword, setchangePassword] = useState({
    patientID: "",
    patientPassword: "",
    patientNewPassword: "",
    patientConfirmPassword: "",
  });
  var handleChange = (args) => {
    var copyofUser = { ...changePassword };
    copyofUser[args.target.name] = args.target.value;
    setchangePassword(copyofUser);
  };
  const lengthcheck = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
  );

  const url = `http://localhost:8080/api/v1/patient/updatePassword2/${email}`;

  var changePasswordFunction = () => {
    if (
      changePassword.patientNewPassword === "" ||
      changePassword.patientConfirmPassword === ""
    ) {
      toast.warning("All Fields Are Mandatory");
    } else if (!lengthcheck.test(changePassword.patientNewPassword)) {
      toast.warning("Password Invalid");
    } else if (
      changePassword.patientConfirmPassword !==
      changePassword.patientNewPassword
    ) {
      toast.warning("Password Mismatch");
    } else {
      console.log(changePassword);
      axios
        .put(url, changePassword)
        .then((res) => {
          console.log(res.data);
          toast.success("Password Successfully Changed");
          reset();
          navigate("/");
        })
        .catch((error) => {
          toast.error(error.response.data);
          console.log(error);
        });
    }
  };

  var reset = () => {
    setchangePassword({
      patientID: "",
      patientPassword: "",
      patientNewPassword: "",
      patientConfirmPassword: "",
    });
  };
  return (
    <div>
      <section className="main-container">
        <div id="logincontainer">
          <div id="loginbody1">
            <div id="loginheader">
              <h1 id="logintext">Change Password</h1>
            </div>
            <form>
              <div>
                <label htmlFor="password">New Password</label>
                <input
                className="m-3"
                  type="password"
                  name="patientNewPassword"
                  id="patientNewPassword"
                  required=""
                  value={changePassword.patientNewPassword}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <label htmlFor="confirm-password">Confirm password</label>
                <input
                className="m-3"
                  type="password"
                  name="patientConfirmPassword"
                  id="patientConfirmPassword"
                  required=""
                  value={changePassword.patientConfirmPassword}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <div>
                  <input
                    id="newsletter"
                    aria-describedby="newsletter"
                    type="checkbox"
                    required=""
                  ></input>
                </div>
                <div>
                  <label htmlFor="newsletter">
                    I accept the <a href="#">Terms and Conditions</a>
                  </label>
                </div>
              </div>
            </form>
            <button
              className="button-30"
              onClick={() => changePasswordFunction()}
            >
              Reset passwod
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
