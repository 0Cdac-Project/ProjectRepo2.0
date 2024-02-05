import React, { useState } from 'react';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      feedback: '',
    });
  };

  return (<div>
    <div className="page-header">
            <h1>Feedback</h1>
        </div>
    <section id="section1">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" id="label1">
          Your Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email" id="label1">
          Your Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="feedback" id="label1">
          Feedback:
        </label>
        <textarea
          id="feedback1"
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          required
        ></textarea>
        <br/>
        <button type="submit" id="btn1">
          Submit Feedback
        </button>
      </form>
    </section>
    </div>
  );
};

export default Feedback;