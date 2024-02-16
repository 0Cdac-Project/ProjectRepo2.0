function Dashboard() {
    return ( 
    <>
        <div className="page-header">
            <h1>Dashboard</h1>
        </div>
        <br></br>
        <hr></hr>
        <center>
            <button style={{backgroundColor : "lightblue", color : "black",  borderRadius : "5px", height : "40px", width : "300px", fontSize : "24px"}}>Book New Appointment</button>
        </center>
        <hr></hr>
        <div style={{display : "flex"}}>
        <div className="container">
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th colSpan={5} style={{textAlign : "center"}}>
                                Previous Appointment History
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Serial No
                            </th>
                            <th>
                                Date
                            </th>
                            <th>
                                Doctor Name
                            </th>
                            <th>
                                Appointment Query
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                1
                            </td>
                            <td>
                                23/11/23
                            </td>
                            <td>
                                Dr. John Mark
                            </td>
                            <td>
                                Cough and Fever
                            </td>
                            <td>
                                <button className="primary">
                                    Follow Up Booking
                                </button>
                                <button className="primary">
                                    FeedBack
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                2
                            </td>
                            <td>
                                12/10/23
                            </td>
                            <td>
                                Dr. Alex Chapiro
                            </td>
                            <td>
                                Body Pain
                            </td>
                            <td>
                                <button className="primary">
                                    Follow Up Booking
                                </button>
                                <button className="primary">
                                    FeedBack
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                3
                            </td>
                            <td>
                                15/09/23
                            </td>
                            <td>
                                Dr. Jason Haywire
                            </td>
                            <td>
                                Tooth Pain
                            </td>
                            <td>
                                <button className="primary">
                                    Follow Up Booking
                                </button>
                                <button >
                                    FeedBack
                                </button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
        {/* <div className="container" style={{backgroundColor : "lightblue", height : "500px"}}>
            <h1>2 div</h1>
        </div> */}
        </div>
    </>
        

     );
}

export default Dashboard;
