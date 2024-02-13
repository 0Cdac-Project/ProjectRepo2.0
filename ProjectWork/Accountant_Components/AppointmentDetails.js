import axios from "axios";
import { useState } from "react";

const url = "http://localhost:8080/api/v1/appointments/findAll";
function AppointmentDetails() {

    const [appointments, setAppointments] = useState([]);
    // debugger;

    const getAppoints = ()=>{
        axios
            .get(url)
            .then((response) => {
                setAppointments(response.data);
                console.log(appointments)
        })
        
    }

    return ( 
        <>
            <div className="page-header">
                <h1>Appointments Details of Patient</h1>
                <button onClick={getAppoints}>show appointments</button>
            </div>
            <div class="table-responsive">
                    <table class="fl-table">
                        <thead>
                            <th>Id</th>
                            <th>Patient Name</th>
                            <th>Medical condition</th>
                            <th>Medication</th>
                            <th>Doctor Name</th>
                            <th>Schedule</th> 
                        </thead>
                        <tbody>
                            {appointments.map((res) => {
                                return (
                                <tr key={res.appointmentID}>
                                    <td>{res.appointmentID}</td>
                                    <td>{res.patientID}</td>
                                    <td>{res.medicalCondition}</td>
                                    <td>{res.medication}</td>
                                    <td>{res.doctorID}</td>
                                    <td>{res.appointmentDateTime}</td>
                                </tr>
                                );
                            })}
                        </tbody>
                    </table>
            </div>
        </>
     );
}

export default AppointmentDetails;