import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

function ShowStaffDetails() {
  const value1 = useSelector(state => state.textbox.value);
  var [managements, setManagements] = useState([]);
  var [role, setRole] = useState("Admin");
  var [management, setManagement] = useState({
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

  const urlManagement =
    "http://localhost:8080/api/v1/management/findAllByCategory";

  const getManagement = () => {
    console.log(role);
    axios
      .get(urlManagement + "/" + role)
      .then((res) => {
        setManagements(res.data);
        console.log(managements);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (args) => {
    setRole(args.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="page-header">
        <h1>Management List</h1>
      </div>
      <div>
        <div className="row">
          <div className="col-md-1 mt-1">
            <label className="label1_1">Management Category:</label>
          </div>
          <div className="col-md-2 mt-2" style={{ display: "-ms-flexbox" }}>
            <select id="role" name="role" value={role} onChange={handleChange}>
              <option value="Admin" onChange={() => setRole("Admin")}>
                Admin
              </option>
              <option value="Accountant" onChange={() => setRole("Accountant")}>
                Accountant
              </option>
              <option
                value="Receptionist"
                onChange={() => setRole("Receptionist")}
              >
                Receptionist
              </option>
            </select>
          </div>
          <div className="col-md-2 mt-1">
            <button onClick={getManagement} className="button-30">
              Show Data
            </button>
          </div>
        </div>
        <div className="table-responsive">
          <table className="fl-table">
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Id</th>
                <th>Photograph</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Username</th>
                <th>Date of Birth</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Address</th>
                <th>GovtID</th>
                <th>Passport</th>
                <th>Salary</th>
                <th>Qualification</th>
                <th>Hiredate</th>
              </tr>
            </thead>
            <tbody>
              {managements.map((res, index) => {
                  if (!res.managementUsername.toLowerCase().includes(value1.toLowerCase())&&!res.managementFirstName.toLowerCase().includes(value1.toLowerCase())) {
                  }
                  else{
                return (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{res.managementID}</td>
                    <td>
                      <center>
                        <img
                          src={`data:image/jpeg;base64, ${res.managementImage}`}
                          alt="photoManagement"
                          className="img-fluid"
                          id="doctorImg"
                        />
                      </center>
                    </td>
                    <td>{res.managementFirstName}</td>
                    <td>{res.managementLastName}</td>
                    <td>{res.managementUsername}</td>
                    <td>{res.managementDob}</td>
                    <td>{-res.managementAge}</td>
                    <td>{res.managementGender}</td>
                    <td>{res.managementMobile}</td>
                    <td>{res.managementEmail}</td>
                    <td>{res.managementAddress}</td>
                    <td>{res.managementGovtID}</td>
                    <td>{res.managementPassport}</td>
                    <td>{res.managementSalary}</td>
                    <td>{res.managementQualification}</td>
                    <td>{res.managementHiredate}</td>
                  </tr>
                );}
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowStaffDetails;
