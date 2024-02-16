import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function AddStaff() {
  var [management, setManagement] = useState({
    managementID: 0,
    managementUsername: "",
    managementPassword: "",
    managementCategory: "",
    managementFirstName: "",
    managementLastName: "",
    managementDob: "1999-09-09",
    managementAge: null,
    managementGender: "",
    managementMobile: "",
    managementEmail: "",
    managementAddress: "",
    managementGovtID: "",
    managementPassport: "",
    managementSalary: 0,
    managementQualification: "",
    managementHiredate: "1999-09-09",
    managementImage: null,
    extraCol1: "",
  });
  const emailPattern = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const phonePattern = new RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  );
  const lengthcheck = new RegExp(/^.{8,20}$/);
  const handleChange = (args) => {
    var copy = { ...management };
    copy[args.target.name] = args.target.value;
    setManagement(copy);
  };
  const url = "http://localhost:8080/api/v1/management/add";

  const Reset = () => {
    setManagement({
      managementID: 0,
      managementUsername: "",
      managementPassword: "",
      managementCategory: "",
      managementFirstName: "",
      managementLastName: "",
      managementDob: "",
      managementAge: null,
      managementGender: "",
      managementMobile: "",
      managementEmail: "",
      managementAddress: "",
      managementGovtID: "",
      managementPassport: "",
      managementSalary: 0,
      managementQualification: "",
      managementHiredate: "",
      managementImage: null,
      extraCol1: "",
    });
  };

  const addNewStaff = async () => {
    if (management.managementUsername.length === 0) {
      toast.warning("Enter UserName");
    } else if (!lengthcheck.test(management.managementUsername)) {
      toast.warning("Username Length should be greater than 8 less than 20");
    } else if (management.managementPassword.length === 0) {
      toast.warning("Enter Password");
    } else if (!lengthcheck.test(management.managementPassword)) {
      toast.warning("Password Length should be greater than 8 less than 20");
    } else if (management.managementCategory.length === 0) {
      toast.warning("Select Category");
    } else if (management.managementFirstName.length === 0) {
      toast.warning("Enter First Name");
    } else if (management.managementLastName.length === 0) {
      toast.warning("Enter Last Name");
    } else if (management.managementEmail.length === 0) {
      toast.warning("Enter Email");
    } else if (!emailPattern.test(management.managementEmail)) {
      toast.warning("Enter Valid Email");
    } else if (management.managementMobile.length === 0) {
      toast.warning("Enter Contact Info");
    } else if (!phonePattern.test(management.managementMobile)) {
      toast.warning("Enter Valid Contact Info");
    } else if (management.managementGovtID.length === 0) {
      toast.warning("Enter Government Id Proof");
    } else if (!lengthcheck.test(management.managementGovtID)) {
      toast.warning("Enter Valid Government Id");
    } else if (management.managementGovtID === management.managementPassport) {
      toast.warning("Passport id should not be same as government Id");
    } else if (management.managementQualification.length === 0) {
      toast.warning("Enter Qualification");
    } else if (management.managementSalary.length === 0) {
      toast.warning("Enter Salary");
    } else {
      console.log(management);
      await axios
        .post(url, management)
        .then((res) => {
          if (res.status === 200) {
            console.log("Success");
            toast.success("Successfully registered the user");
            Reset();
          } else {
            toast.error(res["error"]);
          }
        })
        .catch((err) => {
          console.log(err.request.response);
          toast.error(err.request.response.substring(130, 145));
        });
    }
  };
  return (
    <>
      <div className="container" id="addDocter">
        <div className="row" style={{ alignItems: "center" }}>
          <div className="col-4">
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="managementUsername"
                placeholder="Enter Username"
                name="managementUsername"
                value={management.managementUsername}
                onChange={handleChange}
              />
              <label htmlFor="managementUsername">Username</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="managementPassword"
                id="managementPassword"
                value={management.managementPassword}
                onChange={handleChange}
              />
              <label htmlFor="managementPassword">Password</label>
            </div>
            <div className="form-floating mb-2">
              <select
                className="form-select"
                id="managementGender"
                aria-label="Floating label select example"
                name="managementCategory"
                value={management.managementCategory}
                onChange={handleChange}
              >
                <option value="" disabled defaultValue>
                  Select Category
                </option>
                <option value="Admin">Admin</option>
                <option value="Accountant">Accountant</option>
                <option value="Receptionist">Receptionist</option>
              </select>
              <label htmlFor="managementGender">Management Category</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="managementFirstName"
                placeholder="Enter Username"
                name="managementFirstName"
                value={management.managementFirstName}
                onChange={handleChange}
              />
              <label htmlFor="managementFirstName">First Name</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="managementLastName"
                placeholder="Last Name Here"
                name="managementLastName"
                value={management.managementLastName}
                onChange={handleChange}
              />
              <label htmlFor="managementLastName">Last Name</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="date"
                className="form-control"
                id="managementDob"
                placeholder="DOB Here"
                name="managementDob"
                value={management.managementDob}
                onChange={handleChange}
              />
              <label htmlFor="managementDob">Date of Birth</label>
            </div>
          </div>
          <div className="col-4">
            <div className="form-floating mb-2">
              <select
                className="form-select"
                id="managementGender"
                aria-label="Floating label select example"
                name="managementGender"
                value={management.managementGender}
                onChange={handleChange}
              >
                <option value="" disabled defaultValue>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <label htmlFor="managementGender">Gender</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="email"
                className="form-control"
                id="managementEmail"
                placeholder="Enter Email"
                name="managementEmail"
                value={management.managementEmail}
                onChange={handleChange}
              />
              <label htmlFor="managementEmail">Email</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="managementMobile"
                placeholder="Contact Info Here"
                name="managementMobile"
                value={management.managementMobile}
                onChange={handleChange}
              />
              <label htmlFor="managementMobile">Contact</label>
            </div>
            <div className="form-floating mb-2">
              <textarea
                className="form-control"
                placeholder="Address here"
                id="managementAddress"
                style={{ height: "100px" }}
                name="managementAddress"
                value={management.managementAddress}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="managementAddress">Address</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="managementGovtID"
                placeholder="Govt Id Here"
                name="managementGovtID"
                value={management.managementGovtID}
                onChange={handleChange}
              />
              <label htmlFor="managementGovtID">Government Id</label>
            </div>
          </div>
          <div className="col-4">
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="managementPassport"
                placeholder="Passport Here"
                name="managementPassport"
                value={management.managementPassport}
                onChange={handleChange}
              />
              <label htmlFor="managementPassport">Passport</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="managementQualification"
                placeholder="Qualification Here"
                name="managementQualification"
                value={management.managementQualification}
                onChange={handleChange}
              />
              <label htmlFor="managementQualification">Qualification</label>
            </div>

            <div className="form-floating mb-2">
              <input
                type="number"
                className="form-control"
                id="managementSalary"
                placeholder="Salary Here"
                name="managementSalary"
                value={management.managementSalary}
                onChange={handleChange}
              />
              <label htmlFor="managementSalary">Salary</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="form-control"
                id="managementImage"
                placeholder="Profile Image Here"
                name="managementImage"
                value={management.managementImage}
                onChange={handleChange}
              />
              <label htmlFor="managementImage">
                Profile Image (png/jpeg format)
              </label>
            </div>

            <div className="form-floating mb-2">
              <input
                type="date"
                className="form-control"
                id="managementHireDate"
                placeholder="Hire Date Here"
                name="managementHireDate"
                value={management.managementHireDate}
                onChange={handleChange}
              />
              <label htmlFor="managementHireDate">Hire Date</label>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-4" style={{ marginLeft: "11%" }}>
            <label for="submit"></label>
            <button
              className="button-30 w-25"
              name="submit"
              id="submit"
              onClick={addNewStaff}
            >
              Submit
            </button>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
}

export default AddStaff;
