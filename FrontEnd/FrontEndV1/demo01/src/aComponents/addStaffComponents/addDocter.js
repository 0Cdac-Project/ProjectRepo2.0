function addDocter() {
    return (<>
          <div className="container-fluid">
    <form action="/submit-doctor" method="post">
      <div className="row">
      <div className="col-4">
      <label className="label1_1">Username:</label>
        <input
          type="text"
          id="doctorUsername"
          name="doctorUsername"
          maxLength="50"
        />
        <br />

        <label className="label1_1" >Password:</label>
        <input
          type="password"
          id="doctorPassword"
          name="doctorPassword"
          maxLength="50"
        />
        <br />

        <label className="label1_1">First Name:</label>
        <input
          type="text"
          id="doctorFirstName"
          name="doctorFirstName"
          required
          maxLength="50"
        />
        <br />

        <label className="label1_1">Last Name:</label>
        <input
          type="text"
          id="doctorLastName"
          name="doctorLastName"
          required
          maxLength="50"
        />
        <br />

        <label className="label1_1">Date of Birth:</label>
        <input type="date" id="doctorDob" name="doctorDob" required />
        <br />

        <label className="label1_1">Gender:</label>
        <select id="doctorGender" name="doctorGender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <br />

        <label className="label1_1">Mobile:</label>
        <input
          type="text"
          id="doctorMobile"
          name="doctorMobile"
          maxLength="15"
        />
        <br />

        <label className="label1_1">Email:</label>
        <input
          type="email"
          id="doctorEmail"
          name="doctorEmail"
          required
          maxLength="100"
        />
        <br />

        <label className="label1_1">Emergency Contact:</label>
        <input
          type="text"
          id="doctorEmergencyContact"
          name="doctorEmergencyContact"
          maxLength="15"
        />
        <br />
        </div>
        <div className="col-4">
        <label className="label1_1">Nationality:</label>
        <input
          type="text"
          id="doctorNationality"
          name="doctorNationality"
          maxLength="50"
        />
        <br />

        <label className="label1_1">Address:</label>
        <input
          type="text"
          id="doctorAddress"
          name="doctorAddress"
          maxLength="250"
        />
        <br />

        <label className="label1_1">Government ID:</label>
        <input
          type="text"
          id="doctorGovtID"
          name="doctorGovtID"
          maxLength="20"
        />
        <br />

        <label className="label1_1">Passport:</label>
        <input
          type="text"
          id="doctorPassport"
          name="doctorPassport"
          maxLength="20"
        />
        <br />
        <label className="label1_1">Marital Status:</label>
        <select id="doctorMaritalStatus" name="doctorMaritalStatus">
          <option value="Male">Married</option>
          <option value="Female">Unmarried</option>
          <option value="Other">Divorced</option>
        </select>
        <br />

        <label className="label1_1">Qualification:</label>
        <input
          type="text"
          id="doctorQualification"
          name="doctorQualification"
          maxLength="100"
        />
        <br />

        <label className="label1_1">Department:</label>
        <input
          type="text"
          id="doctorDepartment"
          name="doctorDepartment"
          maxLength="50"
        />
        <br />

        <label className="label1_1">Designation:</label>
        <input
          type="text"
          id="doctorDesignation"
          name="doctorDesignation"
          maxLength="50"
        />
        <br />
        </div>
        <div className="col-4">
        <label className="label1_1">Speciality:</label>
        <input
          type="text"
          id="doctorSpeciality"
          name="doctorSpeciality"
          maxLength="50"
        />
        <br />

        <label className="label1_1">Experience:</label>
        <input
          type="number"
          id="doctorExperience"
          name="doctorExperience"
        />
        <br />

        <label className="label1_1">Availability:</label>
        <input
          type="text"
          id="doctorAvailability"
          name="doctorAvailability"
          maxLength="50"
        />
        <br />

        <label className="label1_1">Shifts:</label>
        <input type="number" id="doctorShifts" name="doctorShifts" />
        <br />

        <label className="label1_1">Salary:</label>
        <input type="number" id="doctorSalary" name="doctorSalary" />
        <br />

        <label className="label1_1">Fees:</label>
        <input type="number" id="doctorFees" name="doctorFees" />
        <br />

        <label className="label1_1">Photograph:</label>
        <input
          type="text"
          id="doctorPhotograph"
          name="doctorPhotograph"
          maxLength="250"
        />
        <br />

        <label className="label1_1">Hire Date:</label>
        <input
          type="date"
          id="doctorHireDate"
          name="doctorHireDate"
          required
        />
        <br />
      </div>
      <br/>
      <div className="col-4"></div>
      <div className="col-4">
        <label className="label1_1"></label>
        <input className="button-30" type="submit" id="submitBtn" value="Submit" />
      </div>
      <div className="col-4"></div>
      </div>
    </form>
  </div>
  </>);
}

export default addDocter;