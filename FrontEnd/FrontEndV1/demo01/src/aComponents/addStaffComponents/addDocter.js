import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function AddDocter() {
  var [doctor, setDoctor] = useState({
    doctorID: 0,
    doctorFirstName: "",
    doctorLastName: "",
    doctorDob: null,
    doctorAge: 0,
    doctorGender: "",
    doctorMobile: "",
    doctorEmergencyContact: "",
    doctorEmail: "",
    doctorNationality: "",
    doctorAddress: "",
    doctorGovtID: "",
    doctorPassport: "",
    doctorMaritalStatus: "",
    doctorQualification: "",
    doctorDepartment: "",
    doctorDesignation: "",
    doctorSpeciality: "",
    doctorExperience: 0,
    doctorAvailability: "",
    doctorShifts: 0,
    doctorSalary: 0,
    doctorFees: 0,
    doctorImage: null,
    doctorUsername: "",
    doctorPassword: "",
    doctorHireDate: null,
  });
  const emailPattern = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  const phonePattern = new RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  );
  const lengthcheck = new RegExp(/^.{8,20}$/);
  const handleChange = (args) => {
    var copy = { ...doctor };
    copy[args.target.name] = args.target.value;
    setDoctor(copy);
  };
  const url = "http://localhost:8080/api/v1/doctor/add";

  const Reset = () => {
    setDoctor({
      doctorID: null,
      doctorFirstName: "",
      doctorLastName: "",
      doctorDob: null,
      doctorAge: null,
      doctorGender: "",
      doctorMobile: "",
      doctorEmergencyContact: "",
      doctorEmail: "",
      doctorNationality: "",
      doctorAddress: "",
      doctorGovtID: "",
      doctorPassport: "",
      doctorMaritalStatus: "",
      doctorQualification: "",
      doctorDepartment: "",
      doctorDesignation: "",
      doctorSpeciality: "",
      doctorExperience: null,
      doctorAvailability: "",
      doctorShifts: null,
      doctorSalary: "",
      doctorFees: null,
      doctorImage: "",
      doctorUsername: "124",
      doctorPassword: "A123456",
      doctorHireDate: null,
    });
  };

  const addNewDocter = async () => {
    if (doctor.doctorFirstName.length === 0) {
      toast.warning("Enter First Name");
    } else if (doctor.doctorLastName.length === 0) {
      toast.warning("Enter Last Name");
    } else if (doctor.doctorUsername.length === 0) {
      toast.warning("Enter User");
    } else if (doctor.doctorEmail.length === 0) {
      toast.warning("Enter Email");
    } else if (!emailPattern.test(doctor.doctorEmail.length)) {
      toast.warning("Enter Valid Email");
    } else if (doctor.doctorMobile.length === 0) {
      toast.warning("Enter Contact Info");
    } else if (!phonePattern.test(doctor.doctorMobile.length)) {
      toast.warning("Enter Valid Contact Info");
    } else if (doctor.doctorGovtID.length === 0) {
      toast.warning("Enter Government Id Proof");
    } else if (!lengthcheck.test(doctor.doctorGovtID.length)) {
      toast.warning("Enter Valid Contact Info");
    } else if (doctor.doctorQualification.length === "Select Department") {
      toast.warning("Enter Qualification");
    } else if (doctor.doctorDepartment.length === 0) {
      toast.warning("Enter Department");
    } else if (doctor.doctorSalary.length === 0) {
      toast.warning("Enter Salary");
    } else {
      toast.success("hiii");
      console.log(doctor);
      // await axios
      //   .post(url, doctor)
      //   .then((res) => {
      //     if (res.status === 200) {
      //       console.log("Success");
      //       toast.success("Successfully registered the user");
      //       Reset();
      //     } else {
      //       toast.error(res["error"]);
      //     }
      //   })
      //   .catch((err) => {
      //     toast.error(err);
      //   });
    }
  };
  return (
    <>
      <div className="container" id="addDocter">
        <div className="row" style={{ alignItems: "center" }}>
          <div className="col-4">
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="doctorUsername"
                placeholder="Enter Username"
                name="doctorUsername"
                value={doctor.doctorUsername}
                onChange={handleChange}
              />
              <label htmlFor="doctorUsername">Username</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="doctorPassword"
                id="doctorPassword"
                value={doctor.doctorPassword}
                onChange={handleChange}
              />
              <label htmlFor="doctorPassword">Password</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="doctorFirstName"
                placeholder="Enter Username"
                name="doctorFirstName"
                value={doctor.doctorFirstName}
                onChange={handleChange}
              />
              <label htmlFor="doctorFirstName">First Name</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="doctorLastName"
                placeholder="Last Name Here"
                name="doctorLastName"
                value={doctor.doctorLastName}
                onChange={handleChange}
              />
              <label htmlFor="doctorLastName">Last Name</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="date"
                className="form-control"
                id="doctorDob"
                placeholder="DOB Here"
                name="doctorDob"
                value={doctor.doctorDob}
                onChange={handleChange}
              />
              <label htmlFor="doctorDob">Date of Birth</label>
            </div>
            <div className="form-floating mb-2">
              <select
                className="form-select"
                id="doctorGender"
                aria-label="Floating label select example"
                name="doctorGender"
                value={doctor.doctorGender}
                onChange={handleChange}
              >
                <option selected>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <label htmlFor="doctorGender">Gender</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="email"
                className="form-control"
                id="doctorEmail"
                placeholder="Enter Email"
                name="doctorEmail"
                value={doctor.doctorEmail}
                onChange={handleChange}
              />
              <label htmlFor="doctorEmail">Email</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="doctorMobile"
                placeholder="Contact Info Here"
                name="doctorMobile"
                value={doctor.doctorMobile}
                onChange={handleChange}
              />
              <label htmlFor="doctorMobile">Contact</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="doctorEmergencyContact"
                placeholder="Contact Info Here"
                name="doctorEmergencyContact"
                value={doctor.doctorEmergencyContact}
                onChange={handleChange}
              />
              <label htmlFor="doctorEmergencyContact">Emergency Contact</label>
            </div>
          </div>
          <div className="col-4">
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="doctorNationality"
                placeholder="Nationality Here"
                name="doctorNationality"
                value={doctor.doctorNationality}
                onChange={handleChange}
              />
              <label htmlFor="doctorNationality">Nationality</label>
            </div>
            <div className="form-floating mb-2">
              <textarea
                className="form-control"
                placeholder="Address here"
                id="doctorAddress"
                style={{ height: "100px" }}
                name="doctorAddress"
                value={doctor.doctorAddress}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="doctorAddress">Address</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="doctorGovtID"
                placeholder="Govt Id Here"
                name="doctorGovtID"
                value={doctor.doctorGovtID}
                onChange={handleChange}
              />
              <label htmlFor="doctorGovtID">Government Id</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="doctorPassport"
                placeholder="Passport Here"
                name="doctorPassport"
                value={doctor.doctorPassport}
                onChange={handleChange}
              />
              <label htmlFor="doctorPassport">Passport</label>
            </div>
            <div className="form-floating mb-2">
              <select
                className="form-select"
                id="doctorMaritalStatus"
                aria-label="Floating label select example"
                name="doctorMaritalStatus"
                value={doctor.doctorMaritalStatus}
                onChange={handleChange}
              >
                <option selected>Select Marrital Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
              </select>
              <label htmlFor="doctorMaritalStatus">Marital Status</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="doctorQualification"
                placeholder="Qualification Here"
                name="doctorQualification"
                value={doctor.doctorQualification}
                onChange={handleChange}
              />
              <label htmlFor="doctorQualification">Qualification</label>
            </div>
            <div className="form-floating mb-2">
              <select
                className="form-select"
                id="doctorDepartment"
                aria-label="Floating label select example"
                name="doctorDepartment"
                value={doctor.doctorDepartment}
                onChange={handleChange}
              >
                <option selected>Select Department</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Oncology">Oncology</option>
                <option value="Neurology">Neurology</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Obstetrics and Gynecology">
                  Obstetrics and Gynecology
                </option>
                <option value="Emergency Medicine">Emergency Medicine</option>
                <option value="Internal Medicine">Internal Medicine</option>
                <option value="Surgery">Surgery</option>
                <option value="Radiology">Radiology</option>
              </select>
              <label htmlFor="doctorDepartment">Department</label>
            </div>
            <div className="form-floating mb-2">
              <select
                className="form-select"
                id="doctorDesignation"
                aria-label="Floating label select example"
                name="doctorDesignation"
                value={doctor.doctorDesignation}
                onChange={handleChange}
              >
                <option selected>Select Designation</option>
                <option value="Consultant">Consultant</option>
                <option value="Specialist">Specialist</option>
                <option value="Attending Physician">Attending Physician</option>
                <option value="Resident Physician">Resident Physician</option>
              </select>
              <label htmlFor="doctorDesignation">Designation</label>
            </div>
          </div>
          <div className="col-4">
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="doctorSpeciality"
                placeholder="Department Here"
                name="doctorSpeciality"
                value={doctor.doctorSpeciality}
                onChange={handleChange}
              />
              <label htmlFor="doctorSpeciality">Speciality</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="doctorExperience"
                placeholder="Experience Here"
                name="doctorExperience"
                value={doctor.doctorExperience}
                onChange={handleChange}
              />
              <label htmlFor="doctorExperience">Experience</label>
            </div>
            <div className="form-floating mb-2">
              <select
                className="form-select"
                id="doctorAvailability"
                aria-label="Floating label select example"
                name="doctorAvailability"
                value={doctor.doctorAvailability}
                onChange={handleChange}
              >
                <option selected>Select Availability</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <label htmlFor="doctorAvailability">Availability</label>
            </div>
            <div className="form-floating mb-2">
              <select
                className="form-select"
                id="doctorShifts"
                aria-label="Floating label select example"
                name="doctorShifts"
                value={doctor.doctorShifts}
                onChange={handleChange}
              >
                <option selected>Select Shifts</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
              </select>
              <label htmlFor="doctorShifts">Shifts</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="number"
                className="form-control"
                id="doctorSalary"
                placeholder="Salary Here"
                name="doctorSalary"
                value={doctor.doctorSalary}
                onChange={handleChange}
              />
              <label htmlFor="doctorSalary">Salary</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="number"
                className="form-control"
                id="doctorFees"
                placeholder="Fees Here"
                name="doctorFees"
                value={doctor.doctorFees}
                onChange={handleChange}
              />
              <label htmlFor="doctorFees">Extra Fees Per Appointment</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="form-control"
                id="doctorImage"
                placeholder="Profile Image Here"
                name="doctorImage"
                value={doctor.doctorImage}
                onChange={handleChange}
              />
              <label htmlFor="doctorImage">
                Profile Image (png/jpeg format)
              </label>
            </div>

            <div className="form-floating mb-2">
              <input
                type="date"
                className="form-control"
                id="doctorHireDate"
                placeholder="Hire Date Here"
                name="doctorHireDate"
                value={doctor.doctorHireDate}
                onChange={handleChange}
              />
              <label htmlFor="doctorHireDate">Hire Date</label>
            </div>
          </div>
          <label for="submit"></label>
          <button
            className="button-30 w-25"
            name="submit"
            id="submit"
            onClick={addNewDocter}
            // style={{alignItems:'center'}}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default AddDocter;
