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
                <li><strong>Q:How do I check in patients using the system?</strong></li>
                <li>To check in patients, log in to the system and navigate to the "Check-In" section. Enter the patient's information, such as name, appointment time, and reason for visit, then click "Check-In" to complete the process.</li>
    
                <li><strong>Q:Can I schedule appointments for patients?</strong></li>
                <li>Yes, you can schedule appointments for patients through the system. Go to the "Appointments" tab, select the desired date and time, and enter the patient's details. Once confirmed, the appointment will be added to the schedule.</li>
    
                <li><strong>Q:How do I handle patient registrations and demographics updates?</strong></li>
                <li>Patient registrations and demographic updates can be managed under the "Patient Information" section. Click on "Register New Patient" to add a new patient or select an existing patient to update their information.</li>       
                
    
                <li><strong>Q:What steps should I follow to verify insurance information?</strong></li>
                <li>To verify insurance information, navigate to the patient's profile and click on the "Insurance Details" tab. Enter the patient's insurance information and click "Verify" to confirm coverage.</li>
    
                <li><strong>Q:How can I process payments and manage billing using the system?</strong></li>
                <li>Payment processing and billing management are handled in the "Billing" section. You can generate invoices, record payments, and track outstanding balances for patients.</li>
    
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