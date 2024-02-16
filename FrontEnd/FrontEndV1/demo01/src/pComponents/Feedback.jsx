import axios from 'axios';
import React, { useState } from 'react';

const Feedback = () => {
  const [userFeedback, setUserFeedback] = useState([]);
  const [userRating, setUserRating] = useState("");
  const [feedbackData, setFeedbackData] = useState({"rating": "", "feedbackText": ""});
  const urlFeedback = "http://localhost:8080/api/v1/feedback";
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   feedback: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   setFormData({
  //     name: '',
  //     email: '',
  //     feedback: '',
  //   });
  // };

  const inputChange = (args) => {
    var copyofFeedback = { ...userFeedback };
    copyofFeedback[args.target.name] = args.target.value;
    setUserFeedback(copyofFeedback);
  };

  const radioChange = (args) => {
    var copyOfRating = {...userRating};
    copyOfRating[args.target.name] = args.target.value;
    setUserRating(copyOfRating);
  }

  const submitFeedback = () => {
    axios.post(urlFeedback + "/add", )
  }

  return (
    // <div>
    //   <div className="page-header">
    //           <h1>Feedback</h1>
    //       </div>
    //   <section id="section1">
    //     <form onSubmit={handleSubmit}>
    //       <label htmlFor="name" id="label1">
    //         Your Name:
    //       </label>
    //       <input
    //         type="text"
    //         id="name"
    //         name="name"
    //         value={formData.name}
    //         onChange={handleChange}
    //         required
    //       />

    //       <label htmlFor="email" id="label1">
    //         Your Email:
    //       </label>
    //       <input
    //         type="email"
    //         id="email"
    //         name="email"
    //         value={formData.email}
    //         onChange={handleChange}
    //         required
    //       />

    //       <label htmlFor="feedback" id="label1">
    //         Feedback:
    //       </label>
    //       <textarea
    //         id="feedback1"
    //         name="feedback"
    //         value={formData.feedback}
    //         onChange={handleChange}
    //         required
    //       ></textarea>
    //       <br/>
    //       <button type="submit" id="btn1">
    //         Submit Feedback
    //       </button>
    //     </form>
    //   </section>
    // </div>
    <>
      <div className='container'>
        <br />
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Rating</label>
        <br />
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="ratingRadio" id="inlineRadio1" value="1" onClick={radioChange}/>
          <label className="form-check-label" htmlFor="inlineRadio1">1</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="ratingRadio" id="inlineRadio2" value="2" onClick={radioChange}/>
          <label className="form-check-label" htmlFor="inlineRadio2">2</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="ratingRadio" id="inlineRadio3" value="3" onClick={radioChange}/>
          <label className="form-check-label" htmlFor="inlineRadio3">3</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="ratingRadio" id="inlineRadio4" value="4" onClick={radioChange}/>
          <label className="form-check-label" htmlFor="inlineRadio4">4</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="ratingRadio" id="inlineRadio5" value="5" onClick={radioChange}/>
          <label className="form-check-label" htmlFor="inlineRadio5">5</label>
        </div>
        <br />
        <br />
        <br />
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Feedback</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={inputChange}></textarea>
        </div>
        <div className="col-12">
        </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    </>
  );
};

export default Feedback;