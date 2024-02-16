import { Link, Switch } from "react-router-dom/cjs/react-router-dom.min";
import AppointmentHistory from "./pComponents/Appointment_history";
//import Appointments from "./pComponents/Appointments";
import Dashboard from "./pComponents/Dashboard";
import Doctors from "./pComponents/Doctors";
import Feedback from "./pComponents/Feedback";
import HelpAndSupport from "./pComponents/Help_and_Support";
import Profile from "./pComponents/Profile";
import Bills from "./pComponents/Bills";
import ProtectedRoute from "./pComponents/ProtectedRoute";

function pLauncher() {
    
    return ( <>
   <input type="checkbox" id="menu-toggle"/>
    <div className="sidebar">
        <div className="side-header">
            <h3>L<span>ogo</span></h3>
        </div>
        
        <div className="side-content">
            <div className="profile">
                <div className="profile-img bg-img" style={{backgroundImage: 'url(http://localhost:3300//Image.jpg)'}}></div>
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
                        <Link to="/appointmentHistory" className="ul-items">
                            <span className="las la-user-alt"></span>
                            <small>Appointment History</small>
                        </Link>
                    </li>
                    <li>
                       <Link to="/doctors" className="ul-items">
                            <span className="las la-user"></span>
                            <small>Doctors Page</small>
                        </Link>
                    </li>
                    <li>
                       <Link to="/feedback" className="ul-items">
                            <span className="las la-clipboard-list"></span>
                            <small>Feedback</small>
                        </Link>
                    </li>
                    <li>
                       <Link to="/bills" className="ul-items">
                            <span className="las la-shopping-cart"></span>
                            <small>Billing/invoices</small>
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
            
            <Switch>
                <ProtectedRoute path="/" exact component={Dashboard}/>
                <ProtectedRoute path="/dashboard" exact component={Dashboard}/>
                <ProtectedRoute path="/appointmentHistory" exact component={AppointmentHistory}/>
                <ProtectedRoute path="/doctors" exact component={Doctors}/>
                <ProtectedRoute path="/feedback" exact component={Feedback}/>
                <ProtectedRoute path="/bills" exact component={Bills}/>
                <ProtectedRoute path="/help" exact component={HelpAndSupport}/>
                <ProtectedRoute path="/profile" exact component={Profile}/>
            </Switch>
            
        </main>
        
    </div>
    </> );
}

export default pLauncher;