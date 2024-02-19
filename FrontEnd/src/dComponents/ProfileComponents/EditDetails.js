import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../../Redux/Reducer/userslice";
import { toast } from "react-toastify";
import axios from "axios";

export const EditDetails = ({ readonly }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [currUser, setCurrUser] = useState({
    doctorID: user.doctorID,
    doctorFirstName: user.doctorFirstName,
    doctorLastName: user.doctorLastName,
    doctorDob: user.doctorDob,
    doctorAge: user.doctorAge,
    doctorGender: user.doctorGender,
    doctorMobile: user.doctorMobile,
    doctorEmergencyContact: user.doctorEmergencyContact,
    doctorEmail: user.doctorEmail,
    doctorNationality: user.doctorNationality,
    doctorAddress: user.doctorAddress,
    doctorGovtID: user.doctorGovtID,
    doctorPassport: user.doctorPassport,
    doctorMaritalStatus: user.doctorMaritalStatus,
    doctorPassword:user.doctorPassword,
    doctorUsername:user.doctorUsername,
    doctorImage: user.doctorImage,

    doctorQualification: user.doctorQualification,
    doctorDepartment: user.doctorDepartment,
    doctorDesignation: user.doctorDesignation,
    doctorSpeciality: user.doctorSpeciality,
    doctorExperience: user.doctorExperience,
    doctorAvailability: user.doctorAvailability,
    doctorShifts: user.doctorShifts,
    doctorSalary: user.doctorSalary,
    doctorFees: user.doctorFees, 
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
  const url = `http://localhost:8080/api/v1/doctor/updateDetails/${currUser.doctorID}`;
  var save = () => {
    if (
      currUser.doctorUsername === "" ||
      currUser.doctorFirstName === "" ||
      currUser.doctorLastName === "" ||
      currUser.doctorEmail === "" ||
      currUser.doctorDob === "" ||
      currUser.doctorGender === "" ||
      currUser.doctorMobile === "" ||
      currUser.doctorEmail === "" ||
      currUser.doctorAddress === "" ||
      currUser.doctorGovtID === "" 
    ) {
      toast.warning("All Fields Are Mandatory");
    }  else if (!emailPattern.test(currUser.doctorEmail)) {
      toast.warning("Enter Valid Email");
    } else if (!phonePattern.test(currUser.doctorMobile)) {
      toast.warning("Enter valid phone number");
    } else if (!lengthcheck.test(currUser.doctorGovtID)) {
      toast.warning("Enter Valid Government Id");
    } else if (currUser.doctorPassport.length!=0  && !lengthcheck.test(currUser.doctorPassport)) {
      toast.warning("Enter Valid Passport");
    } else if (currUser.doctorGovtID === currUser.doctorPassport) {
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
                  value={currUser.doctorUsername}
                  name="doctorUsername"
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
                  value={currUser.doctorFirstName}
                  name="doctorFirstName"
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
                  value={currUser.doctorLastName}
                  name="doctorLastName"
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
                  value={currUser.doctorDob}
                  name="doctorDob"
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
                  id="doctorGender"
                  aria-label="Floating label select example"
                  name="doctorGender"
                  value={currUser.doctorGender}
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
                  value={currUser.doctorEmail}
                  name="doctorEmail"
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
                  value={currUser.doctorMobile}
                  name="doctorMobile"
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
                  value={currUser.doctorEmergencyContact}
                  name="doctorEmergencyContact"
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
                  id="doctorAddress"
                  style={{ height: "100px" }}
                  name="doctorAddress"
                  value={currUser.doctorAddress}
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
                  value={currUser.doctorGovtID}
                  name="doctorGovtID"
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
                  value={currUser.doctorPassport}
                  name="doctorPassport"
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
                  id="doctorMaritalStatus"
                  aria-label="Floating label select example"
                  name="doctorMaritalStatus"
                  value={currUser.doctorMaritalStatus}
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
                <h6 className="mb-0">Qualification</h6>
              </div>
              <div className="col-sm-7 text-secondary">
                <input
                  readOnly={readonly}
                  type="text"
                  className="form-control"
                  value={currUser.doctorQualification}
                  name="doctorQualification"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-5">
                <h6 className="mb-0">Department</h6>
              </div>
              <div className="col-sm-7 text-secondary">
                <input
                  readOnly={readonly}
                  type="text"
                  className="form-control"
                  value={currUser.doctorDepartment}
                  name="doctorDepartment"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-5">
                <h6 className="mb-0">Designation</h6>
              </div>
              <div className="col-sm-7 text-secondary">
              <select
                  className="form-select"
                  readOnly={readonly}
                  id="doctorGender"
                  aria-label="Floating label select example"
                  name="doctorBloodgroup"
                  value={currUser.doctorBloodgroup}
                  onChange={handleChange}
                >
                  <option value="" disabled defaultValue>
                    Select Designation
                  </option>
                  <option value="Resident Physician">Resident Physician</option>
                  <option value="Specialist">Specialist</option>
                  <option value="Attending Physician">Attending Physician</option>
                  <option value="Consultant">Consultant</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-5">
                <h6 className="mb-0">Speciality</h6>
              </div>
              <div className="col-sm-7 text-secondary">
                <input
                  readOnly={readonly}
                  type="text"
                  className="form-control"
                  value={currUser.doctorSpeciality}
                  name="doctorSpeciality"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-5">
                <h6 className="mb-0">Experience</h6>
              </div>
              <div className="col-sm-7 text-secondary">
                <input
                  readOnly={readonly}
                  type="number"
                  className="form-control"
                  value={currUser.doctorExperience}
                  name="doctorExperience"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button className="button-30" disabled={readonly} onClick={save}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
