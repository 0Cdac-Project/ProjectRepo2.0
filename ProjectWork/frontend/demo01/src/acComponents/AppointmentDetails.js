import axios from "axios";
import { useState } from "react";
import './accountant.css';

const url = "http://localhost:8080/api/v1/bills/managementId/3";
function AppointmentDetails() {

    const [appointments, setAppointments] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [field, setField] = useState('');

    const getAppoints = ()=>{
        axios
            .get(url)
            .then((response) => {
                setAppointments(response.data);
                console.log(appointments)
        })
        
    }

    const onSearch = (args)=>{
        setSearchText(args.target.value);
    }

    const getDocname = (doctor)=>{
        const name  = doctor.doctorFirstName+" "+doctor.doctorLastName;
        return name.toLowerCase();
    }

    const getPatientname = (patient)=>{
        const name  = patient.patientFirstName+" "+patient.patientLastName;
        return name.toLowerCase();
    }

    return ( 
        <>
            <div className="page-header">
                <h1>Appointments Details of Patient</h1>
                <div className="row">
                    <div className="col-4">
                        <button className="button-30" onClick={getAppoints}>show appointments</button>
                    </div>
                    <div className="col-8">
                        <div className="options">
                            <div className="opt1">
                                <input className="form-check-input" type="radio" name="options" id="patient" value="patient" onClick={()=>setField("patient")}/>
                                <label className="form-check-label" htmlFor="patient">
                                    patient
                                </label>
                            </div>
                            <div className="opt2">
                                <input className="form-check-input" type="radio" name="options" id="doctor" value="doctor" onClick={()=>setField("doctor")}/>
                                <label className="form-check-label" htmlFor="doctor">
                                    doctor
                                </label>
                            </div>
                        </div>
                        <input id="search-box" type="text" value={searchText} onChange={onSearch}/>
                    </div>
                </div>
            </div>
            <div className="table-responsive">
                    <table className="fl-table">
                        <thead>
                            <th>Id</th>
                            <th>Patient Name</th>
                            <th>Medical condition</th>
                            <th>Medication</th>
                            <th>Doctor Name</th>
                            <th>Schedule</th> 
                        </thead>
                        <tbody>
                            {
                            appointments.map((res) => {
                                if(field === ""){
                                    return (
                                        <tr key={res.appointment.appointmentID}>
                                            <td>{res.appointment.appointmentID}</td>
                                            <td>{res.appointment.patient.patientFirstName+" "+res.appointment.patient.patientLastName}</td>
                                            <td>{res.appointment.medicalCondition}</td>
                                            <td>{res.appointment.medication}</td>
                                            <td>{res.appointment.doctor.doctorFirstName+" "+res.appointment.doctor.doctorLastName}</td>
                                            <td>{res.appointment.appointmentDateTime}</td>
                                        </tr>
                                    );
                                }
                                else{
                                    console.log(typeof(field));
                                    if(field === "doctor" && getDocname(res.appointment.doctor).includes(searchText.toLowerCase())){
                                        return (
                                            <tr key={res.appointment.appointmentID}>
                                                <td>{res.appointment.appointmentID}</td>
                                                <td>{res.appointment.patient.patientFirstName+" "+res.appointment.patient.patientLastName}</td>
                                                <td>{res.appointment.medicalCondition}</td>
                                                <td>{res.appointment.medication}</td>
                                                <td>{res.appointment.doctor.doctorFirstName+" "+res.appointment.doctor.doctorLastName}</td>
                                                <td>{res.appointment.appointmentDateTime}</td>
                                            </tr>
                                        );
                                    }
                                    else if(field === "patient" && getPatientname(res.appointment.patient).includes(searchText.toLowerCase())){
                                        return (
                                            <tr key={res.appointment.appointmentID}>
                                                <td>{res.appointment.appointmentID}</td>
                                                <td>{res.appointment.patient.patientFirstName+" "+res.appointment.patient.patientLastName}</td>
                                                <td>{res.appointment.medicalCondition}</td>
                                                <td>{res.appointment.medication}</td>
                                                <td>{res.appointment.doctor.doctorFirstName+" "+res.appointment.doctor.doctorLastName}</td>
                                                <td>{res.appointment.appointmentDateTime}</td>
                                            </tr>
                                        );
                                    }
                                }                           
                            })}
                        </tbody>
                    </table>
            </div>
        </>
     );
}

export default AppointmentDetails;