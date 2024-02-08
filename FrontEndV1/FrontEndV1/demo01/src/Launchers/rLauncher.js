import { Link, Routes } from "react-router-dom";
import Dashboard from "../rComponents/Dashboard";
import Patient from "../rComponents/PatientDetails";
import HelpAndSupport from "../rComponents/Help_and_Support";
import Profile from "../rComponents/Profile";
import ProtectedRoute from "../rComponents/ProtectedRoute";
import Bed from "../rComponents/Bed";
import Doctor from "../rComponents/DoctorSchedule";
import NewAppointment from '../rComponents/NewAppointment';


function pLauncher() {
    
    return ( <>
   <input type="checkbox" id="menu-toggle"/>
    <div className="sidebar">
        <div className="side-header">
            <h3>L<span>ogo</span></h3>
        </div>
        
        <div className="side-content">
            <div className="profile">
                <div className="profile-img bg-img" style={{backgroundImage: 'url(http://localhost:3000//Sai.jpg)'}}></div>
                <h5 style={{color: "whitesmoke"}}>Sainath Ibitwar</h5>
            </div>

            <div className="side-menu">
                <ul className="ps-0">
                    <li>
                        <Link to="/dashboard" className="active ul-items">
                            <span className="las la-home"></span>
                            <small>Dashboard</small>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addNewAppointment" className="ul-items">
                            <span className="las la-user-plus"></span>
                            <small>Appointment Booking</small>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctors" className="ul-items">
                            <span className="las  la-calendar-day"></span>
                            <small>Doctors Schedule</small>
                        </Link>
                    </li>
                    <li>
                       <Link to="/patients" className="ul-items">
                            <span className="las la-clipboard-list"></span>
                            <small>Patients Details</small>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bed" className=" ul-items">
                            <span className="las la-procedures"></span>
                            <small>Bed Booking</small>
                        </Link>
                    </li>
                    <li>
                       <Link to="/help" className="ul-items">
                            <span className="las la-question"></span>
                            <small>Help and Support</small>
                        </Link>
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
                    <div className="notify">
                        <Link to="/profile">
                            <span className="las la-user"></span>
                            {/* <span className="notify"></span> */}
                        </Link>
                    </div>
                    
                    <div className="user">
                        <div className="bg-img" style={{backgroundImage: 'url(1.jpeg)'}}></div>
                        
                        <span className="las la-power-off"></span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </header>
        
        
        <main>
            
            <Routes>
                <ProtectedRoute path="/" exact component={Dashboard}/>
                <ProtectedRoute path="/dashboard" exact component={Dashboard}/>
                <ProtectedRoute path="/doctors" exact component={Doctor}/>
                <ProtectedRoute path="/patients" exact component={Patient}/>
                <ProtectedRoute path="/addNewAppointment" exact component={NewAppointment}/>
                <ProtectedRoute path="/bed" exact component={Bed}/>
                <ProtectedRoute path="/help" exact component={HelpAndSupport}/>
                <ProtectedRoute path="/profile" exact component={Profile}/>
            </Routes>
            
        </main>
        
    </div>
    </> );
}

export default pLauncher;