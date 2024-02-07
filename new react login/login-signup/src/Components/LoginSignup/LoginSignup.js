import React, { useState } from 'react'
import './LoginSignup.css'
import axios from 'axios'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

function LoginSignup() {

    const [action, setAction] = useState("Login");
    const [errormsg, setErrorMsg] = useState("");
    const [LoginType, setLoginType] = useState('');
    const [staffType, setStaffType] = useState('');
    const [userInfo, setUserInfo] = useState({name: "", username: "", password: "", LoginType, staffType});
     
    const handleStaffTypeChange = (event) => {
        setStaffType(event.target.value);
    };


    const handleChange = (event) => {

            setLoginType(event.target.value);
    };

    const inputChange = (args)=>{
        var copyofUser = {...userInfo};
        copyofUser[args.target.name] = args.target.value;
        setUserInfo(copyofUser);
    };

    // const submitData= (args)=>{
    //     if(args.target.name === "Login"){
    //         if(action === "Login"){
    //         axios.post("http://127.0.0.1:9999/login", action).then((reply)=>{})
    //         }
    //         if(action === "Sign Up"){
    //             setAction("Sign Up");
    //         }
    //     }
    //     if(args.target.name === "Sign Up"){
    //         if(action === "Sign Up"){
    //         axios.post("http://127.0.0.1:9999/login", action).then((reply)=>{})
    //         }
    //         if(action === "Login"){
    //             setAction("Login");
    //         }
    //     }
    // }

    const LoginSubmit = (event)=>{
        if(action === "Login"){
            axios.post("http://127.0.0.1:9999/login", userInfo).then((reply)=>{
                switch (reply.data.message) {
                    case "success":
                        setErrorMsg("Success")
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
        }else{
            console.log(action);
            setAction("Login");
            console.log(action);
        }
    }

    const signUpSubmit = (event)=>{
        if(action === "Sign Up"){
            axios.post("http://127.0.0.1:9999/signup", userInfo).then((reply)=>{
            
            })
        }else{
            setAction("Sign Up");
        }
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
                        checked={LoginType === "Patient"}
                        onChange={handleChange}
                        />
                        Patient
                    </label>
                    <br />
                    <label>
                        <input
                        type="radio"
                        value="Doctor"
                        checked={LoginType === "Doctor"}
                        onChange={handleChange}
                        />
                        Doctor
                    </label>
                    <br />
                    <label>
                        <input
                        type="radio"
                        value="Staff"
                        checked={LoginType === "Staff"}
                        onChange={handleChange}
                        />
                        Staff
                    </label>
                </div>}

                {LoginType === "Staff" && action === "Login" ? <div className='staff-type'>
                    <label htmlFor="roles">Select a role :</label>
                    <select id="roles" value={staffType} onChange={handleStaffTypeChange}>
                        <option value="">Select...</option>
                        <option value="Admin">Admin</option>
                        <option value="Accountant">Accountant</option>
                        <option value="Reception">Reception</option>
                    </select>
                    </div>: <div></div>}
                
                {errormsg === "" ? <div></div> : <div>{errormsg}</div>}
                {action === "Login"? <div></div>:<div className='input'>
                    <img src={user_icon} alt=''/>
                    <input type='text' placeholder='Name' name='name' value={userInfo.name} onChange={inputChange}/>
                </div>}
                
                <div className='input'>
                    <img src={email_icon} alt=''/>
                    <input type='email' placeholder='Email Id' name='username' value={userInfo.username} onChange={inputChange}/>
                </div>
                <div className='input'>
                    <img src={password_icon} alt=''/>
                    <input type='password' placeholder='Password' name='password' value={userInfo.password} onChange={inputChange}/>
                </div>
            </div>
            {action === "Sign Up" ? <div></div>:<div className='forgot-password'> Forgot Password ? <span>Click Here</span></div>}
            <div className='submit-container'>
                {LoginType === "Doctor" || LoginType === "Staff" ? <div className={action === "Sign Up"? "submit gray": "submit"} name="Login" onClick={LoginSubmit}>Login</div>: 
                 <div className='btn-cont'><div className={action === "Login"?"submit gray":"submit"} name="Sign Up" onClick={signUpSubmit}>Sign up</div>
                    <div className={action === "Sign Up"? "submit gray": "submit"} name="Login" onClick={LoginSubmit}>Login</div> </div>}  
            </div>
        </div>

     );
}
export default LoginSignup;