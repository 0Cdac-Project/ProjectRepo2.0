import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { selectUser } from "../Redux/Reducer/userslice";

const HelpAndSupport = () => {
  const user = useSelector(selectUser);
  var [mes, setMessage] = useState({
    contactId: 0,
    username: user.managementUsername,
    firstName: user.managementFirstName,
    lastName: user.managementLastName,
    email: user.managementEmail,
    phone: user.managementMobile,
    message: "",
    submissionTime: new Date(),
  });
  const handleChange = (args) => {
    var copy = { ...mes };
    copy[args.target.name] = args.target.value;
    setMessage(copy);
  };
  const urlContactUs = "http://localhost:8080/api/v1/contactus/add";

  const Reset = () => {
    setMessage({
      contactId: 0,
      username: user.managementUsername,
      firstName: user.managementFirstName,
      lastName: user.managementLastName,
      email: user.managementEmail,
      phone: user.managementMobile,
      message: "",
      submissionTime: new Date(),
    });
  };

  const addContactUsMessage = async () => {
    if (mes.message.length === 0) {
      toast.warning("Enter Message");
    } else {
      await axios
        .post(urlContactUs, mes)
        .then((res) => {
          if (res.status === 200) {
            console.log("Success");
            toast.success("Message Sent Successfully");
            Reset();
          } else {
            toast.error(res["error"]);
          }
        })
        .catch((err) => {
          toast.error(err);
        });
    }
  };
  return (
    <>
      <div className="page-header">
        <h1>Help and Support</h1>
      </div>
      <section id="section2">
        <h2 id="h22">Frequently Asked Questions (FAQs)</h2>
        <ul id="ul2">
          <ul>
            <li>
              <strong>Q:How do I check in patients using the system?</strong>
            </li>
            <li>
              To check in patients, log in to the system and navigate to the
              "Check-In" section. Enter the patient's information, such as name,
              appointment time, and reason for visit, then click "Check-In" to
              complete the process.
            </li>

            <li>
              <strong>Q:Can I schedule appointments for patients?</strong>
            </li>
            <li>
              Yes, you can schedule appointments for patients through the
              system. Go to the "Appointments" tab, select the desired date and
              time, and enter the patient's details. Once confirmed, the
              appointment will be added to the schedule.
            </li>

            <li>
              <strong>
                Q:How do I handle patient registrations and demographics
                updates?
              </strong>
            </li>
            <li>
              Patient registrations and demographic updates can be managed under
              the "Patient Information" section. Click on "Register New Patient"
              to add a new patient or select an existing patient to update their
              information.
            </li>

            <li>
              <strong>
                Q:What steps should I follow to verify insurance information?
              </strong>
            </li>
            <li>
              To verify insurance information, navigate to the patient's profile
              and click on the "Insurance Details" tab. Enter the patient's
              insurance information and click "Verify" to confirm coverage.
            </li>

            <li>
              <strong>
                Q:How can I process payments and manage billing using the
                system?
              </strong>
            </li>
            <li>
              Payment processing and billing management are handled in the
              "Billing" section. You can generate invoices, record payments, and
              track outstanding balances for patients.
            </li>
          </ul>
        </ul>

        <h2 id="h22">Contact Us htmlFor Assistance</h2>
        <p id="p2">
          If you have any further questions or need assistance, please feel free
          to contact us using the htmlForm below:
        </p>

        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            value={mes.message}
            onChange={handleChange}
            name="message"
            style={{ height: "100px" }}
          ></textarea>
          <label htmlFor="floatingTextarea2">Enter Message</label>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <button
                className="button-30 mt-3"
                type="submit"
                onClick={addContactUsMessage}
              >
                Submit Message
              </button>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpAndSupport;
