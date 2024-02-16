import { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [doctorName, setDoctorName] = useState(""); 
  const [searchText, setSearchText] = useState("");

  // var [doctor, setDoctor] = useState({
  //   doctorID: null,
  //   doctorFirstName: "",
  //   doctorLastName: "",
  //   doctorDob: null,
  //   doctorGender: "",
  //   doctorMobile: "",
  //   doctorEmergencyContact: "",
  //   doctorEmail: "",
  //   doctorNationality: "",
  //   doctorAddress: "",
  //   doctorGovtID: "",
  //   doctorPassport: "",
  //   doctorMaritalStatus: "",
  //   doctorQualification: "",
  //   doctorDepartment: "",
  //   doctorDesignation: "",
  //   doctorSpeciality: "",
  //   doctorExperience: null,
  //   doctorAvailability: "",
  //   doctorShifts: null,
  //   doctorSalary: null,
  //   doctorFees: null,
  //   doctorImage: "",
  //   doctorUsername: "",
  //   doctorPassword: "",
  //   doctorHireDate: null,
  //   extraCol1: "",
  // });

const urlDoctor = "http://localhost:8080/api/v1/doctor";

useEffect(() => {
  axios.get(urlDoctor + "/findAll").then((result) => {
    console.log(result);
    setDoctors(result.data);
}).catch((error) => {
    console.error("Error fetching data:", error);
})}, []);

// const inputChange = (args) => {
//   var copyofDoctor = { ...doctorName };
//   copyofUser[args.target.name] = args.target.value;
//   setDoctorName(copyofDoctor);
// };

  // const getDoctor = () => {
  //   axios
  //     .get(urlDoctor + "/findAll")
  //     .then((res) => {
  //       console.log(res);
  //       setDoctors(res.data);
  //       console.log(doctors);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const onSearch = (args) => {
    setSearchText(args.target.value);
  }

  const getDocname = (doctor) => {
    const name  = doctor.doctorFirstName+" "+doctor.doctorLastName;
    return name.toLowerCase();
  }

  return (
    <div className="container">
      <div className="page-header">
        <h1>Doctors</h1>
      </div>
      <div>
        {/* <button onClick={getDoctor} className="btn btn-primary">
          Show Data
        </button> */}
        <br></br>
        <div>
          <label>Search Doctor: </label> &nbsp;
          <input type="text" id="searchDoctor" placeholder="Enter name of the doctor" onChange={onSearch}></input>
        </div>
        <div id="content" className="row">
          {doctors.map((res) => {
            const imageSrc = `data:image/jpeg;base64,${res.doctorImage}`;
            if(searchText === "") {
              return (
                <div className="row" key={res.doctorID}>
                  <div className="col-md-8" id="docterList">
                    <h6>Id {res.doctorID}</h6>
                    <h6>
                      {res.doctorFirstName} {res.doctorLastName}
                    </h6>
                    <h6>Speciality: {res.doctorSpeciality}</h6>
                    <h6>Department: {res.doctorDepartment}</h6>
                    <h6>Designation: {res.doctorDesignation}</h6>
                    <h6>Qualification: {res.doctorQualification}</h6>
                    <h6>Experience: {res.doctorExperience}</h6>
                    <h6>
                      Contact Details: {res.doctorEmail} | {res.doctorMobile}
                    </h6>
                  </div>
                  <div className="col-md-3">
                    <center>
                      <img
                        src={imageSrc}
                        alt="Doctor"
                        className="img-fluid"
                        id="doctorImg"
                      />
                    </center>
                  </div>
                </div>
              );
            }
            else if(getDocname(res).includes(searchText.toLowerCase())) {
              return (
                <div className="row" key={res.doctorID}>
                  <div className="col-md-8" id="docterList">
                    <h6>Id {res.doctorID}</h6>
                    <h6>
                      {res.doctorFirstName} {res.doctorLastName}
                    </h6>
                    <h6>Speciality: {res.doctorSpeciality}</h6>
                    <h6>Department: {res.doctorDepartment}</h6>
                    <h6>Designation: {res.doctorDesignation}</h6>
                    <h6>Qualification: {res.doctorQualification}</h6>
                    <h6>Experience: {res.doctorExperience}</h6>
                    <h6>
                      Contact Details: {res.doctorEmail} | {res.doctorMobile}
                    </h6>
                  </div>
                  <div className="col-md-3">
                    <center>
                      <img
                        src={imageSrc}
                        alt="Doctor"
                        className="img-fluid"
                        id="doctorImg"
                      />
                    </center>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
