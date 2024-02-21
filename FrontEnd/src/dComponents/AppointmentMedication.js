import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/Reducer/userslice";
import axios from 'axios'
import Textboxslice from "../Redux/Reducer/textboxslice";
import {toast} from 'react-toastify'

function AppointmentMedication() {
    
    const user = useSelector(selectUser);
    const url = `http://localhost:8080/api/v1/appointments/by_doctor/${user.doctorID}`;
    const [appointments, setAppointments] = useState([]);
    const [appointment, setAppointment] = useState({
        appointmentID:0,
        appointmentDateTime:"",
        medicalCondition:"",
        medication:""
    });
    const [searchText, setSearchText] = useState("");
    const [field, setField] = useState("patient");
  
    const getAppoints = () => {
      console.log(user);
      axios.get(url).then((response) => {
        setAppointments(response.data);
        console.log(appointments);
      });
      var copyAppo = {...appointment};
      copyAppo.appointmentID = 0;
      setAppointment(copyAppo);
    };

    const AddMedication = () =>{
      if(appointment.medication === ""){
        toast.warning("Add Medication First")
      }else{
        axios.put("http://localhost:8080/api/v1/appointments/updateMedication", appointment)
        .then((response) =>{
            toast.success(`Successfully added appointment medication`);
        }) 
        .catch((err)=>{
          toast.success(`not Successful`);
        })
      }
    }

    const InputChange = (args) => {
      var copyAppo = {...appointment};
      copyAppo[args.target.name] = args.target.value;
      setAppointment(copyAppo);
    }
    
  
    const setAppo = (id, appoDateTime, medCond) =>{
      var copyAppo = {...appointment};
      copyAppo.appointmentID = id;
      copyAppo.appointmentDateTime = appoDateTime;
      copyAppo.medicalCondition = medCond;
      setAppointment(copyAppo);
    }

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
        </div>

      {appointment.appointmentID === 0
      
      ?
      <>
      <div>
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
                <th>Appointment Date</th>
                <th>Patient Name</th>
                <th>Medical condition</th>
                <th>
                    Action
                </th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((res, index) => {
                if (searchText === "") {
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
                      <td>
                      <button onClick={()=>{setAppo(res.appointmentID, res.appointmentDateTime, res.medicalCondition)}}>Set Medication</button>
                      </td>
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
                      <td>
                      <button onClick={()=>{setAppo(res.appointmentID)}}>Set Medication</button>
                      </td>
                      </tr>
                    );
                  }
                }
              )}
            </tbody>
          </table>
        </div>
          </>
      :
     <div className="container">
        <div className="table table-responsive">
          <table className="table table-striped table-bordered">
            <tr>
              <td>
                Appointment ID
              </td>
              <td>
                {appointment.appointmentID}
              </td>
            </tr>
            <tr>
              <td>
                Medication : 
              </td>
              <td>
                <textarea name="medication" onChange={InputChange} placeholder="ex. Dolo 650">
                </textarea>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button onClick={AddMedication}>Add Medication</button>
              </td>
            </tr>
          </table>
        </div>
     </div>
    }

        
      </>
    );
}

export default AppointmentMedication;