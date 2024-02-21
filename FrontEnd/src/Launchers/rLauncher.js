import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { selectUser } from "../Redux/Reducer/userslice";
import { useSelector } from "react-redux";
function RLauncher() {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    var logout = ()=>
    {
      window.sessionStorage.removeItem("token");
      window.sessionStorage.removeItem("user");
      navigate("/");
      toast.success("Logged Out Successfully")
    }  
    return ( <>
    <label htmlFor="menu-toggle"/>
      <input type="checkbox" id="menu-toggle" name="menu-toggle" title="menu-toggle" placeholder="menu-toggle"/>
    <div className="sidebar">
        <div className="side-header">
            <h3>L<span>ogo</span></h3>
        </div>
        
        <div className="side-content">
        <div className="profile">
            <div
              className="profile-img bg-img"
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src={`data:image/jpeg;base64, ${user.managementImage}`}
                alt="Admin"
                className="rounded-circle"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <h5 style={{ color: "whitesmoke" }}>{user.managementUsername}</h5>
          </div>

            <div className="side-menu">
            <ul className="ps-0">
                    <li>
                        <NavLink to="dashboard" >
                            <span className="las la-home"></span>
                            <small>Dashboard</small>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="newPatient" >
                            <span className="las la-user-plus"></span>
                            <small>New Patient</small>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="addNewAppointment" >
                            <span className="las la-user-plus"></span>
                            <small>Appointment Booking</small>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="doctors" >
                            <span className="las  la-calendar-day"></span>
                            <small>Doctors Schedule</small>
                        </NavLink>
                    </li>
                    <li>
                       <NavLink to="patients" >
                            <span className="las la-clipboard-list"></span>
                            <small>Patients Details</small>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="bed" className=" ul-items">
                            <span className="las la-procedures"></span>
                            <small>Bed Booking</small>
                        </NavLink>
                    </li>
                    <li>
                       <NavLink to="help" >
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
                      marginRight: "20px",
                      width: "50px",
                      height: "50px",
                    }}
                  >
                    <img
                      src={`data:image/jpeg;base64, ${user.managementImage}`}
                      alt="Admin"
                      className="rounded-circle"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
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
           <Outlet/>           
        </main>
        
    </div>
    </> );
}

export default RLauncher;