function AppointmentHistory() {
    return ( 
        <>
            <div className="page-header">
                <h1>Appointment History</h1>
            </div>
            <br/>

            <div className="container-fluid">
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button bg-secondary-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Appointment #1
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                        <span>
                            Appointment id: <span>WPT</span>
                        </span>
                        <br/>
                        <br/>
                        <span>
                            Doctor: <span className="fst-italic">Mayuresh P., MD</span>
                        </span>
                        <br/>
                        <br/>
                        <span>
                            Appointment date and time: <span>15-10-2023 01:20:00</span>
                        </span>
                        <br/>
                        <br/>
                        <span>
                            Medical condition: <span>Narcolepsy</span>
                        </span>
                        <br/>
                        <br/>
                        <span>
                            Medication/Treatment: <span>Sodium oxybate (Xyrem) and oxybate salts (Xywav)</span>
                        </span>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed bg-secondary-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Appointment #2
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        <span>
                            Appointment id: <span>Java</span>
                        </span>
                        <br/>
                        <br/>
                        <span>
                            Doctor: <span className="fst-italic">Mayur K., MD</span>
                        </span>
                        <br/>
                        <br/>
                        <span>
                            Appointment date and time: <span>30-12-2023 11:30:00</span>
                        </span>
                        <br/>
                        <br/>
                        <span>
                            Medical condition: <span>Atrial Septal Defect (hole in the heart)</span>
                        </span>
                        <br/>
                        <br/>
                        <span>
                            Medication/Treatment: <span>Open Heart Surgery</span>
                        </span>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed bg-secondary-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Appointment #3
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        <span>
                            Appointment id: <span>ADS</span>
                        </span>
                        <br/>
                        <br/>
                        <span>
                            Doctor: <span className="fst-italic">Sandesh T., MD</span>
                        </span>
                        <br/>
                        <br/>
                        <span>
                            Appointment date and time: <span>05-01-2024 02:00:00</span>
                        </span>
                        <br/>
                        <br/>
                        <span>
                            Medical condition: <span>Migraine</span>
                        </span>
                        <br/>
                        <br/>
                        <span>
                            Medication/Treatment: <span>Intranasal zavegepant (Zavzpret)</span>
                        </span>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        </>
     );
}

export default AppointmentHistory;