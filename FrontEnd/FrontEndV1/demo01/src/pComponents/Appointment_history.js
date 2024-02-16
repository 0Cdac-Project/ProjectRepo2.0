import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/Reducer/userslice";

function AppointmentHistory() {
    const user = useSelector(selectUser);
    const [appointmentHistory, setAppointmentHistory] = useState([]);
    const urlHistory = "http://localhost:8080/api/v1/appointments";

    // useEffect(() => {
    //     axios.get(urlHistory + `/by_patient/${user.patientID}`).then((result) => {
    //         console.log(result);
    //         setAppointmentHistory(result.data);
    // }).catch((error) => {
    //     console.error("Error fetching data:", error);
    // })}, []);

    useEffect(() => {
        if (user && user.patientID) {
            axios.get(urlHistory + `/by_patient/${user.patientID}`)
                .then((result) => {
                    console.log(result);
                    setAppointmentHistory(result.data);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [user]);

    return ( 
        <>
            <div className="page-header">
                <h1>Appointment History</h1>
            </div>
            <br/>

            <div className="container-fluid">
            <div className="accordion" id="accordionPanelsStayOpenExample">
                {appointmentHistory.map((result) => (
                    <div className="accordion-item" key={result.appointmentID}>
                    <h2 className="accordion-header">
                      <button className="accordion-button bg-secondary-subtle" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse-${result.appointmentID}`} aria-expanded="false" aria-controls={`panelsStayOpen-collapse-${result.appointmentID}`}>
                        Appointment Id: {result.appointmentID}
                    </button>
                    </h2>
                    <div id={`panelsStayOpen-collapse-${result.appointmentID}`} className="accordion-collapse collapse">
                      <div className="accordion-body">
                          <span>
                              Appointment id: <span>{result.appointmentID}</span>
                          </span>
                          <br/>
                          <br/>
                          <span>
                              Doctor: <span className="fst-italic">{result.doctor.doctorFirstName} {result.doctor.doctorLastName}</span>
                          </span>
                          <br/>
                          <br/>
                          <span>
                              Appointment date and time: <span>{result.appointmentDateTime}</span>
                          </span>
                          <br/>
                          <br/>
                          <span>
                              Medical condition: <span>{result.medicalCondition}</span>
                          </span>
                          <br/>
                          <br/>
                          <span>
                              Medication/Treatment: <span>{result.medication}</span>
                          </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
        </div>
        </>
     );
}

export default AppointmentHistory;