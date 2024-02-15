import { NavLink, Outlet } from "react-router-dom";
import "./admin.css";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../Redux/Reducer/textboxslice";

function DoctorStaffDetails() {
  const value1 = useSelector(state => state.textbox.value);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setValue(event.target.value));
  };
  return (
    <>
      <div className="page-header">
        <h1> Doctor - Staff Details</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <label  className="label1_1">
              Select Role:
            </label>
            <NavLink to="showDoctor">
              <button className="button-30">Doctor</button>
            </NavLink>
            <NavLink to="showStaff">
              <button className="button-30">Staff</button>
            </NavLink>
          </div>
          <div className="col-2">
            <label  className="label1_1">
              Search User By Username/FirstName:
            </label>
          </div>
          <div className="col-2">
            <input type="text" name="finduser" placeholder="Search" value={value1} onChange={handleChange}/>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default DoctorStaffDetails;
