import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../../Redux/Reducer/userslice";
import { toast } from "react-toastify";
import axios from "axios";

export const EditDetails = ({ readonly }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [currUser, setCurrUser] = useState({
    patientID: user.patientID,
    patientFirstName: user.patientFirstName,
    patientLastName: user.patientLastName,
    patientDob: user.patientDob,
    patientAge: user.patientAge,
    patientGender: user.patientGender,
    patientMobile: user.patientMobile,
    patientEmergencyContact: user.patientEmergencyContact,
    patientEmail: user.patientEmail,
    patientNationality: user.patientNationality,
    patientAddress: user.patientAddress,
    patientGovtID: user.patientGovtID,
    patientPassport: user.patientPassport,
    patientMaritalStatus: user.patientMaritalStatus,
    patientOccupation: user.patientOccupation,
    patientMedicalCondition: user.patientMedicalCondition,
    patientMedicationHistory: user.patientMedicationHistory,
    patientMedicalConsultant: user.patientMedicalConsultant,
    patientUsername: user.patientUsername,
    patientPassword: user.patientPassword,
    patientWeight: user.patientWeight,
    patientHeight: user.patientHeight,
    patientBloodgroup: user.patientBloodgroup,
    patientCategory: user.patientCategory,
    extraCol1: user.extraCol1,
    patientImage: user.patientImage,
  });

  var handleChange = (args) => {
    var copyofUser = { ...currUser };
    copyofUser[args.target.name] = args.target.value;
    setCurrUser(copyofUser);
  };

  const lengthcheck = new RegExp(/^.{8,20}$/);
  const emailPattern = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const phonePattern = new RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  );
  const url = `http://localhost:8080/api/v1/patient/updateDetails/${currUser.patientID}`;
  var save = () => {
    if (
      currUser.patientUsername === "" ||
      currUser.patientFirstName === "" ||
      currUser.patientLastName === "" ||
      currUser.patientEmail === "" ||
      currUser.patientDob === "" ||
      currUser.patientGender === "" ||
      currUser.patientMobile === "" ||
      currUser.patientEmail === "" ||
      currUser.patientAddress === "" ||
      currUser.patientGovtID === "" 
    ) {
      toast.warning("All Fields Are Mandatory");
    }  else if (!emailPattern.test(currUser.patientEmail)) {
      toast.warning("Enter Valid Email");
    } else if (!phonePattern.test(currUser.patientMobile)) {
      toast.warning("Enter valid phone number");
    } else if (!lengthcheck.test(currUser.patientGovtID)) {
      toast.warning("Enter Valid Government Id");
    } else if (currUser.patientPassport.length!=0  && !lengthcheck.test(currUser.patientPassport)) {
      toast.warning("Enter Valid Passport");
    } else if (currUser.patientGovtID === currUser.patientPassport) {
      toast.warning("Passport id should not be same as government Id");
    } else {
      console.log(currUser);
      axios
        .put(url, currUser)
        .then((res) => {
          dispatch(setUser(res.data));
          toast.success("Details Updated Successfully");
        })
        .catch((error) => {
          toast.error(error.response.data);
          console.log(error);
        });
    }
  };

  var handleImage = () => {};
  return (
    <>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-sm-5">
                <h6 className="mb-0">Username</h6>
              </div>
              <div className="col-sm-7" info>
                <input
                  readOnly
                  type="text"
                  className="form-control"
                  value={currUser.patientUsername}
                  name="patientUsername"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-5">
                <h6 className="mb-0">First Name</h6>
              </div>
              <div className="col-sm-7" info>
                <input
                  readOnly={readonly}
                  type="text"
                  className="form-control"
                  value={currUser.patientFirstName}
                  name="patientFirstName"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-5">
                <h6 className="mb-0">Last Name</h6>
              </div>
              <div className="col-sm-7" info>
                <input
                  readOnly={readonly}
                  type="text"
                  className="form-control"
                  value={currUser.patientLastName}
                  name="patientLastName"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-5">
                <h6 className="mb-0">Date of birth</h6>
              </div>
              <div className="col-sm-7 text-secondary">
                <input
                  readOnly={readonly}
                  type="date"
                  className="form-control"
                  value={currUser.patientDob}
                  name="patientDob"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-5">
                <h6 className="mb-0">Gender</h6>
              </div>
              <div className="col-sm-7 text-secondary">
                <select
                  className="form-select"
                  id="patientGender"
                  aria-label="Floating label select example"
                  name="patientGender"
                  value={currUser.patientGender}
                  onChange={handleChange}
                >
                  <option value="" disabled defaultValue>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-5">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-7 text-secondary">
                <input
                  readOnly={readonly}
                  type="email"
                  className="form-control"
                  value={currUser.patientEmail}
                  name="patientEmail"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-5">
                <h6 className="mb-0">Mobile</h6>
              </div>
              <div className="col-sm-7 text-secondary">
                <input
                  readOnly={readonly}
                  type="text"
                  className="form-control"
                  value={currUser.patientMobile}
                  name="patientMobile"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-5">
                <h6 className="mb-0">Emergency Contact</h6>
              </div>
              <div className="col-sm-7 text-secondary">
                <input
                  readOnly={readonly}
                  type="text"
                  className="form-control"
                  value={currUser.patientEmergencyContact}
                  name="patientEmergencyContact"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-5">
                <h6 className="mb-0">Address</h6>
              </div>
              <div className="col-sm-7 text-secondary">
                <textarea
                  readOnly={readonly}
                  className="form-control"
                  placeholder="Address here"
                  id="patientAddress"
                  style={{ height: "100px" }}
                  name="patientAddress"
                  value={currUser.patientAddress}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-sm-5">
                <h6 className="mb-0">Government Id Proof</h6>
              </div>
              <div className="col-sm-7 text-secondary">
                <input
                  readOnly={readonly}
                  type="text"
                  className="form-control"
                  value={currUser.patientGovtID}
                  name="patientGovtID"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-5">
                <h6 className="mb-0">Passport</h6>
              </div>
              <div className="col-sm-7 text-secondary">
                <input
                  readOnly={readonly}
                  type="text"
                  className="form-control"
                  value={currUser.patientPassport}
                  name="patientPassport"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-5">
                <h6 className="mb-0">Marital Status</h6>
              </div>
              <div className="col-sm-7 text-secondary">
                <select
                  className="form-select"
                  id="patientMaritalStatus"
                  aria-label="Floating label select example"
                  name="patientMaritalStatus"
                  value={currUser.patientMaritalStatus}
                  onChange={handleChange}
                >
                  <option value="" disabled defaultValue>
                    Select Marrital Status
                  </option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-5">
                <h6 className="mb-0">Occupation</h6>
              </div>
              <div className="col-sm-7 text-secondary">
                <input
                  readOnly={readonly}
                  type="text"
                  className="form-control"
                  value={currUser.patientOccupation}
                  name="patientOccupation"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-5">
                <h6 className="mb-0">Medication History</h6>
              </div>
              <div className="col-sm-7 text-secondary">
                <input
                  readOnly={readonly}
                  type="text"
                  className="form-control"
                  value={currUser.patientMedicationHistory}
                  name="patientMedicationHistory"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-5">
                <h6 className="mb-0">Blood Group</h6>
              </div>
              <div className="col-sm-7 text-secondary">
              <select
                  className="form-select"
                  id="patientGender"
                  aria-label="Floating label select example"
                  name="patientBloodgroup"
                  value={currUser.patientBloodgroup}
                  onChange={handleChange}
                >
                  <option value="" disabled defaultValue>
                    Select Blood Group
                  </option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-5">
                <h6 className="mb-0">Weight</h6>
              </div>
              <div className="col-sm-7 text-secondary">
                <input
                  readOnly={readonly}
                  type="number"
                  className="form-control"
                  value={currUser.patientWeight}
                  name="patientWeight"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-5">
                <h6 className="mb-0">Height</h6>
              </div>
              <div className="col-sm-7 text-secondary">
                <input
                  readOnly={readonly}
                  type="number"
                  className="form-control"
                  value={currUser.patientHeight}
                  name="patientHeight"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button className="button-30"  disabled={readonly} onClick={save}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
