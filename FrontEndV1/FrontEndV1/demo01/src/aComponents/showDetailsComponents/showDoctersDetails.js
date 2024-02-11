import { useState } from "react";
import axios from "axios";
import "../show.css";
function ShowDoctersDetails() {
  var [doctors, setDoctors] = useState([]);
  var [doctor, setDoctor] = useState({
    doctorID: null,
    doctorFirstName: "",
    doctorLastName: "",
    doctorDob: null,
    doctorGender: "",
    doctorMobile: "",
    doctorEmergencyContact: "",
    doctorEmail: "",
    doctorNationality: "",
    doctorAddress: "",
    doctorGovtID: "",
    doctorPassport: "",
    doctorMaritalStatus: "",
    doctorQualification: "",
    doctorDepartment: "",
    doctorDesignation: "",
    doctorSpeciality: "",
    doctorExperience: null,
    doctorAvailability: "",
    doctorShifts: null,
    doctorSalary: null,
    doctorFees: null,
    doctorPhotograph: "",
    doctorUsername: "",
    doctorPassword: "",
    doctorHireDate: null,
  });

  const urlDoctor = "http://localhost:8080/api/v1/doctor/findAll";

  const getDoctor = () => {
    axios
      .get(urlDoctor)
      .then((res) => {
        setDoctors(res.data);
        console.log(doctors);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container-fluid">
      <div className="page-header">
        <h1>Doctors</h1>
      </div>
      <div>
        <button onClick={getDoctor} className="button-30">
          Show Data
        </button>
        <div class="table-responsive">
          <table class="fl-table">
            <thead>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Mobile</th>
              <th>Emergency Contact</th>
              <th>Email</th>
              <th>Nationality</th>
              <th>Address</th>
              <th>GovId</th>
              <th>Passport</th>
              <th>Marital Status</th>
              <th>Qualification</th>
              <th>Department</th>
              <th>Designment</th>
              <th>Speciality</th>
              <th>Experience</th>
              <th>Availiabitiy</th>
              <th>Shifts</th>
              <th>Salary</th>
              <th>Fees</th>
              <th>HireDate</th>
              <th>Photograph</th>
            </thead>
            <tbody>
              {doctors.map((res) => {
                return (
                  <tr key={res.docterID}>
                    <td>{res.doctorID}</td>
                    <td>{res.doctorFirstName}</td>
                    <td>{res.doctorLastName}</td>
                    <td>{res.doctorUsername}</td>
                    <td>{res.doctorDob}</td>
                    <td>{res.doctorGender}</td>
                    <td>{res.doctorMobile}</td>
                    <td>{res.doctorEmergencyContact}</td>
                    <td>{res.doctorEmail}</td>
                    <td>{res.doctorNationality}</td>
                    <td>{res.doctorAddress}</td>
                    <td>{res.doctorGovtID}</td>
                    <td>{res.doctorPassport}</td>
                    <td>{res.doctorMaritalStatus}</td>
                    <td>{res.doctorQualification}</td>
                    <td>{res.doctorDepartment}</td>
                    <td>{res.doctorDesignation}</td>
                    <td>{res.doctorSpeciality}</td>
                    <td>{res.doctorExperience}</td>
                    <td>{res.doctorAvailability}</td>
                    <td>{res.doctorShifts}</td>
                    <td>{res.doctorSalary}</td>
                    <td>{res.doctorFees}</td>
                    <td>{res.doctorHireDate}</td>
                    <td><center>
                    <img
                      src={process.env.PUBLIC_URL + res.doctorPhotograph}
                      alt="Doctor"
                      className="img-fluid"
                   id="doctorImg"
                    />
                  </center></td>
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

export default ShowDoctersDetails;
