import React from 'react';

const HelpAndSupport = () => {
  return (
    <>
      <div className="page-header">
        <h1>Help and Support</h1>
      </div>
      <section id="section2">
        <h2 id="h22">Frequently Asked Questions (FAQs)</h2>
        <ul id="ul2">
          <li id="li2">
            <strong>Q: How do I schedule an appointment?</strong>
            <br />A: You can schedule an appointment through our online portal or by contacting our reception.
          </li>
          <li id="li2">
            <strong>Q: What are the visiting hours?</strong>
            <br />A: Visiting hours are from 10:00 AM to 8:00 PM every day.
          </li>
          <li id="li2">
            <strong>Q: How can I pay my bills online?</strong>
            <br />A: You can pay your bills through our secure online payment system on our website.
          </li>
        </ul>

        <h2 id="h22">Contact Us for Assistance</h2>
        <p id="p2">If you have any further questions or need assistance, please feel free to contact us using the form below:</p>

        <form action="#" method="post">
          <label htmlFor="name" id="label2">
            Your Name:
          </label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email" id="label2">
            Your Email:
          </label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button id="btn2" type="submit">
            Submit Message
          </button>
        </form>
      </section>
    </>
  );
};

export default HelpAndSupport;