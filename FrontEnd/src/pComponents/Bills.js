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

    // useEffect(() => {
    //     let isMounted = true;
    //     if (user && user.patientID) {
    //         axios.get(urlHistory + `/by_patient/${user.patientID}`)
    //             .then((result) => {
    //                 // console.log(result);
    //                 // console.log(result.data.length)
    //                 setAppointmentHistory(result.data);
    //                 for (var i = 0; i < result.data.length; i++) {
    //                     // console.log(result.data[i].appointmentID);
    //                     getBillData(result.data[i].appointmentID);
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.error("Error fetching data:", error);
    //             });
    //     }
    //     return () => {
    //         isMounted = false;
    //     };
    // }, [user]);

    // const getBillData = (appointment_id) => {
    //     console.log(appointment_id);
    //     axios.get(urlBills + `/appointmentId/${appointment_id}`)
    //         .then((result) => {
    //             const billDataArray = [];
    //             // console.log("Successful bill data fetch:", result);
    //             // setBills(result.data);
    //             // setBills(prevBills => [...prevBills, result.data]);
    //             // console.log(result.data[0]);

    //             for (var i = 0; i < result.data.length; i++) {
    //                 if (result.data[i] !== undefined) {
    //                     // setBills(result.data[i]);
    //                     billDataArray.push(result.data[i]);
    //                     // console.log(result.data[i]);
    //                 }
    //             }
    //             setBills(prevBills => [...prevBills, ...billDataArray]);
    //             // console.log(bills[0]);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching data:", error);
    //         });
    // }

    // useEffect(() => {
    //     console.log(bills);
    // }, [bills]);


    // // const getBills = () =>{
    // //     axios.get(url + `/patient_id/${user.patientID}`).then((response) => {
    // //         setBills(response.data);
    // //         console.log(bills);
    // //     });
    // // }

    const totalBill = (docFees, wardFees) => {
        return docFees + wardFees;
    }

    const getBedFees = (charge, category) => {
        if (category === "In") {
            return charge;
        }
        return 0;
    }

    // const onSearch = (args) => {
    //     setSearchText(args.target.value);
    // }

    useEffect(() => {
        let isMounted = true;
    
        if (user && user.patientID) {
            axios.get(urlHistory + `/by_patient/${user.patientID}`)
                .then((result) => {
                    setAppointmentHistory(result.data);
    
                    // Create an array of promises for each bill request
                    const billRequests = result.data.map(appointment => getBillData(appointment.appointmentID));
    
                    // Wait for all bill requests to complete before updating state
                    Promise.all(billRequests)
                        .then(billsDataArray => {
                            const mergedBills = billsDataArray.flat(); // Flatten the array of arrays
                            setBills(mergedBills);
                        })
                        .catch(error => console.error("Error fetching bills:", error));
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
    
        return () => {
            isMounted = false;
        };
    }, [user]);
    
    const getBillData = (appointment_id) => {
        console.log(appointment_id);
    
        return axios.get(urlBills + `/appointmentId/${appointment_id}`)
            .then((result) => {
                const billDataArray = [];
    
                for (var i = 0; i < result.data.length; i++) {
                    if (result.data[i] !== undefined) {
                        billDataArray.push(result.data[i]);
                    }
                }
    
                return billDataArray;
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                return [];
            });
    };
    

    return (
        <>
            <div className="page-header">
                <h1>Bills</h1>
            </div>
            <br></br>

            <div className="container-fluid">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                {bills.map((bill, index) => (
                                       <div className="accordion-item" key={index}>
                                       <h2 className="accordion-header">
                                           <button className={`accordion-button bg-secondary-subtle ${index === 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse-${index}`} aria-expanded="false" aria-controls={`panelsStayOpen-collapse-${index}`}>
                                                Bill Id: {bill.billID}
                                           </button>
                                       </h2>
                                       <div id={`panelsStayOpen-collapse-${index}`} className="accordion-collapse collapse show">
                                           <div className="accordion-body">
                                               <div className="table-responsive">
                                                   <table className="table table-secondary table-borderless">
                                                       <tbody>
                                                           <tr>
                                                               <td rowSpan={3}>
                                                                   {/* <div>
                                                   <img src={process.env.PUBLIC_URL + 'Image.jpg'} style={{"width": "95px", "marginLeft": "15px"}}/>
                                               </div> */}
                                                               </td>
                                                               <td>Patient: {user.patientFirstName} {user.patientLastName}</td>
                                                               <td>Bill id: {bill.billID}</td>
                                                           </tr>
                                                           <tr>
                                                               <td>Patient id: {user.patientID}</td>
                                                               <td>Bill date: {bills.length > 0 ? bill.billDateTime : ""}</td>
                                                           </tr>
                                                       </tbody>
                                                   </table>
                                                   <div className="bg-secondary-subtle rounded" style={{ "paddingBlock": "5px" }}>
                                                       <p style={{ "paddingLeft": "10px" }}>Dear {user.patientFirstName}:</p>
                                                       <p style={{ "paddingLeft": "10px" }}>Thank you for selecting Apollo Hospital for your health care services. For your records, below is a summary of charges for this account.</p>
                                                   </div>
                                                   <br />
                                               </div>
                                               <div className="table-responsive">
                                                   <table className="table table-bordered">
                                                       <thead className="table-secondary">
                                                           <tr className="text-center">
                                                               <th style={{ "width": "12%" }}>Appointment Id</th>
                                                               <th style={{ "width": "40%" }}>Doctor</th>
                                                               <th style={{ "width": "12%" }}>Medical Condition</th>
                                                               <th style={{ "width": "12%" }}>Doctor fees</th>
                                                               <th style={{ "width": "12%" }}>Ward fee</th>
                                                               <th style={{ "width": "12%" }}>Total bill</th>
                                                           </tr>
                                                       </thead>
                                                       <tbody>
                                                           <tr>
                                                               <td>{bill.appointment.appointmentID}</td>
                                                               <td>
                                                                   <p className="fst-italic">{bill.appointment.doctor.doctorFirstName} {bill.appointment.patient.patientLastName}, {bill.appointment.doctor.doctorQualification}</p>
                                                                   <p>{bill.appointment.doctor.doctorSpeciality}</p>
                                                               </td>
                                                               <td className="text-end align-middle">{bill.appointment.medicalCondition}</td>
                                                               <td className="text-end align-middle">{bill.appointment.doctor.doctorFees}</td>
                                                               <td className="text-end align-middle">{getBedFees(bill.bed.wardBedCharge, bill.appointment.patient.patientCategory)}</td>
                                                               <td className="text-end align-middle">{totalBill(bill.appointment.doctor.doctorFees, getBedFees(bill.bed.wardBedCharge, bill.appointment.patient.patientCategory))}</td>
                                                           </tr>
                                                       </tbody>
                                                   </table>
                                               </div>
                                               {/* <center>
                                                   <div>
                                                       <button type="button" className="btn btn-outline-danger btn-lg">
                                                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-printer" viewBox="0 0 16 16">
                                                               <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                                                               <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1" />
                                                           </svg>
                                                           &nbsp;Print
                                                       </button>
                                                   </div>
                                               </center> */}
                                           </div>
                                       </div>
                                   </div>
                ))}
                </div>
            </div>

        </>
    );
}

export default Bills;