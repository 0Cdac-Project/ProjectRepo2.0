import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/Reducer/userslice";
import axios from "axios";
import { toast } from "react-toastify";
export const EditPassword = () => {
  const user = useSelector(selectUser);
  const [changePassword, setchangePassword] = useState({
    managementID: user.managementID,
    managementPassword: "",
    managementNewPassword: "",
    managementConfirmPassword: "",
  });
  var handleChange = (args) => {
    var copyofUser = { ...changePassword };
    copyofUser[args.target.name] = args.target.value;
    setchangePassword(copyofUser);
  };
  const lengthcheck = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
  );
  const url = `http://localhost:8080/api/v1/management/updatePassword/${changePassword.managementID}`;
  var save = () => {
    if (
      changePassword.managementPassword === "" ||
      changePassword.managementNewPassword === "" ||
      changePassword.managementConfirmPassword === ""
    ) {
      toast.warning("All Fields Are Mandatory");
    } else if (!lengthcheck.test(changePassword.managementNewPassword)) {
      toast.warning("Password Invalid");
    } else if (
      changePassword.managementConfirmPassword !==
      changePassword.managementNewPassword
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
        managementID: user.managementID,
        managementPassword: "",
        managementNewPassword: "",
        managementConfirmPassword: "",
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
                name="managementPassword"
                value={changePassword.managementPassword}
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
                name="managementNewPassword"
                value={changePassword.managementNewPassword}
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
                name="managementConfirmPassword"
                value={changePassword.managementConfirmPassword}
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
