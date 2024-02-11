import axios from "axios";
import { useState } from "react";

function ShowStaffDetails() {
  var [managements, setManagements] = useState([]);
  var [role,setRole] = useState("Admin");
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
    extraCol1: "",
  });

  const urlManagement = "http://localhost:8080/api/v1/management/findAllByCategory";

  const getManagement = () => {
    console.log(role)
    axios
      .get(urlManagement+"/"+role)
      .then((res) => {
        setManagements(res.data);
        console.log(managements);
      })
      .catch((error) => {
        console.log(error);
      });
  };

 const handleChange = (args) => {
    setRole(args.target.value)
  }

  return (
    <div className="container-fluid">
      <div className="page-header">
        <h1>Management</h1>
      </div>
      <div>
        <div className="row">
          <div className="col-md-1 mt-1">
            <label class="label1_1" for="role">
              Management Category:
            </label>
          </div>
          <div className="col-md-2 mt-2" style={{ display: "-ms-flexbox" }}>
          <select id="role" name="role" value={role} onChange={handleChange}>
              <option value="Admin" onChange={() => setRole("Admin")}>Admin</option>
              <option value="Accountant" onChange={() => setRole("Accountant")}>Accountant</option>
              <option value="Receptionist" onChange={() => setRole("Receptionist")}>Receptionist</option>
            </select>
          </div>
          <div className="col-md-2 mt-1">
            <button onClick={getManagement} className="button-30">
              Show Data
            </button>
          </div>
        </div>
        <div class="table-responsive">
          <table class="fl-table">
            <thead>
              <th>ID</th>
              <th>Username</th>
              <th>Password</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Dob</th>
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
              <th>Photograph</th>
            </thead>
            <tbody>
              {managements.map((res) => {
                return (
                  <tr key={res.managementID}>
                    <td>{res.managementID}</td>
                    <td>{res.managementUsername}</td>
                    <td>{res.managementPassword}</td>
                    <td>{res.managementFirstName}</td>
                    <td>{res.managementLastName}</td>
                    <td>{res.managementDob}</td>
                    <td>{res.managementAge}</td>
                    <td>{res.managementGender}</td>
                    <td>{res.managementMobile}</td>
                    <td>{res.managementEmail}</td>
                    <td>{res.managementAddress}</td>
                    <td>{res.managementGovtID}</td>
                    <td>{res.managementPassport}</td>
                    <td>{res.managementSalary}</td>
                    <td>{res.managementQualification}</td>
                    <td>{res.managementHiredate}</td>
                    <td>
                      <center>
                        <img
                          src={process.env.PUBLIC_URL + res}
                          alt="photoManagement"
                          className="img-fluid"
                          id="doctorImg"
                        />
                      </center>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowStaffDetails;
