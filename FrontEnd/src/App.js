import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Home/home";
import ContactUs from "./Home/contactus";
import LoginSignup from "./Home/LoginSignup";
import ProtectedRoute from "./ProtectedRoute";

import AdminLauncher from "./Launchers/aLauncher";
import AdminDashboard from "./aComponents/Dashboard";
import AdminPatient from "./aComponents/Patient";
import AdminHelpAndSupport from "./aComponents/Help_and_Support";
import AdminProfile from "./aComponents/Profile";
import AdminAddNew from "./aComponents/AddNewStaffDoctor";
import AdminStaffDetails from "./aComponents/DoctorStaffDetails";
import AdminBed from "./aComponents/Bed";
import AdminFinances from "./aComponents/Finances";
import AdminContactUsMessages from "./aComponents/ContactUsMessages";
import AddDoctor from "./aComponents/addStaffComponents/addDocter";
import AddStaff from "./aComponents/addStaffComponents/addStaff";
import showDoctorDetails from "./aComponents/showDetailsComponents/showDoctersDetails";
import showStaffDetails from "./aComponents/showDetailsComponents/showStaffDetails";

import DocterLauncher from "./Launchers/dLauncher";
import DocterAppointmentHistory from "./dComponents/Appointment_history";
import DocterDashboard from "./dComponents/Dashboard";
import DocterPatient from "./dComponents/Patient_History";
import DocterHelpAndSupport from "./dComponents/Help_and_Support";
import DocterProfile from "./dComponents/Profile";
import DocterEducationRes from "./dComponents/EducataionResources";

import PatientLauncher from "./Launchers/pLauncher";
import PatientAppointmentHistory from "./pComponents/Appointment_history";
import PatientDashboard from "./pComponents/Dashboard";
import PatientDoctors from "./pComponents/Doctors";
import PatientFeedback from "./pComponents/Feedback";
import PatientHelpAndSupport from "./pComponents/Help_and_Support";
import PatientProfile from "./pComponents/Profile";
import PatientBills from "./pComponents/Bills";

import RecLauncher from "./Launchers/rLauncher";
import RecDashboard from "./rComponents/Dashboard";
import RecPatient from "./rComponents/PatientDetails";
import RecHelpAndSupport from "./rComponents/Help_and_Support";
import RecProfile from "./rComponents/Profile";
import RecBed from "./rComponents/Bed";
import RecDoctor from "./rComponents/DoctorSchedule";
import RecNewAppointment from "./rComponents/NewAppointment";
import RecNewPatient from "./rComponents/NewPatient";

import AccLauncher from "./Launchers/acLauncher";
import AccDashboard from "./acComponents/Dashboard";
import AccPatient from "./acComponents/PatientBill";
import AccHelpAndSupport from "./acComponents/Help_and_Support";
import AccProfile from "./acComponents/Profile";
import AccAppointment from "./acComponents/AppointmentDetails";
import AccFinance from "./acComponents/Finance";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="contactUs" element={<ContactUs />} />
      <Route path="loginSignup" element={<LoginSignup />} />
      <Route element={<ProtectedRoute />}>
        <Route path="admin" element={<AdminLauncher />}>
          <Route path="" element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="addNew" element={<AdminAddNew />}>
            <Route path="addDoctor" element={<AddDoctor />} />
            <Route path="addStaff" element={<AddStaff />} />
          </Route>
          <Route path="patients" element={<AdminPatient />} />
          <Route path="staff" element={<AdminStaffDetails />}>
            <Route path="showDoctor" Component={showDoctorDetails} />
            <Route path="showStaff" Component={showStaffDetails} />
          </Route>
          <Route path="bed" element={<AdminBed />} />
          <Route path="finances" element={<AdminFinances />} />
          <Route path="message" element={<AdminContactUsMessages />} />
          <Route path="help" element={<AdminHelpAndSupport />} />
          <Route path="profile" element={<AdminProfile />} />
        </Route>

        <Route path="doctor" element={<DocterLauncher />}>
          <Route path="" element={<DocterDashboard />} />
          <Route path="dashboard" element={<DocterDashboard />} />
          <Route
            path="appointmentHistory"
            element={<DocterAppointmentHistory />}
          />
          <Route path="patients" element={<DocterPatient />} />
          <Route path="edures" element={<DocterEducationRes />} />
          <Route path="help" element={<DocterHelpAndSupport />} />
          <Route path="profile" element={<DocterProfile />} />
        </Route>

        <Route path="patient" element={<PatientLauncher />}>
          <Route path="" element={<PatientDashboard />} />
          <Route path="dashboard" element={<PatientDashboard />} />
          <Route
            path="appointmentHistory"
            element={<PatientAppointmentHistory />}
          />
          <Route path="doctors" element={<PatientDoctors />} />
          <Route path="feedback" element={<PatientFeedback />} />
          <Route path="bills" element={<PatientBills />} />
          <Route path="help" element={<PatientHelpAndSupport />} />
          <Route path="profile" element={<PatientProfile />} />
        </Route>

        <Route path="receptionist" element={<RecLauncher />}>
          <Route path="" element={<RecDashboard />} />
          <Route path="dashboard" element={<RecDashboard />} />
          <Route path="newPatient" element={<RecNewPatient />} />
          <Route path="doctors" element={<RecDoctor />} />
          <Route path="patients" element={<RecPatient />} />
          <Route path="addNewAppointment" element={<RecNewAppointment />} />
          <Route path="bed" element={<RecBed />} />
          <Route path="help" element={<RecHelpAndSupport />} />
          <Route path="profile" element={<RecProfile />} />
        </Route>

        <Route path="accountant" element={<AccLauncher />}>
          <Route path="" element={<AccDashboard />} />
          <Route path="dashboard" element={<AccDashboard />} />
          <Route path="patientBill" element={<AccPatient />} />
          <Route path="appointmentDetials" element={<AccAppointment />} />
          <Route path="finance" element={<AccFinance />} />
          <Route path="help" element={<AccHelpAndSupport />} />
          <Route path="profile" element={<AccProfile />} />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
