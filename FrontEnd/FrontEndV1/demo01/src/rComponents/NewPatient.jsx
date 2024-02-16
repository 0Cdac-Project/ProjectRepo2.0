import React, { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function NewPatient() {

    const [newPatient, setnewPatient] = useState({
      patient_username: "",  
      patient_first_name: "",
        patient_last_name: "",
        patient_gender:"",
        patient_password: "",
        patient_email: "",
        patient_dob:"",
        patient_mob:0
      });

      const inputChange = (args) => {
        var copyofUser = { ...newPatient };
        copyofUser[args.target.name] = args.target.value;
        copyofUser.patient_username = copyofUser.patient_first_name + " " + copyofUser.patient_last_name + "123";
        copyofUser.patient_password = copyofUser.patient_first_name + "@12345";
        setnewPatient(copyofUser);
        console.log(copyofUser.patient_dob);
      };

      const patient_emailPattern = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
      const lengthcheck = new RegExp(/^.{8,20}$/);

      const submitPatient = ()=>{
        if (
          newPatient.patient_first_name.length === 0 ||
          newPatient.patient_last_name.length === 0 ||
          newPatient.patient_email.length === 0 ||
          newPatient.patient_email.length === 0 ||
          newPatient.patient_password.length === 0 ||
          newPatient.patient_mob.length === 0 ||
          newPatient.patient_gender.length === 0
        ) {
          toast.warning("All Fields Are Mandatory");
        }else if (!patient_emailPattern.test(newPatient.patient_email)) {
          toast.warning("Enter Valid patient_email");
        }else if(newPatient.patient_mob < 1000000000 || newPatient.patient_mob > 9999999999){
          toast.warning("Enter a Valid Mobile Number");
        }else{
          axios
          .post("http://127.0.0.1:9999/loginSignup/new", newPatient)
            .then((reply) => {
              toast.success(`User with id ${reply.data.insertId} Created Successfully`);
            })
            .catch((err) => {
              var x = JSON.parse(err.response.request.response);
              toast.error(x.error+" "+x.sqlMessage.substring(0,16));
              console.log(err);
            });
        }
      }


    return ( 
    
    <div>
        <div className="page-header">
        <h1> New Patient</h1>
        </div>
        <div className="container">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Fields</th>
                  <th>Values</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Name</td>
                  <td><input type="text" name="patient_first_name" onChange={inputChange}></input></td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td><input type="text" name="patient_last_name" onChange={inputChange}></input></td>
                </tr>
                <tr>
                  <td>Gender </td>
                  <td>
                    <label style={{marginRight : "20px"}}>
                      <input type="radio" name="patient_gender" value="Male" style={{marginRight: "10px"}} onChange={inputChange}/>
                        Male
                    </label>

                    <label>
                      <input type="radio" name="patient_gender" value="Female" style={{marginRight: "10px"}} onChange={inputChange}/>
                      Female
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>patient_email</td>
                  <td><input type="text" name="patient_email" onChange={inputChange}></input></td>
                </tr>
                <tr>
                  <td> Patient Mobile No.</td>
                  <td><input type="number" name="patient_mob" onChange={inputChange}></input></td>
                </tr>
                <tr>
                  <td>Date Of Birth</td>
                  <td><input type="date" name="patient_dob" onChange={inputChange}></input></td>
                </tr>
                <tr>
                  <td colSpan={2} style={{alignContent: "center"}}>
                    <button onClick={submitPatient}>Add Patient</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
    </div>

     );
}

export default NewPatient;