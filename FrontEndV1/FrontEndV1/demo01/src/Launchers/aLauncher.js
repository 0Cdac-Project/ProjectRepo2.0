import { Link, Routes } from "react-router-dom";
import Dashboard from "../aComponents/Dashboard";
import Patient from "../aComponents/Patient";
import HelpAndSupport from "../aComponents/Help_and_Support";
import Profile from "../aComponents/Profile";
import ProtectedRoute from "../aComponents/ProtectedRoute";
import AddNew from "../aComponents/AddNewStaffDoctor";
import StaffDetails from "../aComponents/StaffDetails";
import Bed from "../aComponents/Bed";
import Finances from "../aComponents/Finances";
import ContactUsMessages from "../aComponents/ContactUsMessages";

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
                        <Link to="/admin/dashboard" className="active ul-items">
                            <span className="las la-home"></span>
                            <small>Dashboard</small>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addNew" className="ul-items">
                            <span className="las la-user-plus"></span>
                            <small>Add Staff/Docter</small>
                        </Link>
                    </li>
                    <li>
                       <Link to="/staff" className="ul-items">
                            <span className="las la-user"></span>
                            <small>Staff Details</small>
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
                            <small>Bed Availabiliy</small>
                        </Link>
                    </li>
                    <li>
                        <Link to="/finances" className=" ul-items">
                            <span className="las la-file-invoice-dollar"></span>
                            <small>Hospital Finances</small>
                        </Link>
                    </li>
                    <li>
                       <Link to="/message" className="ul-items">
                            <span className="las la-envelope-open"></span>
                            <small>Contact Us Messages</small>
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
                <ProtectedRoute path="/admin/dashboard" exact component={Dashboard}/>
                <ProtectedRoute path="/addNew" exact component={AddNew}/>
                <ProtectedRoute path="/patients" exact component={Patient}/>
                <ProtectedRoute path="/staff" exact component={StaffDetails}/>
                <ProtectedRoute path="/bed" exact component={Bed}/>
                <ProtectedRoute path="/finances" exact component={Finances}/>
                <ProtectedRoute path="/message" exact component={ContactUsMessages}/>
                <ProtectedRoute path="/help" exact component={HelpAndSupport}/>
                <ProtectedRoute path="/profile" exact component={Profile}/>
            </Routes>
            
        </main>
        
    </div>
    </> );
}

export default pLauncher;