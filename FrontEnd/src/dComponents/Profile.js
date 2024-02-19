import { useSelector } from "react-redux";
import { selectUser } from "../Redux/Reducer/userslice";
import { useState } from "react";
import { EditDetails } from "./ProfileComponents/EditDetails";
import { EditPassword } from "./ProfileComponents/EditPassword";
import axios from "axios";
import { toast } from "react-toastify";
function Profile() {
  const user = useSelector(selectUser);
  const [action, setAction] = useState("true");
  const [readOnly, setReadOnly] = useState(true);
  const [currUser, setCurrUser] = useState({
    doctorID: user.doctorID,
    doctorFirstName: user.doctorFirstName,
    doctorLastName: user.doctorLastName,
    doctorPassword:user.doctorPassword,
    doctorUsername:user.doctorUsername,
    doctorDob: user.doctorDob,
    doctorAge: user.doctorAge,
    doctorGender: user.doctorGender,
    doctorMobile: user.doctorMobile,
    doctorEmergencyContact: user.doctorEmergencyContact,
    doctorEmail: user.doctorEmail,
    doctorNationality: user.doctorNationality,
    doctorAddress: user.doctorAddress,
    doctorGovtID: user.doctorGovtID,
    doctorPassport: user.doctorPassport,
    doctorMaritalStatus: user.doctorMaritalStatus,
    doctorQualification: user.doctorQualification,
    doctorDepartment: user.doctorDepartment,
    doctorDesignation: user.doctorDesignation,
    doctorSpeciality: user.doctorSpeciality,
    doctorExperience: user.doctorExperience,
    doctorAvailability: user.doctorAvailability,
    doctorShifts: user.doctorShifts,
    doctorSalary: user.doctorSalary,
    doctorFees: user.doctorFees,
    doctorImage: user.doctorImage,
  });

  var editUserDetails = () => {
    setAction("true");
    setReadOnly(!readOnly);
  };
  var editPassword = () => {
    setAction("false");
  };
  const [image, setImage] = useState(user.doctorImage);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!image) {
      console.error("No image selected");
      return;
    }

    console.log("Selected image:", image.size);
    if (image.size >= 1048576) {
      toast.warning("Image Size Should Be Less Than 1 Mb");
    } else {
      const url = `http://localhost:8080/api/v1/doctor/${currUser.doctorID}/images`;

      const formData = new FormData();
      formData.append("image", image);

      console.log("Form data:", formData);

      try {
        const response = await axios.post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success("Image Updated");
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error(error.data);
      }
    }
  };

  return (
    <>
      <div className="page-header">
        <h1>Admin Profile</h1>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="main-body">
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <div
                        className="bg-img"
                        style={{
                          width: "120px",
                          height: "120px",
                          borderRadius: "50%",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={`data:image/jpeg;base64, ${user.doctorImage}`}
                          alt="Admin"
                          className="rounded-circle"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="mt-3">
                        <h4>
                          {currUser.doctorFirstName} {currUser.doctorLastName}
                        </h4>
                        <p className="text-muted font-size-sm">
                          Username - {currUser.doctorUsername}
                        </p>
                        <button className="button-30" onClick={editUserDetails}>
                          Edit Profile
                        </button>
                        <button className="button-30" onClick={editPassword}>
                          Change Password
                        </button>
                        <form onSubmit={handleFormSubmit}>
                          <input
                            type="file"
                            onChange={handleImageChange}
                            className="form-control"
                          />
                          <button type="submit" className="button-30">
                            Update Image
                          </button>
                        </form>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-globe me-2 icon-inline"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                          </svg>
                          Email
                        </h6>
                        <span className="text-secondary">
                          {currUser.doctorEmail}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-github me-2 icon-inline"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                          Phone
                        </h6>
                        <span className="text-secondary">
                          {currUser.doctorMobile}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {action == "true" ? (
                <EditDetails readonly={readOnly} />
              ) : (
                <EditPassword />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
