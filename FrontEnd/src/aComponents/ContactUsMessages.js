import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function ContactUsMessages() {
  var [messages, setMessages] = useState([]);
  var [message, setMessage] = useState({
    contactId: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    submissionTime: null
  });

  useEffect(() => {
    getContactUsMessage();
  }, []);

  const urlContactUs = "http://localhost:8080/api/v1/contactus/findAll";

  const getContactUsMessage = () => {
    axios
      .get(urlContactUs)
      .then((res) => {
        setMessages(res.data);
        console.log(messages);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="page-header mb-2">
        <h1> Contact Us Messages</h1>
      </div>
      <div className="container">
        <div class="accordion" id="accordionExample">
        {messages.map((res, index) => {
  const accordionId = `accordion-${index}`; // Unique ID for each accordion item
  const collapseId = `collapse-${index}`; // Unique ID for each accordion collapse

  return (
    <div className="accordion-item" key={index}>
      <h2 className="accordion-header" id={`heading-${index}`}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded="true"
          aria-controls={collapseId}
        >
         <b> Message #{res.contactId}</b>
        </button>
      </h2>
      <div
        id={collapseId}
        className="accordion-collapse collapse"
        aria-labelledby={`heading-${index}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <strong>Name - </strong>
          {res.firstName} {res.lastName}
          <strong>Message - </strong>
          {res.message}
          <strong>Message Date - Time </strong>
          {res.submissionTime.substring(0,10)} {res.submissionTime.substring(11,19)}
          <code>
            Email - <a href={`mailto:${res.email}`}>{res.email}</a> | Contact Number - {res.phone}
          </code>
        </div>
      </div>
    </div>
  );
})}

        </div>
      </div>
    </>
  );
}

export default ContactUsMessages;
