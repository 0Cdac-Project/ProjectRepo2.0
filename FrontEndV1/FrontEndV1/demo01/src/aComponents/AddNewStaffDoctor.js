import { NavLink, Outlet } from "react-router-dom";
import "./admin.css";
function AddNewStaffDocter() {
  return (
    <>
      <div className="page-header">
        <h1> Add New Docter or Staff</h1>
      </div>
      <div className="cont1">
      <label for="role" class="label1_1">Select Role:</label>
      <NavLink to="addDoctor"><button className="button-30">Doctor</button></NavLink>
      <NavLink to="addStaff"><button className="button-30">Staff</button></NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default AddNewStaffDocter;
