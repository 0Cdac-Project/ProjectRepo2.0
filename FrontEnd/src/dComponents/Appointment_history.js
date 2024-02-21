import axios from "axios";
import { useState } from "react";
import "../acComponents/accountant.css";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/Reducer/userslice";

function Appointment_History() {
  const user = useSelector(selectUser);
  const url = `http://localhost:8080/api/v1/appointments/by_doctor/${user.doctorID}`;
  const [appointments, setAppointments] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [field, setField] = useState("patient");

  const getAppoints = () => {
    console.log(user);
    axios.get(url).then((response) => {
      setAppointments(response.data);
      console.log(appointments);
    });
  };

  const onSearch = (args) => {
    setSearchText(args.target.value);
    console.log(searchText)
  };

  const getPatientname = (patient) => {
    const name = patient.patientFirstName + " " + patient.patientLastName;
    return name.toLowerCase();
  };

  return (
    <>
      <div className="page-header">
        <h1>Appointments Details of Patient</h1>
        <div className="row">
          <div className="col-4">
            <button className="button-30" onClick={getAppoints}>
              show appointments
            </button>
          </div>
          <div className="col-8">
            <input
              id="search-box"
              type="text"
              value={searchText}
              onChange={onSearch}
            />
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="fl-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Patient Id</th>
              <th>Appointment Date</th>
              <th>Patient Name</th>
              <th>Medical condition</th>
              <th>Medication</th>
              <th>Patient Email</th>
              <th>Patient Contact</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((res, index) => {
              if (searchText === "") {
                return (
                  <tr key={index}>
                    <td>{res.appointmentID}</td>
                    <td>{res.patient.patientID}</td>
                    <td>{res.appointmentDateTime}</td>
                    <td>
                      {res.patient.patientFirstName +
                        " " +
                        res.patient.patientLastName}
                    </td>
                    <td>{res.medicalCondition}</td>
                    <td>{res.medication}</td>
                    <td>{res.patient.patientEmail}</td>
                    <td>{res.patient.patientMobile}</td>
                  </tr>
                );
              } else if (
                  getPatientname(res.patient).includes(
                    searchText.toLowerCase()
                  )
                ) {
                  return (
                    <tr key={index}>
                      <td>{res.appointmentID}</td>
                    <td>{res.appointmentDateTime}</td>
                    <td>
                      {res.patient.patientFirstName +
                        " " +
                        res.patient.patientLastName}
                    </td>
                    <td>{res.medicalCondition}</td>
                    <td>{res.medication}</td>
                    <td>{res.patient.patientEmail}</td>
                    <td>{res.patient.patientMobile}</td>
                    </tr>
                  );
                }
              }
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Appointment_History;