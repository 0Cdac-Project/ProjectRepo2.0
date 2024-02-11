import { NavLink, Outlet } from "react-router-dom";
import "./admin.css";
function DoctorStaffDetails() {
    return ( 
    <>
        <div className="page-header">
        <h1> Doctor - Staff Details</h1>
        </div>
      <div className="cont1">
      <label for="role" class="label1_1">Select Role:</label>
      <NavLink to="showDoctor"><button className="button-30">Doctor</button></NavLink>
      <NavLink to="showStaff"><button className="button-30">Staff</button></NavLink>
      </div>
      <Outlet />
    </>
     );
}

export default DoctorStaffDetails;
