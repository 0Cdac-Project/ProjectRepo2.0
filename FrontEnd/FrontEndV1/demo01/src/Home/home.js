import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <input type="checkbox" id="menu-toggle" />
      <div className="sidebar">
        <div className="side-header">
          <h3>
            L<span>ogo</span>
          </h3>
        </div>

        <div className="side-menu">
          <ul className="ps-0">
            <li>
              <NavLink to="/admin">
                <span className="las la-user-cog m-lg-4"></span>
                <small>Admin</small>
              </NavLink>
            </li>
            <li>
              <NavLink to="/doctor">
                <span className="las la-stethoscope m-lg-4"></span>
                <small>Doctor</small>
              </NavLink>
            </li>
            <li>
              <NavLink to="/patient">
                <span className="lab la-accessible-icon m-lg-4"></span>
                <small>Patient</small>
              </NavLink>
            </li>
            <li>
              <NavLink to="/receptionist">
                <span className="las la-user-nurse m-lg-4"></span>
                <small>Receptionist</small>
              </NavLink>
            </li>
            <li>
              <NavLink to="/accountant">
                <span className="las la-hand-holding-usd m-lg-4"></span>
                <small>Accountant</small>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <div className="row">
          <div className="side-header">
            <div className="col-10" style={{textAlign:'center'}}>
              <h3>
                H<span>ome</span>
              </h3>
            </div>
            <div className="col-1">
              <NavLink to="contactUs">
                <span className="las la-user my-sm-1">Contact Us</span>
              </NavLink>
            </div>
            <div className="col-1">
              <NavLink to="loginSignup">
                <span className="las la-user my-sm-1">Login/Signup</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/1.jpg"
                className="d-block"
                alt="doctor1"
                style={{ width: "1800px", height: "600px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/2.jpg"
                className="d-block"
                alt="doctor2"
                style={{ width: "1800px", height: "600px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/3.jpg"
                className="d-block"
                alt="doctor3"
                style={{ width: "1800px", height: "600px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
