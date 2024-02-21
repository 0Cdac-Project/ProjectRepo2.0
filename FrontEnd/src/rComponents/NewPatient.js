import React, { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function NewPatient() {

    const [newPatient, setnewPatient] = useState({
      patientID:0,
      patientFirstName: "",
      patientLastName: "",
      patientDob:0,
      patientGender:"",
      patientMobile:0,
      patientEmail: "",
      patientUsername: "", 
      patientPassword: ""
      });

      const inputChange = (args) => {
        var copyofUser = { ...newPatient };
        copyofUser[args.target.name] = args.target.value;
        copyofUser.patientUsername = copyofUser.patientFirstName + " " + copyofUser.patientLastName + "123";
        copyofUser.patientPassword = copyofUser.patientFirstName + "@12345";
        setnewPatient(copyofUser);
        console.log(copyofUser.patientDob);
      };

      const patient_emailPattern = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
      const lengthcheck = new RegExp(/^.{8,20}$/);

      const submitPatient = ()=>{
        if (
          newPatient.patientFirstName.length === 0 ||
          newPatient.patientLastName.length === 0 ||
          newPatient.patientEmail.length === 0 ||
          newPatient.patientPassword.length === 0 ||
          newPatient.patientMobile.length === 0 ||
          newPatient.patientGender.length === 0
        ) {
          toast.warning("All Fields Are Mandatory");
        }else if (!patient_emailPattern.test(newPatient.patientEmail)) {
          toast.warning("Enter Valid patient_email");
        }else if(newPatient.patientMobile < 1000000000 || newPatient.patientMobile > 9999999999){
          toast.warning("Enter a Valid Mobile Number");
        }else if(new Date(newPatient.patientDob).getTime()>new Date().getTime())
        {
          toast.warning("Date of Birth Should Be Past Date");
        }
        else{
          axios
          .post("http://127.0.0.1:8080/api/v1/patient/add", newPatient)
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
                  <td><input type="text" name="patientFirstName" onChange={inputChange}></input></td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td><input type="text" name="patientLastName" onChange={inputChange}></input></td>
                </tr>
                <tr>
                  <td>Gender </td>
                  <td>
                    <label style={{marginRight : "20px"}}>
                      <input type="radio" name="patientGender" value="Male" style={{marginRight: "10px"}} onChange={inputChange}/>
                        Male
                    </label>

                    <label>
                      <input type="radio" name="patientGender" value="Female" style={{marginRight: "10px"}} onChange={inputChange}/>
                      Female
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>patient_email</td>
                  <td><input type="text" name="patientEmail" onChange={inputChange}></input></td>
                </tr>
                <tr>
                  <td> Patient Mobile No.</td>
                  <td><input type="number" name="patientMobile" onChange={inputChange}></input></td>
                </tr>
                <tr>
                  <td>Date Of Birth</td>
                  <td><input type="date" name="patientDob" onChange={inputChange}></input></td>
                </tr>
                <tr>
                  <td colSpan={2} style={{alignContent: "center"}}>
                    <button onClick={submitPatient} className="button-30">Add Patient</button>
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