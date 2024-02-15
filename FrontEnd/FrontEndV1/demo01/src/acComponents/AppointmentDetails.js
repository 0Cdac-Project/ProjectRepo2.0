import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/Reducer/userslice";

function AppointmentDetails() {
    const user = useSelector(selectUser);
    const url = `http://localhost:8080/api/v1/bills/managementId/${user.managementID}`;
    const [appointments, setAppointments] = useState([]);

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
                <button className="button-30" onClick={getAppoints}>show appointments</button>
            </div>
            <div className="table-responsive">
                    <table className="fl-table">
                        <thead>
                            <th>Id</th>
                            <th>Appointment Date</th>
                            <th>Patient Name</th>
                            <th>Medical condition</th>
                            <th>Medication</th>
                            <th>Doctor Name</th> 
                            <th>Patient Email</th> 
                            <th>Patient Contact</th> 
                            <th>Patient Governement Id</th>
                        </thead>
                        <tbody>
                            {appointments.map((res) => {
                                return (
                                <tr key={res.appointment.appointmentID}>
                                    <td>{res.appointment.appointmentID}</td>
                                    <td>{res.appointment.appointmentDateTime}</td>
                                    <td>{res.appointment.patient.patientFirstName+" "+res.appointment.patient.patientLastName}</td>
                                    <td>{res.appointment.doctor.doctorFirstName + " " +res.appointment.doctor.doctorLastName}</td>
                                    <td>{res.appointment.medicalCondition}</td>
                                    <td>{res.appointment.medication}</td>
                                    <td>{res.appointment.patient.patientEmail}</td>
                                    <td>{res.appointment.patient.patientMobile}</td>
                                    <td>{res.appointment.patient.patientGovtID}</td>
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