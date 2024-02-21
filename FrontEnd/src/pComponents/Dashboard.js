import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../Redux/Reducer/textboxslice";
import { toast } from "react-toastify";
import { selectUser } from "../Redux/Reducer/userslice";
function Dashboard() {
  const [toggleToBooking, setToggleToBooking] = useState("");
  const user1 = useSelector(selectUser);
  const value1 = useSelector((state) => state.textbox.value);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setValue(event.target.value));
  };

  const [appointment, setAppointment] = useState({
    appointmentId: 0,
    patientID: user1.patientID,
    doctorID: 0,
    medicalCondition: "",
    medication: "",
    appointmentDateTime: "",
  });

  const [doctors, setDoctors] = useState([]);
  const [doctorId, setdoctorId] = useState(0);
  var [doctor, setdoctor] = useState({
    doctorID: 0,
    doctorFirstName: "",
    doctorLastName: "",
    doctorQualification: "",
    doctorDepartment: "",
    doctorAvailability: "",
    doctorShifts: "",
    doctorSalary: "",
    doctorFees: "",
  });

  useEffect(() => {
    getDoctor();
  }, []);

  const urlDoctor = "http://localhost:8080/api/v1/doctor/getAllAvailable";

  const getDoctor = () => {
    axios
      .get(urlDoctor)
      .then((res) => {
        setDoctors(res.data);
        console.log(doctors);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  var formatDate = (date) => {
    const year = String(date.getFullYear()).padStart(4, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const milliseconds = String(date.getMilliseconds()).padStart(3, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  var bookAppo = () => {
     if (appointment.appointmentDateTime == 0) {
      toast.warning("Please select appointment Time");
    } else if (new Date(appointment.appointmentDateTime).getTime() < new Date().getTime()) {
      toast.warning("Please Select Future Date");
    }
    else if (appointment.medicalCondition == "") {
      toast.warning("Please Input Medical Condition");
    } 
    // else if (appointment.medication == "") {
    //   toast.warning("Please input medication");
    // } 
    else {
      var appoDate = new Date(appointment.appointmentDateTime);
      var formattedDate = formatDate(appoDate);
      console.log(appoDate);
      console.log(formattedDate);
      axios
        .post("http://localhost:8080/api/v1/appointments/add", appointment)
        .then((reply) => {
          toast.success("Appointment Booked Successfully");
          window.location.reload();
        })
        .catch((err) => {
          // var x = JSON.parse(err.response.request.response);
          // toast.error(x.error+" "+x.sqlMessage.substring(0,16));
          console.log(err);
        });
    }
  };

  var showDateTime = (args) => {
    let dateTimeValue = args.target.value;
    console.log(dateTimeValue);
  };

  var selectDoctor = (res) => {
    setdoctor(res);
    var copyOfAppointment = { ...appointment };
    copyOfAppointment["doctorID"] = res.doctorID;
    setAppointment(copyOfAppointment);
    console.log(doctor);
  };

  var appointmentValueChange = (event) => {
    setAppointment({ ...appointment, [event.target.name]: event.target.value });
  };

  const [custError, setCustError] = useState("");
  const [patient, setPatient] = useState();

  return (
    <>
      {toggleToBooking == 0 ? (
        <div class="d-grid gap-2">
          <button
            class="btn btn-outline-secondary"
            type="button"
            onClick={() => setToggleToBooking(1)}
          >
            Book Appointment
          </button>
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="2000">
                <img
                  src="http://localhost:3000/images/1.jpg"
                  class="d-block w-100"
                  alt="healthcare_image_1"
                />
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img
                  src="http://localhost:3000/images/2.jpg"
                  class="d-block w-100"
                  alt="healthcare_image_2"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="http://localhost:3000/images/3.jpg"
                  class="d-block w-100"
                  alt="healthcare_image_3"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      ) : doctor.doctorID === 0 ? (
        <div>
          <div className="page-header">
            <h1>Appointments Add New</h1>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-10 mt-2" style={{ textAlign: "right" }}>
                <label className="label1_1">
                  Search User By Doctor Name or Department :
                </label>
              </div>
              <div className="col-2">
                <input
                  type="text"
                  name="finduser"
                  placeholder="Search"
                  value={value1}
                  onChange={handleChange}
                />
              </div>
              <div className="table-responsive">
                <table className="fl-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>doctorQualification</th>
                      <th>doctorDepartment</th>
                      <th>doctorAvailability</th>
                      <th>doctorShifts</th>
                      <th>doctorFees</th>
                      <th>Select Doctor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctors.map((res) => {
                      if (
                        !res.doctorFirstName
                          .toLowerCase()
                          .includes(value1.toLowerCase()) &&
                        !res.doctorUsername
                          .toLowerCase()
                          .includes(value1.toLowerCase()) &&
                        !res.doctorDepartment
                          .toLowerCase()
                          .includes(value1.toLowerCase())
                      ) {
                        return null;
                      } else {
                        return (
                          <tr key={res.doctorID}>
                            <td>{res.doctorID}</td>
                            <td>{res.doctorFirstName}</td>
                            <td>{res.doctorLastName}</td>
                            <td>{res.doctorQualification}</td>
                            <td>{res.doctorDepartment}</td>
                            <td>{res.doctorAvailability}</td>
                            <td>{res.doctorShifts}</td>
                            <td>{res.doctorFees}</td>
                            <td>
                              <button className="button-4"
                                onClick={() => {
                                  selectDoctor(res);
                                }}
                                
                              >
                                Select Doctor
                              </button>
                            </td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="page-header">
            <h1>Appointments Add New</h1>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Patient ID : </td>
                  <td> {user1.patientID}</td>
                </tr>
                <tr>
                  <td> Doctor Name : </td>
                  <td>
                    {" "}
                    {doctor.doctorFirstName + " " + doctor.doctorLastName}{" "}
                  </td>
                </tr>
                <tr>
                  <td> Date & Time of the Appointment : </td>
                  <td>
                    {" "}
                    <input
                      name="appointmentDateTime"
                      onInput={showDateTime}
                      onChange={appointmentValueChange}
                      type="datetime-local"
                    ></input>{" "}
                  </td>
                </tr>
                <tr>
                  <td> Medical Condition : </td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      name="medicalCondition"
                      onChange={appointmentValueChange}
                      placeholder="ex. Artheritis"
                    ></input>{" "}
                  </td>
                </tr>
                {/* <tr>
                  <td> Medication : </td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      name="medication"
                      onChange={appointmentValueChange}
                      placeholder="ex. Dolo 650"
                    ></input>{" "}
                  </td>
                </tr> */}
                <tr>
                  <td colSpan={2}>
                    <button onClick={bookAppo}  className="button-4"> Book Appointment </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );

  // return (
  // <>
  //     <div className="page-header">
  //         <h1>Dashboard</h1>
  //     </div>
  //     <br></br>
  //     <hr></hr>
  //     <center>
  //         <button style={{backgroundColor : "lightblue", color : "black",  borderRadius : "5px", height : "40px", width : "300px", fontSize : "24px"}}>Book New Appointment</button>
  //     </center>
  //     <hr></hr>
  //     <div style={{display : "flex"}}>
  //     <div className="container">
  //         <div className="table-responsive">
  //             <table className="table table-bordered">
  //                 <thead>
  //                     <tr>
  //                         <th colSpan={5} style={{textAlign : "center"}}>
  //                             Previous Appointment History
  //                         </th>
  //                     </tr>
  //                     <tr>
  //                         <th>
  //                             Serial No
  //                         </th>
  //                         <th>
  //                             Date
  //                         </th>
  //                         <th>
  //                             Doctor Name
  //                         </th>
  //                         <th>
  //                             Appointment Query
  //                         </th>
  //                         <th>
  //                             Action
  //                         </th>
  //                     </tr>
  //                 </thead>
  //                 <tbody>
  //                     <tr>
  //                         <td>
  //                             1
  //                         </td>
  //                         <td>
  //                             23/11/23
  //                         </td>
  //                         <td>
  //                             Dr. John Mark
  //                         </td>
  //                         <td>
  //                             Cough and Fever
  //                         </td>
  //                         <td>
  //                             <button className="primary">
  //                                 Follow Up Booking
  //                             </button>
  //                             <button className="primary">
  //                                 FeedBack
  //                             </button>
  //                         </td>
  //                     </tr>
  //                     <tr>
  //                         <td>
  //                             2
  //                         </td>
  //                         <td>
  //                             12/10/23
  //                         </td>
  //                         <td>
  //                             Dr. Alex Chapiro
  //                         </td>
  //                         <td>
  //                             Body Pain
  //                         </td>
  //                         <td>
  //                             <button className="primary">
  //                                 Follow Up Booking
  //                             </button>
  //                             <button className="primary">
  //                                 FeedBack
  //                             </button>
  //                         </td>
  //                     </tr>
  //                     <tr>
  //                         <td>
  //                             3
  //                         </td>
  //                         <td>
  //                             15/09/23
  //                         </td>
  //                         <td>
  //                             Dr. Jason Haywire
  //                         </td>
  //                         <td>
  //                             Tooth Pain
  //                         </td>
  //                         <td>
  //                             <button className="primary">
  //                                 Follow Up Booking
  //                             </button>
  //                             <button >
  //                                 FeedBack
  //                             </button>
  //                         </td>
  //                     </tr>

  //                 </tbody>
  //             </table>
  //         </div>
  //     </div>
  //     {/* <div className="container" style={{backgroundColor : "lightblue", height : "500px"}}>
  //         <h1>2 div</h1>
  //     </div> */}
  //     </div>
  // </>

  //  );
}

export default Dashboard;
