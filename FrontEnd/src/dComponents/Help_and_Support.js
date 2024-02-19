import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { selectUser } from "../Redux/Reducer/userslice";

const HelpAndSupport = () => {
  const user = useSelector(selectUser);
  var [mes, setMessage] = useState({
    contactId: 0,
    username:user.doctorUsername,
    firstName: user.doctorFirstName,
    lastName: user.doctorLastName,
    email: user.doctorEmail,
    phone: user.doctorMobile,
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
      username:user.doctorUsername,
      firstName: user.doctorFirstName,
      lastName: user.doctorLastName,
      email: user.doctorEmail,
      phone: user.doctorMobile,
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
          <li><strong>Q: How do I access patient records?</strong></li>
                <li>To access patient records, simply log in to your account and navigate to the "Patient Records" section. From there, you can search for patients by name, ID, or any other relevant criteria.</li>
    
                <li><strong>Q: How can I update patient information?</strong></li>
                <li>To update patient information, locate the patient's record and click on the "Edit" button. You'll then be able to modify the necessary fields such as demographics, medical history, and treatment plans.</li>
    
                <li><strong>Q: What features are available for managing appointments?</strong></li>
                <li>Our hospital management system allows you to schedule, reschedule, and cancel appointments effortlessly. You can also set appointment reminders and view your schedule in a convenient calendar format.</li>       
                
    
                <li><strong>Q:How can I prescribe medications and treatments using the system?</strong></li>
                <li>Prescribing medications and treatments is simple. Just select the patient, click on the "Prescribe" button, and fill out the prescription details including dosage, frequency, and duration. You can also add special instructions if needed.</li>
    
                <li><strong>Q:Is it possible to communicate with other healthcare professionals within the system?</strong></li>
                <li>Yes, you can communicate securely with other healthcare professionals using the messaging feature. Simply select the recipient, compose your message, and send it. You can also attach relevant files or images if necessary.</li>
    
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
