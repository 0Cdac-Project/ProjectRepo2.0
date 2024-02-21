import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../Redux/Reducer/textboxslice";
import { useEffect } from "react";

function PatientsDetails() {
  const value1 = useSelector((state) => state.textbox.value);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setValue(event.target.value));
  };
  var [patients, setPatients] = useState([]);
  var [patient, setPatient] = useState({
    patientID: 0,
    patientFirstName: "",
    patientLastName: "",
    patientDob: "",
    patientAge: 0,
    patientGender: "",
    patientMobile: "",
    patientEmergencyContact: "",
    patientEmail: "",
    patientNationality: "",
    patientAddress: "",
    patientGovtID: "",
    patientPassport: "",
    patientMaritalStatus: "",
    patientOccupation: "",
    patientMedicalCondition: "",
    patientMedicationHistory: "",
    patientMedicalConsultant: "",
    patientUsername: "",
    patientPassword: "",
    patientWeight: 0,
    patientHeight: 0,
    patientBloodgroup: "",
    patientCategory: "",
    extraCol1: null,
    patientImage: null,
  });

  useEffect(()=>{getPatient()},[]);

  const urlPatient = "http://localhost:8080/api/v1/patient/findAll/desc";

  const getPatient = () => {
    axios
      .get(urlPatient)
      .then((res) => {
        setPatients(res.data);
        console.log(patients);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="page-header">
        <h1>Patients Details</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mt-2" style={{textAlign:"right"}}>
            <label className="label1_1">
              Search User By Username/FirstName:
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
                  <th>Username</th>
                  <th>Date of Birth</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Mobile</th>
                  <th>Emergency Contact</th>
                  <th>Email</th>
                  <th>Nationality</th>
                  <th>Address</th>
                  <th>Government ID</th>
                  <th>Passport</th>
                  <th>Marital Status</th>
                  <th>Occupation</th>
                  <th>Medical Condition</th>
                  <th>Medication History</th>
                  <th>Medical Consultant</th>
                  <th>Weight</th>
                  <th>Height</th>
                  <th>Blood Group</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((res) => {
                  if (
                    !res.patientFirstName
                      .toLowerCase()
                      .includes(value1.toLowerCase()) &&
                    !res.patientUsername
                      .toLowerCase()
                      .includes(value1.toLowerCase())
                  ) {
                    return null;
                  } else {
                    return (
                      <tr key={res.patientID}>
                        <td>{res.patientID}</td>
                        <td>
                          <center>
                            <img
                              src={`data:image/jpeg;base64, ${res.patientImage}`}
                              alt="photoManagement"
                              className="img-fluid"
                              id="doctorImg"
                            />
                          </center>
                        </td>
                        <td>{res.patientFirstName}</td>
                        <td>{res.patientLastName}</td>
                        <td>{res.patientUsername}</td>
                        <td>{res.patientDob}</td>
                        <td>{res.patientAge}</td>
                        <td>{res.patientGender}</td>
                        <td>{res.patientMobile}</td>
                        <td>{res.patientEmergencyContact}</td>
                        <td>{res.patientEmail}</td>
                        <td>{res.patientNationality}</td>
                        <td>{res.patientAddress}</td>
                        <td>{res.patientGovtID}</td>
                        <td>{res.patientPassport}</td>
                        <td>{res.patientMaritalStatus}</td>
                        <td>{res.patientOccupation}</td>
                        <td>{res.patientMedicalCondition}</td>
                        <td>{res.patientMedicationHistory}</td>
                        <td>{res.patientMedicalConsultant}</td>
                        <td>{res.patientWeight}</td>
                        <td>{res.patientHeight}</td>
                        <td>{res.patientBloodgroup}</td>
                        <td>{res.patientCategory}</td>
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

export default PatientsDetails;
