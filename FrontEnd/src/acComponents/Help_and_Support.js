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
              <strong>
                Q:How do I manage patient billing and invoicing using the
                system?
              </strong>
            </li>
            <li>
              To manage patient billing and invoicing, navigate to the "Billing"
              section of the system. From there, you can generate invoices,
              record payments, and track outstanding balances for patients.
            </li>

            <li>
              <strong>
                Q:Can I generate financial reports and statements with the
                system?
              </strong>
            </li>
            <li>
              Yes, the system allows you to generate various financial reports
              and statements. Access the "Reports" section and select the
              desired report type (e.g., income statement, balance sheet) to
              view or download the financial data.
            </li>

            <li>
              <strong>
                Q:How can I reconcile financial transactions and accounts within
                the system?
              </strong>
            </li>
            <li>
              Financial transactions and accounts reconciliation can be done in
              the "Accounting" or "Financial Management" section. Use the
              provided tools to reconcile bank statements, track expenses, and
              ensure accuracy in financial records.
            </li>

            <li>
              <strong>
                Q:Is there a feature to manage payroll and employee expenses?
              </strong>
            </li>
            <li>
              Yes, the system includes functionality to manage payroll and
              employee expenses. Navigate to the "Payroll" or "Employee
              Management" section to process payroll, track employee hours, and
              manage reimbursements.
            </li>

            <li>
              <strong>
                Q:What steps should I follow to input and track vendor payments?
              </strong>
            </li>
            <li>
              To input and track vendor payments, go to the "Accounts Payable"
              section. Enter vendor invoices, schedule payments, and reconcile
              vendor accounts to ensure timely and accurate payments.
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
