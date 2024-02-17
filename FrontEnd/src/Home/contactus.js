import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
function Contactus() {
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
      submissionTime: null,
    });
  };
  const emailPattern = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  const phonePattern = new RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  );

  const addContactUsMessage = async () => {
    if (mes.firstName.length === 0) {
      toast.warning("Enter FirstName");
    } else if (mes.lastName.length === 0) {
      toast.warning("Enter LastName");
    } else if (mes.email.length === 0) {
      toast.warning("Enter Email");
    } else if (!emailPattern.test(mes.email))
      toast.warning("Invalid Email Format");
    else if (mes.phone.length === 0) {
      toast.warning("Enter Phone Number");
    } else if (!phonePattern.test(mes.phone))
      toast.warning("Invalid Phone Number Format");
    else if (mes.message.length === 0) {
      toast.warning("Enter Message");
    } else {
      await axios
        .post(urlContactUs, mes)
        .then((res) => {
          if (res.status === 200) {
            console.log("Success");
            toast.success("Successfully registered the user");
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
    <div
      style={{
        backgroundImage: "url(https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg)",
      }}
    >
      <div className="contactBody" style={{
        margin: "200px",
      }}>
        <div className="container" id="contactContainer">
          <h1>Contact Us</h1>
          <div className="form-floating m-1">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              value={mes.firstName}
              onChange={handleChange}
              name="firstName"
            ></textarea>
            <label htmlFor="floatingTextarea">First Name</label>
          </div>
          <div className="form-floating m-1">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              value={mes.lastName}
              onChange={handleChange}
              name="lastName"
            ></textarea>
            <label htmlFor="floatingTextarea">Last Name</label>
          </div>
          <div className="form-floating m-1">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              value={mes.email}
              onChange={handleChange}
              name="email"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating m-1">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              value={mes.phone}
              onChange={handleChange}
              name="phone"
            ></textarea>
            <label htmlFor="floatingTextarea">Phone Number</label>
          </div>
          <div className="form-floating m-1">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              value={mes.message}
              onChange={handleChange}
              name="message"
              style={{ height: "100px" }}
            ></textarea>
            <label htmlFor="floatingTextarea2">Message</label>
          </div>
          <div className="row">
            <div className="col-4" />
            <button
              type="submit"
              className="button-30 col-4 mt-2"
              onClick={addContactUsMessage}
            >
              Submit
            </button>
            <div className="col-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
