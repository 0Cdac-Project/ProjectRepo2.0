import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../../Redux/Reducer/userslice";
import { toast } from "react-toastify";
import axios from "axios";

export const EditDetails = ({ readonly }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [currUser, setCurrUser] = useState({
    managementID: user.managementID,
    managementUsername: user.managementUsername,
    managementPassword: user.managementPassword,
    managementCategory: user.managementCategory,
    managementFirstName: user.managementFirstName,
    managementLastName: user.managementLastName,
    managementDob: user.managementDob,
    managementAge: user.managementAge,
    managementGender: user.managementGender,
    managementMobile: user.managementMobile,
    managementEmail: user.managementEmail,
    managementAddress: user.managementAddress,
    managementGovtID: user.managementGovtID,
    managementPassport: user.managementPassport,
    managementSalary: user.managementSalary,
    managementQualification: user.managementQualification,
    managementHiredate: user.managementHiredate,
    extraCol1: user.extraCol1,
    managementImage: user.managementImage,
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
  const url = `http://localhost:8080/api/v1/management/updateDetails/${currUser.managementID}`;
  var save = () => {
    console.log(currUser);
    if (
      currUser.managementUsername === "" ||
      currUser.managementFirstName === "" ||
      currUser.managementLastName === "" ||
      currUser.managementEmail === "" ||
      currUser.managementDob === "" ||
      currUser.managementGender === "" ||
      currUser.managementMobile === "" ||
      currUser.managementEmail === "" ||
      currUser.managementAddress === "" ||
      currUser.managementGovtID === "" ||
      currUser.managementQualification === ""
    ) {
      toast.warning("All Fields Are Mandatory");
    }else if (!emailPattern.test(currUser.managementEmail)) {
      toast.warning("Enter Valid Email");
    } else if (!phonePattern.test(currUser.managementMobile)) {
      toast.warning("Enter valid phone number");
    } else if (!lengthcheck.test(currUser.managementGovtID)) {
      toast.warning("Enter Valid Government Id");
    } else if (currUser.managementPassport.lenght!=0  && !lengthcheck.test(currUser.managementPassport)) {
      toast.warning("Enter Valid Passport");
    }else if (currUser.managementGovtID === currUser.managementPassport) {
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

  var handleImage = ()=>{
    
  }
  return (
    <div className="col-lg-7">
      <div className="card">
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Username</h6>
            </div>
            <div className="col-sm-9" info>
              <input
                readOnly
                type="text"
                className="form-control"
                value={currUser.managementUsername}
                name="managementUsername"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">First Name</h6>
            </div>
            <div className="col-sm-9" info>
              <input
                readOnly={readonly}
                type="text"
                className="form-control"
                value={currUser.managementFirstName}
                name="managementFirstName"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Last Name</h6>
            </div>
            <div className="col-sm-9" info>
              <input
                readOnly={readonly}
                type="text"
                className="form-control"
                value={currUser.managementLastName}
                name="managementLastName"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Date of birth</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input
                readOnly={readonly}
                type="date"
                className="form-control"
                value={currUser.managementDob}
                name="managementDob"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Gender</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <select
                className="form-select"
                id="managementGender"
                aria-label="Floating label select example"
                name="managementGender"
                value={currUser.managementGender}
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
            <div className="col-sm-3">
              <h6 className="mb-0">Email</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input
                readOnly={readonly}
                type="email"
                className="form-control"
                value={currUser.managementEmail}
                name="managementEmail"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Mobile</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input
                readOnly={readonly}
                type="text"
                className="form-control"
                value={currUser.managementMobile}
                name="managementMobile"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Address</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <textarea
               readOnly={readonly}
                className="form-control"
                placeholder="Address here"
                id="managementAddress"
                style={{ height: "100px" }}
                name="managementAddress"
                value={currUser.managementAddress}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Government Id Proof</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input
                readOnly={readonly}
                type="text"
                className="form-control"
                value={currUser.managementGovtID}
                name="managementGovtID"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Passport</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input
                readOnly={readonly}
                type="text"
                className="form-control"
                value={currUser.managementPassport}
                name="managementPassport"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Qualification</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input
                readOnly={readonly}
                type="text"
                className="form-control"
                value={currUser.managementQualification}
                name="managementQualification"
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
  );
};
