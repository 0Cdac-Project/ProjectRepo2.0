import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/Reducer/userslice";
import axios from "axios";
import { toast } from "react-toastify";
export const EditPassword = () => {
  const user = useSelector(selectUser);
  const [changePassword, setchangePassword] = useState({
    patientID: user.patientID,
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
  const url = `http://localhost:8080/api/v1/patient/updatePassword/${changePassword.patientID}`;
  var save = () => {
    if (
      changePassword.patientPassword === "" ||
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
      axios
        .put(url, changePassword)
        .then((res) => {
          console.log(res.data);
          toast.success("Password Successfully Changed");
          reset();
        })
        .catch((error) => {
          toast.error(error.response.data);
          console.log(error);
        });
    }
    var reset = () => {
      setchangePassword({
        patientID: user.patientID,
        patientPassword: "",
        patientNewPassword: "",
        patientConfirmPassword: "",
      });
    };
  };
  return (
    <div className="col-lg-7">
      <div className="card">
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Old Password</h6>
            </div>
            <div className="col-sm-9" info>
              <input
                type="password"
                className="form-control"
                name="patientPassword"
                value={changePassword.patientPassword}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">New Password</h6>
            </div>
            <div className="col-sm-9" info>
              <input
                type="password"
                className="form-control"
                name="patientNewPassword"
                value={changePassword.patientNewPassword}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-12">
              <h6 className="mb-0">
                Minimum eight and maximum 20 characters, at least one uppercase
                letter, one lowercase letter, one number and one special
                character
              </h6>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Confirm Password</h6>
            </div>
            <div className="col-sm-9" info>
              <input
                type="password"
                className="form-control"
                name="patientConfirmPassword"
                value={changePassword.patientConfirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="button-30" onClick={save}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
