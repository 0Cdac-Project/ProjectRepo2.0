function addDocter() {
  return (
    <>
      <div className="container-fluid">
        <form action="/submit" method="post">
          <div className="div1_2">
            <label className="label1_1" htmlFor="role">Management Category:</label>
            <select id="role" name="role">
              <option value="Admin">Admin</option>
              <option value="Accountant">Accountant</option>
              <option value="Receptionist">Receptionist</option>
            </select>

            <label className="label1_1" htmlFor="managementUsername">Username:</label>
            <input
              type="text"
              id="managementUsername"
              name="managementUsername"
              required
              maxLength="50"
            />
            <br />

            <label className="label1_1" htmlFor="managementPassword">Password:</label>
            <input
              type="password"
              id="managementPassword"
              name="managementPassword"
              required
              maxLength="50"
            />
            <br />

            <label className="label1_1" htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              maxLength="50"
            />
            <br />

            <label className="label1_1" htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              maxLength="50"
            />
            <br />

            <label className="label1_1" htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" required />
            <br />

            <label className="label1_1" htmlFor="gender">Gender:</label>
            <select id="gender" name="gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <br />

            <label className="label1_1" htmlFor="mobile">Mobile:</label>
            <input type="text" id="mobile" name="mobile" maxLength="15" />
            <br />
            </div>

          <div className="div2_2">
            <label className="label1_1" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email1"
              name="email"
              required
              maxLength="100"
            />
            <br />
            
            <label className="label1_1" htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" maxLength="250" />
            <br />

            <label className="label1_1" htmlFor="govtID">Government ID:</label>
            <input type="text" id="govtID" name="govtID" maxLength="20" />
            <br />

            <label className="label1_1" htmlFor="passport">Passport:</label>
            <input type="text" id="passport" name="passport" maxLength="20" />
            <br />

            <label className="label1_1" htmlFor="salary">Salary:</label>
            <input type="number" id="salary" name="salary" />
            <br />

            <label className="label1_1" htmlFor="qualification">Qualification:</label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              maxLength="100"
            />
            <br />

            <label className="label1_1" htmlFor="hiredate">Hire Date:</label>
            <input type="date" id="hiredate" name="hiredate" required />
            <br />
          </div>
          <br/>
          <div>
            <label className="label1_1" htmlFor="submitBtn"></label>
            <input className="button-30" type="submit" id="submitBtn" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default addDocter;
