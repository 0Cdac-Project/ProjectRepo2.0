function addDocter() {
    return (<>
          <div class="container-fluid">
    <form action="/submit-doctor" method="post">
      <div class="div1_1">
      <label class="label1_1" for="doctorUsername">Username:</label>
        <input
          type="text"
          id="doctorUsername"
          name="doctorUsername"
          maxlength="50"
        />
        <br />

        <label class="label1_1" for="doctorPassword">Password:</label>
        <input
          type="password"
          id="doctorPassword"
          name="doctorPassword"
          maxlength="50"
        />
        <br />

        <label class="label1_1" for="doctorFirstName">First Name:</label>
        <input
          type="text"
          id="doctorFirstName"
          name="doctorFirstName"
          required
          maxlength="50"
        />
        <br />

        <label class="label1_1" for="doctorLastName">Last Name:</label>
        <input
          type="text"
          id="doctorLastName"
          name="doctorLastName"
          required
          maxlength="50"
        />
        <br />

        <label class="label1_1" for="doctorDob">Date of Birth:</label>
        <input type="date" id="doctorDob" name="doctorDob" required />
        <br />

        <label class="label1_1" for="doctorGender">Gender:</label>
        <select id="doctorGender" name="doctorGender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <br />

        <label class="label1_1" for="doctorMobile">Mobile:</label>
        <input
          type="text"
          id="doctorMobile"
          name="doctorMobile"
          maxlength="15"
        />
        <br />

        <label class="label1_1" for="doctorEmail">Email:</label>
        <input
          type="email"
          id="doctorEmail"
          name="doctorEmail"
          required
          maxlength="100"
        />
        <br />

        <label class="label1_1" for="doctorEmergencyContact">Emergency Contact:</label>
        <input
          type="text"
          id="doctorEmergencyContact"
          name="doctorEmergencyContact"
          maxlength="15"
        />
        <br />
        </div>
        <div class="div2_1">
        <label class="label1_1" for="doctorNationality">Nationality:</label>
        <input
          type="text"
          id="doctorNationality"
          name="doctorNationality"
          maxlength="50"
        />
        <br />

        <label class="label1_1" for="doctorAddress">Address:</label>
        <input
          type="text"
          id="doctorAddress"
          name="doctorAddress"
          maxlength="250"
        />
        <br />

        <label class="label1_1" for="doctorGovtID">Government ID:</label>
        <input
          type="text"
          id="doctorGovtID"
          name="doctorGovtID"
          maxlength="20"
        />
        <br />

        <label class="label1_1" for="doctorPassport">Passport:</label>
        <input
          type="text"
          id="doctorPassport"
          name="doctorPassport"
          maxlength="20"
        />
        <br />
        <label class="label1_1" for="doctorMaritalStatus">Marital Status:</label>
        <select id="doctorMaritalStatus" name="doctorMaritalStatus">
          <option value="Male">Married</option>
          <option value="Female">Unmarried</option>
          <option value="Other">Divorced</option>
        </select>
        <br />

        <label class="label1_1" for="doctorQualification">Qualification:</label>
        <input
          type="text"
          id="doctorQualification"
          name="doctorQualification"
          maxlength="100"
        />
        <br />

        <label class="label1_1" for="doctorDepartment">Department:</label>
        <input
          type="text"
          id="doctorDepartment"
          name="doctorDepartment"
          maxlength="50"
        />
        <br />

        <label class="label1_1" for="doctorDesignation">Designation:</label>
        <input
          type="text"
          id="doctorDesignation"
          name="doctorDesignation"
          maxlength="50"
        />
        <br />
        </div>
        <div class="div3_1">
        <label class="label1_1" for="doctorSpeciality">Speciality:</label>
        <input
          type="text"
          id="doctorSpeciality"
          name="doctorSpeciality"
          maxlength="50"
        />
        <br />

        <label class="label1_1" for="doctorExperience">Experience:</label>
        <input
          type="number"
          id="doctorExperience"
          name="doctorExperience"
        />
        <br />

        <label class="label1_1" for="doctorAvailability">Availability:</label>
        <input
          type="text"
          id="doctorAvailability"
          name="doctorAvailability"
          maxlength="50"
        />
        <br />

        <label class="label1_1" for="doctorShifts">Shifts:</label>
        <input type="number" id="doctorShifts" name="doctorShifts" />
        <br />

        <label class="label1_1" for="doctorSalary">Salary:</label>
        <input type="number" id="doctorSalary" name="doctorSalary" />
        <br />

        <label class="label1_1" for="doctorFees">Fees:</label>
        <input type="number" id="doctorFees" name="doctorFees" />
        <br />

        <label class="label1_1" for="doctorPhotograph">Photograph:</label>
        <input
          type="text"
          id="doctorPhotograph"
          name="doctorPhotograph"
          maxlength="250"
        />
        <br />

        <label class="label1_1" for="doctorHireDate">Hire Date:</label>
        <input
          type="date"
          id="doctorHireDate"
          name="doctorHireDate"
          required
        />
        <br />
      </div>
      <br/>
      <div>
        <label class="label1_1" for="submitBtn"></label>
        <input class="button-30" type="submit" id="submitBtn" value="Submit" />
      </div>
    </form>
  </div>
  </>);
}

export default addDocter;