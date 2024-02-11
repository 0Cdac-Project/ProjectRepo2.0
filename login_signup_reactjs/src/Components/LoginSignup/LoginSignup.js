import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './LoginSignup.css'

import user_icon from '../../Assets/person.png'
import email_icon from '../../Assets/email.png'
import password_icon from '../../Assets/password.png'

function LoginSignup() {

    // const [patientEmail, setPatientEmail] = useState("");
    const [action, setAction] = useState("Login");
    const [errormsg, setErrorMsg] = useState("");
    const [userInfo, setUserInfo] = useState({patient_username: "", patient_first_name: "", patient_last_name: "", patient_dob: "", patient_password: "", patient_email: "", loginType: "Patient", staffType: ""});
    const serverUrl = "http://127.0.0.1:9800";

    // const GetData = () => {
    //     axios.get(serverUrl + "/signup").then((result) => {
    //         setPatientEmail(response.data);
    //     });
    // }

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch(serverUrl + "/signup"); 
    //         const result = await response.json();
    //         if(result === "New User") {
    //             setErrorMsg("")
    //         }
    //         else {
    //             setPatientEmail(result);
    //         }
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     };
    
    //     fetchData();
    //   }, []);
     
    const InputChange = (event)=>{
        var copyofUser = {...userInfo};
        copyofUser[event.target.name] = event.target.value;
        setUserInfo(copyofUser);
    };

    const LoginSubmit = (event)=>{
        if(action === "Login"){
            axios.post(serverUrl + "/login", userInfo).then((response)=>{
                switch (response.data.message) {
                    case "success":
                        setErrorMsg("User Logged In");
                        break;
                       
                    case "Incorrect Password":
                        setErrorMsg("Incorrect Password")
                        break;
                        
                    case "User Does not exist":
                        setErrorMsg("User Does Not exist")
                        break;
                
                    default:
                        break;
                }
            })
        }
        else {
            setAction("Login");
        }
    }

    const SignUpSubmit = (event)=>{
        if(action === "Sign Up"){
            axios.post(serverUrl + "/signup", userInfo).then((response) => {
                if(response.data.affectedRows !== undefined && response.data.affectedRows > 0) {
                    setAction("Login");
                    ResetState();
                }
            })
        }
        else {
            setAction("Sign Up");
            ResetState();
        }
    }

    const ResetState = () => {
        setUserInfo({patient_username: "", patient_first_name: "", patient_last_name: "", patient_dob: "", patient_password: "", patient_email: "", loginType: "Patient", staffType: ""})
    }

    return ( 
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
            {action === "Sign Up"? <div></div>:<div className='radioBtn'>
                    <label>
                        <input
                        type="radio"
                        value="Patient"
                        name="loginType"
                        checked={userInfo.loginType === "Patient"}
                        onChange={InputChange}
                        />
                        Patient
                    </label>
                    <br />
                    <label>
                        <input
                        type="radio"
                        value="Doctor"
                        name="loginType"
                        checked={userInfo.loginType === "Doctor"}
                        onChange={InputChange}
                        />
                        Doctor
                    </label>
                    <br />
                    <label>
                        <input
                        type="radio"
                        value="Staff"
                        name="loginType"
                        checked={userInfo.loginType === "Staff"}
                        onChange={InputChange}
                        />
                        Staff
                    </label>
                </div>}

                {userInfo.loginType === "Staff" && action === "Login" ? <div className='staff-type'>
                    <label htmlFor="roles">Select a role :</label>
                    <select id="roles" name="staffType" value={userInfo.staffType} onChange={InputChange}>
                        <option value="">Select...</option>
                        <option value="Admin">Admin</option>
                        <option value="Accountant">Accountant</option>
                        <option value="Reception">Reception</option>
                    </select>
                    </div>: <div></div>}
                
                {errormsg === "" ? <div></div> : <div>{errormsg}</div>}

                {action === "Login"? <div></div>:
                <div>
                <div className='input'>
                    <img src={user_icon} alt=''/>
                    <input type='text' placeholder='User Name' name='patient_username' value={userInfo.patient_username} onChange={InputChange}/>
                </div>
                <br></br>
                <div className='input'>
                    <img src={user_icon} alt=''/>
                    <input type='text' placeholder='First Name' name='patient_first_name' value={userInfo.patient_first_name} onChange={InputChange}/>
                </div>
                <br></br>
                <div className='input'>
                    <img src={user_icon} alt=''/>
                    <input type='text' placeholder='Last Name' name='patient_last_name' value={userInfo.patient_last_name} onChange={InputChange}/>
                </div>
                <br></br>
                <div className='input'>
                    <img src={user_icon} alt=''/>
                    <input type='Date' placeholder='Date of Birth' name='patient_dob' value={userInfo.patient_dob} onChange={InputChange}/>
                </div>
                </div>
                }
                
                <div className='input'>
                    <img src={email_icon} alt=''/>
                    <input type='email' placeholder='Email Id' name='patient_email' value={userInfo.patient_email} onChange={InputChange}/>
                </div>
                <div className='input'>
                    <img src={password_icon} alt=''/>
                    <input type='password' placeholder='Password' name='patient_password' value={userInfo.patient_password} onChange={InputChange}/>
                </div>
            </div>
            {action === "Sign Up" ? <div></div>:<div className='forgot-password'> Forgot Password ? <span>Click Here</span></div>}
            <div className='submit-container'>
                {userInfo.loginType === "Doctor" || userInfo.loginType === "Staff" ? <div className={action === "Sign Up"? "submit gray": "submit"} name="Login" onClick={LoginSubmit}>Login</div>:  <div className='btn-cont'><div className={action === "Login"?"submit gray":"submit"} name="Sign Up" onClick={SignUpSubmit}>Sign up</div>
                    <div className={action === "Sign Up"? "submit gray": "submit"} name="Login" onClick={LoginSubmit}>Login</div> </div>}  
            </div>
        </div>

     );
}
export default LoginSignup;