import { NavLink, Outlet } from "react-router-dom";

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
                        <NavLink to="dashboard" >
                            <span className="las la-home"></span>
                            <small>Dashboard</small>
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
                    <div className="notify">
                        <NavLink to="profile">
                            <span className="las la-user"></span>
                        </NavLink>
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
           <Outlet/>           
        </main>
        
    </div>
    </> );
}

export default pLauncher;