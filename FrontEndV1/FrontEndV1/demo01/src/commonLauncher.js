import { Link,Routes,Route } from 'react-router-dom';
import AdminDashboard from './Launchers/aLauncher';
import PatientDashboard from './Launchers/pLauncher';
import DoctorDashboard from './Launchers/dLauncher';
import AccountantDashboard from './Launchers/acLauncher';
import ReceptionistDashboard from './Launchers/rLauncher';

function CommonGateway() {
    return ( <>
    <ul className="ps-0">
                    <li>
                        <Link to="/admin">
                            <small>Admin</small>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctor">
                            <small>Doctor</small>
                        </Link>
                    </li>
                    <li>
                       <Link to="/patient">
                            <small>Patient</small>
                        </Link>
                    </li>
                    <li>
                        <Link to="/accountant">
                            <small>Accountant</small>
                        </Link>
                    </li>
                    <li>
                       <Link to="/receptionist">
                            <small>Receptionist</small>
                        </Link>
                    </li>
                </ul>

                <main>
            
            <Routes>
                <Route path="/admin" exact component={AdminDashboard}/>
                <Route path="/patient" exact component={PatientDashboard}/>
                <Route path="/doctor" exact component={DoctorDashboard}/>
                <Route path="/accountant" exact component={AccountantDashboard}/>
                <Route path="/receptionist" exact component={ReceptionistDashboard}/>
            </Routes>
            
        </main>
    </> );
}

export default CommonGateway;