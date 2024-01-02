import { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Doctors() {
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
    extraCol1: "",
  });

  const urlDoctor = "http://localhost:8080/api/v1/doctor";

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
    <div className="container">
      <div className="page-header">
        <h1>Doctors</h1>
      </div>
      <div>
        <button onClick={getDoctor} className="btn btn-primary">
          Show Data
        </button>
        <div id="content" className="row">
          {doctors.map((res) => {
            return (
              <div className="row">
                <div className="col-md-8" id="docterList">
                  <h6>Id {res.doctorID}</h6>
                  <h6>
                    {res.doctorFirstName} {res.doctorLastName}
                  </h6>
                  <h6>Speciality: {res.doctorSpeciality}</h6>
                  <h6>Department: {res.doctorDepartment}</h6>
                  <h6>Designation: {res.doctorDesignation}</h6>
                  <h6>Qualification - {res.doctorQualification}</h6>
                  <h6>Experience: {res.doctorExperience}</h6>
                  <h6>
                    Contact Details: {res.doctorEmail} | {res.doctorMobile}
                  </h6>
                </div>
                <div className="col-md-3">
                  <center>
                    <img
                      src={process.env.PUBLIC_URL + res.doctorPhotograph}
                      alt="Doctor"
                      className="img-fluid"
                      id="doctorImg"
                    />
                  </center>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
