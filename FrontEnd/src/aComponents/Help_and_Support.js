import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const HelpAndSupport = () => {
  var [mes, setMessage] = useState({
    contactId: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    submissionTime: null,
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
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      submissionTime: null
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
          toast.success('Successfully registered the user')
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
            <li>
              <strong>
                Q:How do I manage user accounts and permissions within the
                system?
              </strong>
            </li>
            <li>
              To manage user accounts and permissions, navigate to the "User
              Management" section. From there, you can add new users, edit
              existing user profiles, and assign appropriate permissions based
              on roles and responsibilities.
            </li>

            <li>
              <strong>
                Q:Can I customize settings and configurations to tailor the
                system to our hospital's specific needs?
              </strong>
            </li>
            <li>
              Yes, the system provides options htmlFor customization to tailor
              settings and configurations according to your hospital's specific
              requirements. Access the "Settings" or "Configuration" section to
              modify parameters such as appointment slots, billing codes, and
              system preferences.
            </li>

            <li>
              <strong>Q:How do I monitor system usage and perhtmlFormance?</strong>
            </li>
            <li>
              System usage and perhtmlFormance can be monitored through the
              "Dashboard" or "Analytics" section. View real-time metrics, such
              as user activity, patient volumes, and system uptime, to track
              perhtmlFormance and identify areas htmlFor improvement.
            </li>

            <li>
              <strong>
                Q:Is there a feature to manage inventory and supplies within the
                hospital?
              </strong>
            </li>
            <li>
              Yes, the system includes functionality to manage inventory and
              supplies. Navigate to the "Inventory Management" or "Supply Chain"
              section to track stock levels, place orders, and manage vendor
              relationships.
            </li>

            <li>
              <strong>
                Q:What steps should I follow to generate financial reports and
                statements?
              </strong>
            </li>
            <li>
              Financial reports and statements can be generated in the
              "Financial Management" or "Accounting" section. Select the desired
              report type (e.g., income statement, balance sheet) and specify
              the reporting period to view or download the financial data.
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
