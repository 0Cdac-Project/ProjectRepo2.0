import axios from "axios";
import { useState } from "react";
import './accountant.css'

// insert the accountant_id here at the end of the link
const url = "http://localhost:8080/api/v1/bills/managementId/3";
function PatientsBill() {

    const [bills, setBills] = useState([])
    const [searchText, setSearchText] = useState('');

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
    
    const onSearch = (args)=>{
        setSearchText(args.target.value);
    }

    return ( 
        <>
            <div className="page-header">
                <h1>Patient Bill Details</h1>
                <div className="row">
                    <div className="col-1">
                        <button className="button-30" onClick={getBills}>show data</button>
                    </div>
                    <div className="col-7"></div>
                    <div className="col-2 text-div">
                        <p>Enter appointment id</p>
                    </div>
                    <div className="col-2">
                        <input id="search-box" type="text" value={searchText} onChange={onSearch}/>
                    </div>
                </div>
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
                        {
                            bills.map((bill)=>{
                                if(searchText === ""){
                                    return (
                                        <tr key={bill.billID}>
                                            <td>{bill.billID}</td>
                                            <td>{bill.appointment.patient.patientFirstName+" "+bill.appointment.patient.patientLastName}</td>
                                            <td>{bill.appointment.doctor.doctorFirstName+" "+bill.appointment.doctor.doctorLastName}</td>
                                            <td>{bill.appointment.medicalCondition}</td>
                                            <td>{bill.appointment.appointmentDateTime}</td>
                                            <td>{bill.billDateTime}</td>
                                            <td>{bill.appointment.doctor.doctorFees}</td>
                                            <td>{getBedFees(bill.bed.wardBedCharge, bill.appointment.patient.patientCategory)}</td>
                                            <td>{totalBill(bill.appointment.doctor.doctorFees,getBedFees(bill.bed.wardBedCharge, bill.appointment.patient.patientCategory))}</td>
                                        </tr>
                                    )
                                }
                                else{
                                    if(bill.appointmentId == searchText){
                                        return (
                                        <tr key={bill.billID}>
                                            <td>{bill.billID}</td>
                                            <td>{bill.appointment.patient.patientFirstName+" "+bill.appointment.patient.patientLastName}</td>
                                            <td>{bill.appointment.doctor.doctorFirstName+" "+bill.appointment.doctor.doctorLastName}</td>
                                            <td>{bill.appointment.medicalCondition}</td>
                                            <td>{bill.appointment.appointmentDateTime}</td>
                                            <td>{bill.billDateTime}</td>
                                            <td>{bill.appointment.doctor.doctorFees}</td>
                                            <td>{getBedFees(bill.bed.wardBedCharge, bill.appointment.patient.patientCategory)}</td>
                                            <td>{totalBill(bill.appointment.doctor.doctorFees,getBedFees(bill.bed.wardBedCharge, bill.appointment.patient.patientCategory))}</td>
                                        </tr>)
                                    }
                                }
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
     );
}

export default PatientsBill;