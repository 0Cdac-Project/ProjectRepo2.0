import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/Reducer/userslice";

function Bills() {
    const user = useSelector(selectUser);
    const [bills, setBills] = useState([])
    const [appointmentHistory, setAppointmentHistory] = useState([]);
    // const [searchText, setSearchText] = useState('');
    const urlBills = "http://localhost:8080/api/v1/bills";
    const urlHistory = "http://localhost:8080/api/v1/appointments";

    useEffect(() => {
        if (user && user.patientID) {
            axios.get(urlHistory + `/by_patient/${user.patientID}`)
                .then((result) => {
                    // console.log(result);
                    // console.log(result.data.length)
                    setAppointmentHistory(result.data);
                    for(var i=0; i<result.data.length; i++) {
                        // console.log(result.data[i].appointmentID);
                        getBillData(result.data[i].appointmentID);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [user]);

    const getBillData = (appointmentID) => {
        // console.log(appointmentID);
        axios.get(urlBills + `/appointment_id/${appointmentID}`)
            .then((result) => {
                console.log(result);
                setBills(result.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }



    // const getBills = () =>{
    //     axios.get(url + `/patient_id/${user.patientID}`).then((response) => {
    //         setBills(response.data);
    //         console.log(bills);
    //     });
    // }

    const totalBill = (a, b) => {
        return a+b;
    }

    const getBedFees = (charge, category) => {
        if(category==="In"){
            return charge;
        }
        return 0;
    }

    // const onSearch = (args) => {
    //     setSearchText(args.target.value);
    // }

    return ( 
        <>
            <div className="page-header">
                <h1>Bills</h1>
            </div>
            <br></br>

        <div className="container-fluid">
            <div className="table-responsive">
                <table className="table table-secondary table-borderless">
                    <tbody>
                        <tr>
                            <td rowSpan={3}>
                                {/* <div>
                                    <img src={process.env.PUBLIC_URL + 'Image.jpg'} style={{"width": "95px", "marginLeft": "15px"}}/>
                                </div> */}
                            </td>
                            <td>Patient: {user.patientFirstName}</td>
                            <td>Bill id: DAC2023</td>
                        </tr>
                        <tr>
                            <td>Patient id: {user.patientID}</td>
                            <td>Bill date: 01-01-2024</td>
                        </tr>
                        <tr>
                            <td>Date of service: 30-12-2023</td>
                            <td>Amount due: 60000</td>
                        </tr>
                    </tbody>
                </table>
                <div className="bg-secondary-subtle rounded" style={{"paddingBlock": "5px"}}>
                    <p style={{"paddingLeft": "10px"}}>Dear {user.patientFirstName}:</p>
                    <p style={{"paddingLeft": "10px"}}>Thank you for selecting Amoeba hospital for your health care services. For your records, below is a summary of charges for this account.</p>
                </div>
                <br/>
            </div>
            <div className="table-responsive">
            <table className="table table-bordered">
                    <thead className="table-secondary">
                        <tr className="text-center">
                        <th style={{"width": "12%"}}>Services</th>
                            <th style={{"width": "40%"}}>Account Summary</th>
                            <th style={{"width": "12%"}}>Total Charges</th>
                            <th style={{"width": "12%"}}>Total Adjustment</th>
                            <th style={{"width": "12%"}}>Total Payments</th>
                            <th style={{"width": "12%"}}>Patient Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Physician</td>
                            <td>
                                <p className="fst-italic">John K., MD</p>
                                <p>Anesthesia, Open Heart Surgery</p>
                            </td>
                            <td className="text-end align-middle">500000</td>
                            <td className="text-end align-middle">350000</td>
                            <td className="text-end align-middle">100000</td>
                            <td className="text-end align-middle">50000</td>
                        </tr>
                        <tr>
                            <td>Hospital</td>
                            <td>
                                <p>Emergency Room</p>
                                <p>EKG/ECG</p>
                            </td>
                            <td className="text-end align-middle">20000</td>
                            <td className="text-end align-middle">0</td>
                            <td className="text-end align-middle">20000</td>
                            <td className="text-end align-middle">0</td>
                        </tr>
                        <tr>
                            <td>Pharmacy</td>
                            <td>
                                <p>Sterile Supplies</p>
                                <p>Anesthesia</p>
                                <p></p>
                            </td>
                            <td className="text-end align-middle">25000</td>
                            <td className="text-end align-middle">5000</td>
                            <td className="text-end align-middle">10000</td>
                            <td className="text-end align-middle">10000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <center>
                    <div>
                        <button type="button" className="btn btn-outline-danger btn-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-printer" viewBox="0 0 16 16">
                            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                            <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
                            </svg>
                            &nbsp;Print
                        </button>
                    </div>
                </center>
        </div>
        </>    
     );
}

export default Bills;