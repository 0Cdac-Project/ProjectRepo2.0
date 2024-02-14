import axios from "axios";
import { useState } from "react";

// insert the accountant_id here at the end of the link
const url = "http://localhost:8080/api/v1/bills/managementId/3";
function PatientsBill() {

    const [bills, setBills] = useState([])
    const getBills = () =>{
        axios
            .get(url)
            .then((response)=>{
                setBills(response.data);
                console.log(bills);
            })
    }

    const totalBill = (a, b) => {
        return a+b;
    }

    const getBedFees = (charge, category)=>{
        if(category==="In"){
            return charge;
        }
        return 0;
    }
    
    return ( 
        <>
            <div className="page-header">
                <h1>Patient Bill Details</h1>
                <button className="button-30" onClick={getBills}>show data</button>
            </div>
            <div className="table-responsive">
                <table className="fl-table">
                    <thead>
                        <th>Bill Id</th>
                        <th>Patient Name</th>
                        <th>Doctor Name</th>
                        <th>Medical Condition</th>
                        <th>Appointment Date</th>
                        <th>Bill Date</th>
                        <th>Doctor fees</th>
                        <th>Ward fee</th>
                        <th>Total bill</th>
                    </thead>
                    <tbody>
                        {bills.map((res)=>{
                            return (
                                <tr key={res.billID}>
                                    <td>{res.billID}</td>
                                    <td>{res.appointment.patient.patientFirstName+" "+res.appointment.patient.patientLastName}</td>
                                    <td>{res.appointment.doctor.doctorFirstName+" "+res.appointment.doctor.doctorLastName}</td>
                                    <td>{res.appointment.medicalCondition}</td>
                                    <td>{res.appointment.appointmentDateTime}</td>
                                    <td>{res.billDateTime}</td>
                                    <td>{res.appointment.doctor.doctorFees}</td>
                                    <td>{getBedFees(res.bed.wardBedCharge, res.appointment.patient.patientCategory)}</td>
                                    <td>{totalBill(res.appointment.doctor.doctorFees,getBedFees(res.bed.wardBedCharge, res.appointment.patient.patientCategory))}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
     );
}

export default PatientsBill;