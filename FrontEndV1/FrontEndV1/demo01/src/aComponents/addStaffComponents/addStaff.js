function addDocter() {
  return (
    <>
      <div class="container-fluid">
        <form action="/submit" method="post">
          <div class="div1_2">
            <label class="label1_1" for="role">Management Category:</label>
            <select id="role" name="role">
              <option value="Admin">Admin</option>
              <option value="Accountant">Accountant</option>
              <option value="Receptionist">Receptionist</option>
            </select>

            <label class="label1_1" for="managementUsername">Username:</label>
            <input
              type="text"
              id="managementUsername"
              name="managementUsername"
              required
              maxlength="50"
            />
            <br />

            <label class="label1_1" for="managementPassword">Password:</label>
            <input
              type="password"
              id="managementPassword"
              name="managementPassword"
              required
              maxlength="50"
            />
            <br />

            <label class="label1_1" for="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              maxlength="50"
            />
            <br />

            <label class="label1_1" for="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              maxlength="50"
            />
            <br />

            <label class="label1_1" for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" required />
            <br />

            <label class="label1_1" for="gender">Gender:</label>
            <select id="gender" name="gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <br />

            <label class="label1_1" for="mobile">Mobile:</label>
            <input type="text" id="mobile" name="mobile" maxlength="15" />
            <br />
            </div>

          <div class="div2_2">
            <label class="label1_1" for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              maxlength="100"
            />
            <br />
            
            <label class="label1_1" for="address">Address:</label>
            <input type="text" id="address" name="address" maxlength="250" />
            <br />

            <label class="label1_1" for="govtID">Government ID:</label>
            <input type="text" id="govtID" name="govtID" maxlength="20" />
            <br />

            <label class="label1_1" for="passport">Passport:</label>
            <input type="text" id="passport" name="passport" maxlength="20" />
            <br />

            <label class="label1_1" for="salary">Salary:</label>
            <input type="number" id="salary" name="salary" />
            <br />

            <label class="label1_1" for="qualification">Qualification:</label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              maxlength="100"
            />
            <br />

            <label class="label1_1" for="hiredate">Hire Date:</label>
            <input type="date" id="hiredate" name="hiredate" required />
            <br />
          </div>
          <br/>
          <div>
            <label class="label1_1" for="submitBtn"></label>
            <input class="button-30" type="submit" id="submitBtn" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default addDocter;
