import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function ACLauncher() {
  const navigate = useNavigate();
  var logout = ()=>
  {
    window.sessionStorage.removeItem("token");
    navigate("/");
    toast.success("Logged Out Successfully")
  }
  return (
    <>
 <label htmlFor="menu-toggle"/>
      <input type="checkbox" id="menu-toggle" name="menu-toggle" title="menu-toggle" placeholder="menu-toggle"/>
      <div className="sidebar">
        <div className="side-header">
          <h3>
            L<span>ogo</span>
          </h3>
        </div>

        <div className="side-content">
          <div className="profile">
            <div
              className="profile-img bg-img"
              style={{ backgroundImage: "url(http://localhost:3000//Sai.jpg)" }}
            ></div>
            <h5 style={{ color: "whitesmoke" }}>Sainath Ibitwar</h5>
          </div>

          <div className="side-menu">
            <ul className="ps-0">
              <li>
                <NavLink to="dashboard">
                  <span className="las la-home"></span>
                  <small>Dashboard</small>
                </NavLink>
              </li>
              <li>
                <NavLink to="appointmentDetials">
                  <span className="las la-stream"></span>
                  <small>Appointment Details</small>
                </NavLink>
              </li>
              <li>
                <NavLink to="patientBill">
                  <span className="las la-clipboard-list"></span>
                  <small>Patients Bill Details</small>
                </NavLink>
              </li>
              <li>
                <NavLink to="finance" className=" ul-items">
                  <span className="las la-file-invoice-dollar"></span>
                  <small>Hospital Finance</small>
                </NavLink>
              </li>
              <li>
                <NavLink to="help">
                  <span className="las la-question"></span>
                  <small>Help and Support</small>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="main-content">
        <header>
          <div className="header-content">
            <label htmlFor="menu-toggle">
              <span className="las la-bars"></span>
            </label>

            <div className="header-menu">
              <div className="user">
                <NavLink to="profile">
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage:
                        "url(http://localhost:3000/Sai.jpg)",
                    }}
                  ></div>
                </NavLink>

                <span
                  className="las la-power-off"
                  style={{ scale: "2" }}
                  onClick={logout}
                ></span>
              </div>
            </div>
          </div>
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default ACLauncher;
