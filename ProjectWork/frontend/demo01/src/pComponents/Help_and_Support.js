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
        <ul>
            <li><strong>Q:What is brand New General/New Private?</strong><br/>A: A new general patient is one who will be seen by any doctor in the concerned unit.
                A new private patient is one who gets to see a consultant with whom he has booked an appointment for the first time in the hospital .</li>

            <li><strong>Q:How to make new appointments online?</strong><br/>A:Please login our website: **************
            -- Are you a patient -- Book an Appointment -- Proceed -- New patient
            Kindly fill in the details and proceed for appointments choose the department and read the description about the particular department and finally make the payment. Payments can be done through - Net Banking / Debit & Credit card .</li>

            <li><strong>Q: How to make repeat appointments online?</strong><br/>A:Please login our website: **************
            -- Are you a patient -- Book an Appointment -- Proceed -- With Hospital Number
            Please type your Hospital number and Year of Birth. Choose the department using the option frequently visited clinic (or) New Clinic and read the description about the particular department before proceeding for payment.Payment can be done through Net Banking/Debit & Credit card. .</li>

            <li><strong>Q:Is there any charge to get the new registration form?</strong><br/>A:No, you can get the New registration form from the reception (400) at free of cost for new general patients.</li>    
        </ul>
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