function Profile() {
    return ( 
        <>
            <div className="page-header">
                <h1>Profile</h1>
            </div>
            <div className="page-content">
                <div className="container">
            <div className="main-body">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <div
                        className="d-flex flex-column align-items-center text-center"
                      >
                        <img
                          src="Image.jpg"
                          alt="Admin"
                          className="rounded-circle"
                          width="100"
                          height="100"
                        />
                        <div className="mt-3">
                          <h4>Olivia Larry</h4>
                          <p className="text-muted font-size-sm">
                            Boston, USA
                          </p>
                          <button className="btn btn-primary">Edit Profile</button>
                          <button className="btn btn-outline-primary">
                            Other 
                          </button>
                        </div>
                      </div>
                      <hr className="my-4" />
                      <ul className="list-group list-group-flush">
                        <li
                          className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                        >
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
                              <path
                                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                              ></path></svg>Email
                          </h6>
                          <span className="text-secondary"
                            >LuluAlcorn949@example.com</span
                          >
                        </li>
                        <li
                          className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                        >
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
                              <path
                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                              ></path></svg>Phone
                          </h6>
                          <span className="text-secondary">1234567890</span>
                        </li>
                        <li
                          className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                        >
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
                              className="feather feather-facebook me-2 icon-inline text-primary"
                            >
                              <path
                                d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                              ></path></svg>Facebook
                          </h6>
                          <span className="text-secondary">bootdey</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="card">
                    <div className="card-body">
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Full Name</h6>
                        </div>
                        <div className="col-sm-9" info>
                          <input
                            type="text"
                            className="form-control"
                            value="John Doe"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Date of birth</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control"
                            value="01-01-2024"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Gender</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control"
                            value="Male"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Blood group</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text"
                            className="form-control"
                            value="AB+"/>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Address</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control"
                            value="Nanded, Maharashtra, India"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                    
                  </div>
                </div>
              </div>
                </div>
            </div>
        </>
     );
}

export default Profile;