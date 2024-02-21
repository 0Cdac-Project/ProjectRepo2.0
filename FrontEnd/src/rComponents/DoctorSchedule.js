import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../Redux/Reducer/textboxslice";
import { useEffect } from "react";

function DocterSchedule() {

    const value1 = useSelector((state) => state.textbox.value);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setValue(event.target.value));
  };

  var [doctors, setDoctors] = useState([]);
  var [doctor, setdoctor] = useState({
    doctorID:0,
    doctorFirstName:"",
    doctorLastName:"",
    doctorDob:"",
    doctorAge:0,
    doctorGender:"",
    doctorMobile:"",
    doctorEmergencyContact:"",
    doctorEmail:"",
    doctorNationality:"",
    doctorAddress:"",
    doctorGovtID:"",
    doctorPassport:"",
    doctorMaritalStatus:"",
    doctorQualification:"",
    doctorDepartment:"",
    doctorDesignation:"",
    doctorSpeciality:"",
    doctorExperience:"",
    doctorAvailability:"",
    doctorShifts:"",
    doctorSalary:"",
    doctorFees:"",
    doctorImage:null,
    doctorUsername:"",
    doctorPassword:"",
    doctorHireDate:"",
    extraCol1:null,
  });

  useEffect(()=>{getDoctor()},[]);

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
        <>
      <div className="page-header">
        <h1>Doctors Details</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mt-2" style={{textAlign:"right"}}>
            <label className="label1_1">
              Search Doctor By Name / Dept:
            </label>
          </div>
          <div className="col-2">
            <input
              type="text"
              name="finduser"
              placeholder="Search"
              value={value1}
              onChange={handleChange}
            />
          </div>
          <div className="table-responsive">
            <table className="fl-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>doctorQualification</th>
                  <th>doctorDepartment</th>
                  <th>doctorDesignation</th>
                  <th>doctorSpeciality</th>
                  <th>doctorExperience</th>
                  <th>doctorAvailability</th>
                  <th>doctorShifts</th>
                  <th>doctorFees</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((res) => {
                  if (
                    !res.doctorFirstName
                      .toLowerCase()
                      .includes(value1.toLowerCase()) &&
                    !res.doctorLastName
                      .toLowerCase()
                      .includes(value1.toLowerCase())&&
                    !res.doctorDepartment
                      .toLowerCase()
                      .includes(value1.toLowerCase())
                  ) {
                    return null;
                  } else {
                    return (
                      <tr key={res.doctorID}>
                        <td>{res.doctorID}</td>
                        <td>
                          <center>
                            <img
                              src={`data:image/jpeg;base64, ${res.doctorImage}`}
                              alt="photoManagement"
                              className="img-fluid"
                              id="doctorImg"
                            />
                          </center>
                        </td>
                        <td>{res.doctorFirstName}</td>
                        <td>{res.doctorLastName}</td>
                        <td>{res.doctorQualification}</td>
                        <td>{res.doctorDepartment}</td>
                        <td>{res.doctorDesignation}</td>
                        <td>{res.doctorSpeciality}</td>
                        <td>{res.doctorExperience}</td>
                        <td>{res.doctorAvailability}</td>
                        <td>{res.doctorShifts}</td>
                        <td>{res.doctorFees}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
     );
}

export default DocterSchedule;