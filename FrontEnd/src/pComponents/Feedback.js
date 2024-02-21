import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/Reducer/userslice';
import { toast } from 'react-toastify';

const Feedback = () => {
  const user = useSelector(selectUser);
  const [submitting, setSubmitting] = useState(false);
  const [appointmentHistory, setAppointmentHistory] = useState([]);
  const [allData, setAllData] = useState({
    feedbackText: "",
    rating: "",
    appointmentId: "",
    feedbackDate: ""
  });

  const urlFeedback = "http://localhost:8080/api/v1/feedback";
  const urlHistory = "http://localhost:8080/api/v1/appointments";

  useEffect(() => {
    let isMounted = true;

    if (user && user.patientID) {
        axios.get(urlHistory + `/by_patient/${user.patientID}`)
            .then((result) => {
                setAppointmentHistory(result.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }
    return () => {
      isMounted = false;
  };
  }, [user]);

  const inputChange = (args) => {
    var copyofAllData = { ...allData };
    copyofAllData[args.target.name] = args.target.value;

    const currentDateTime = new Date(); 
    const isoDateTime = currentDateTime.toISOString();
    copyofAllData['feedbackDate'] = isoDateTime;

    setAllData(copyofAllData);
  };

  const SubmitFeedback = (event) => {
    event.preventDefault();
    setSubmitting(true);

    if (!allData.appointmentId || !allData.rating || !allData.feedbackText) {
      toast.error("Please fill out all required fields.");
      return;
    }

    console.log(allData);

    axios.post(urlFeedback + "/add", allData).then((result) => {
      toast.success("Feedback submitted.");
    })
    .catch((error) => {
      console.log(allData);
      console.error("Error submitting feedback:", error);
      toast.error("Review already submitted for entered appointment id.");
    })
    .finally(() => {
      setSubmitting(false);
      CleanUp();
    });
  }

  const CleanUp = () => {
    // console.log("this shit is being called")
    setAllData({
      feedbackText: "",
      rating: "",
      appointmentId: "",
      feedbackDate: ""
    });
  };

  return (
    <>
          <div className='container'>
        <br />
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Appointment Id</label>
          <input type="number" className="form-control" id="appointmentId" name='appointmentId' value={allData.appointmentId} onChange={inputChange} min={0} required/>
        </div>
        <br />
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Rating</label>
        <br />
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="rating" id="inlineRadio1" value="1" onClick={inputChange}/>
          <label className="form-check-label" htmlFor="inlineRadio1">1</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="rating" id="inlineRadio2" value="2" onClick={inputChange}/>
          <label className="form-check-label" htmlFor="inlineRadio2">2</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="rating" id="inlineRadio3" value="3" onClick={inputChange}/>
          <label className="form-check-label" htmlFor="inlineRadio3">3</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="rating" id="inlineRadio4" value="4" onClick={inputChange}/>
          <label className="form-check-label" htmlFor="inlineRadio4">4</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="rating" id="inlineRadio5" value="5" onClick={inputChange}/>
          <label className="form-check-label" htmlFor="inlineRadio5">5</label>
        </div>
        <br />
        <br />
        <br />
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Feedback</label>
          <textarea className="form-control" id="feedbackText" name='feedbackText' rows="3" value={allData.feedbackText} onChange={inputChange}></textarea>
        </div>
        <div className="col-12">
        </div>
          <button type="submit" className="btn btn-primary" onClick={SubmitFeedback} disabled={submitting}>Submit</button>
        </div>
    </>
  );
};

export default Feedback;