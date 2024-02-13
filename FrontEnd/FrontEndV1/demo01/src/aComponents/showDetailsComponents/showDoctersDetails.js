import { useState } from "react";
import axios from "axios";
import "../show.css";
import { useSelector } from "react-redux";

function ShowDoctersDetails() {
  const value1 = useSelector((state) => state.textbox.value);
  var [doctors, setDoctors] = useState([]);
  var [doctor, setDoctor] = useState({
    doctorID: null,
    doctorFirstName: "",
    doctorLastName: "",
    doctorDob: null,
    doctorAge:null,
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
    doctorImage: "",
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
        <h1>Doctors List</h1>
      </div>
      <div>
        <div className="col-md-2 mt-1">
          <button onClick={getDoctor} className="button-30">
            Show Data
          </button>
        </div>
        <div className="table-responsive">
          <table className="fl-table">
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Id</th>
                <th>Photograph</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Date of Birth</th>
                <th>Age</th>
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
              </tr>
            </thead>
            <tbody>
              {doctors.map((res, index) => {
                if (
                  !res.doctorFirstName
                    .toLowerCase()
                    .includes(value1.toLowerCase()) &&
                  !res.doctorUsername
                    .toLowerCase()
                    .includes(value1.toLowerCase())
                ) {
                } else {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>{res.doctorID}</td>
                      <td>
                        <center>
                          <img
                            src={`data:image/jpeg;base64, ${res.doctorImage}`}
                            alt="Doctor"
                            className="img-fluid"
                            id="doctorImg"
                          />
                        </center>
                      </td>
                      <td>{res.doctorFirstName}</td>
                      <td>{res.doctorLastName}</td>
                      <td>{res.doctorUsername}</td>
                      <td>{res.doctorDob}</td>
                      <td>{res.doctorAge}</td>
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
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowDoctersDetails;
