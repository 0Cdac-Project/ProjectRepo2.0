import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { RecoveryContext } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const { email, otp, setPage } = useContext(RecoveryContext);
  const [timerCount, setTimer] = React.useState(60);
  const [OTPinput, setOTPinput] = useState([0, 0, 0, 0]);
  const [disable, setDisable] = useState(true);

  function resendOTP() {
    if (disable) return;
    axios
      .post("http://localhost:9999/send_recovery_email", {
        OTP: otp,
        recipient_email: email,
      })
      .then(() => setDisable(true))
      .then(() => alert("A new OTP has succesfully been sent to your email."))
      .then(() => setTimer(60))
      .catch(console.log);
  }

  function verfiyOTP() {
    if (parseInt(OTPinput.join("")) === otp) {
      navigate("/reset");
      return;
    }
    alert(
      "The code you have entered is not correct, try again or re-send the link"
    );
    return;
  }

  React.useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) setDisable(false);
        if (lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  }, [disable]);

  return (
    <div className="main-container">
      <div id="logincontainer">
        <div id="loginbody1">
          <div id="loginheader">
            <p id="logintext">Email Verification</p>
          </div>
          <div>
            <p>We have sent a code to your email {email}</p>
          </div>
          <div id="otp-container">
            <form>
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col-3">
                      <input
                        maxLength="1"
                        type="text"
                        name=""
                        id="otp-input"
                        onChange={(e) =>
                          setOTPinput([
                            e.target.value,
                            OTPinput[1],
                            OTPinput[2],
                            OTPinput[3],
                          ])
                        }
                      ></input>
                    </div>
                  </div>
                  <div className="col-3">
                    <input
                      maxLength="1"
                      type="text"
                      name=""
                      id="otp-input"
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          e.target.value,
                          OTPinput[2],
                          OTPinput[3],
                        ])
                      }
                    ></input>
                  </div>
                  <div className="col-3">
                    <input
                      maxLength="1"
                      type="text"
                      name=""
                      id="otp-input"
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          OTPinput[1],
                          e.target.value,
                          OTPinput[3],
                        ])
                      }
                    ></input>
                  </div>
                  <div className="col-3">
                    <input
                      maxLength="1"
                      type="text"
                      name=""
                      id="otp-input"
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          OTPinput[1],
                          OTPinput[2],
                          e.target.value,
                        ])
                      }
                    ></input>
                  </div>
                </div>

                <div>
                  <div>
                    <button
                      className="button-30 m-2"
                      onClick={() => verfiyOTP()}
                    >
                      Verify Account
                    </button>
                  </div>

                  <div>
                    <p>Didn't recieve code?</p>{" "}
                    <button
                      className="button-30"
                      style={{
                        color: disable ? "gray" : "blue",
                        cursor: disable ? "none" : "pointer",
                        textDecorationLine: disable ? "none" : "underline",
                      }}
                      onClick={() => resendOTP()}
                    >
                      {disable ? `Resend OTP in ${timerCount}s` : "Resend OTP"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
