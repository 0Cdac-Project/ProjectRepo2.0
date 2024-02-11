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
                <li><strong>Q: How do I access patient records?</strong></li>
                <li>To access patient records, simply log in to your account and navigate to the "Patient Records" section. From there, you can search for patients by name, ID, or any other relevant criteria.</li>
    
                <li><strong>Q: How can I update patient information?</strong></li>
                <li>To update patient information, locate the patient's record and click on the "Edit" button. You'll then be able to modify the necessary fields such as demographics, medical history, and treatment plans.</li>
    
                <li><strong>Q: What features are available for managing appointments?</strong></li>
                <li>Our hospital management system allows you to schedule, reschedule, and cancel appointments effortlessly. You can also set appointment reminders and view your schedule in a convenient calendar format.</li>       
                
    
                <li><strong>Q:How can I prescribe medications and treatments using the system?</strong></li>
                <li>Prescribing medications and treatments is simple. Just select the patient, click on the "Prescribe" button, and fill out the prescription details including dosage, frequency, and duration. You can also add special instructions if needed.</li>
    
                <li><strong>Q:Is it possible to communicate with other healthcare professionals within the system?</strong></li>
                <li>Yes, you can communicate securely with other healthcare professionals using the messaging feature. Simply select the recipient, compose your message, and send it. You can also attach relevant files or images if necessary.</li>
    
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