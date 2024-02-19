import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { selectUser } from "../Redux/Reducer/userslice";

const HelpAndSupport = () => {
  const user = useSelector(selectUser);
  var [mes, setMessage] = useState({
    contactId: 0,
    username:user.patientUsername,
    firstName: user.patientFirstName,
    lastName: user.patientLastName,
    email: user.patientEmail,
    phone: user.patientMobile,
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
      username:user.patientUsername,
    firstName: user.patientFirstName,
    lastName: user.patientLastName,
    email: user.patientEmail,
    phone: user.patientMobile,
      message: "",
      submissionTime: new Date
    });
  };

  const addContactUsMessage = async () => {
    if (mes.message.length === 0) {
      toast.warning("Enter Message")
    }
    else{
    await axios
      .post(urlContactUs, mes)
      .then((res) => {
        if (res.status===200) {
          console.log("Success")
          toast.success('Message Sent Successfully')
          Reset();
        } else {
          toast.error(res['error']);
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
          <li><strong>Q:What is brand New General/New Private?</strong><br/>A: A new general patient is one who will be seen by any doctor in the concerned unit.
                A new private patient is one who gets to see a consultant with whom he has booked an appointment for the first time in the hospital .</li>

            <li><strong>Q:How to make new appointments online?</strong><br/>A:Please login our website: **************
            -- Are you a patient -- Book an Appointment -- Proceed -- New patient
            Kindly fill in the details and proceed for appointments choose the department and read the description about the particular department and finally make the payment. Payments can be done through - Net Banking / Debit & Credit card .</li>

            <li><strong>Q: How to make repeat appointments online?</strong><br/>A:Please login our website: **************
            -- Are you a patient -- Book an Appointment -- Proceed -- With Hospital Number
            Please type your Hospital number and Year of Birth. Choose the department using the option frequently visited clinic (or) New Clinic and read the description about the particular department before proceeding for payment.Payment can be done through Net Banking/Debit & Credit card. .</li>

            <li><strong>Q:Is there any charge to get the new registration form?</strong><br/>A:No, you can get the New registration form from the reception (400) at free of cost for new general patients.</li>    
        
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
                <button className="button-30 mt-3" type="submit" onClick={addContactUsMessage}>
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
