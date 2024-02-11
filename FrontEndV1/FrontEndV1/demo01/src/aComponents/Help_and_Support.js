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
                <li><strong>Q:How do I manage user accounts and permissions within the system?</strong></li>
                <li>To manage user accounts and permissions, navigate to the "User Management" section. From there, you can add new users, edit existing user profiles, and assign appropriate permissions based on roles and responsibilities.</li>
    
                <li><strong>Q:Can I customize settings and configurations to tailor the system to our hospital's specific needs?</strong></li>
                <li>Yes, the system provides options for customization to tailor settings and configurations according to your hospital's specific requirements. Access the "Settings" or "Configuration" section to modify parameters such as appointment slots, billing codes, and system preferences.</li>
    
                <li><strong>Q:How do I monitor system usage and performance?</strong></li>
                <li>System usage and performance can be monitored through the "Dashboard" or "Analytics" section. View real-time metrics, such as user activity, patient volumes, and system uptime, to track performance and identify areas for improvement.</li>       
                
    
                <li><strong>Q:Is there a feature to manage inventory and supplies within the hospital?</strong></li>
                <li>Yes, the system includes functionality to manage inventory and supplies. Navigate to the "Inventory Management" or "Supply Chain" section to track stock levels, place orders, and manage vendor relationships.</li>
    
                <li><strong>Q:What steps should I follow to generate financial reports and statements?</strong></li>
                <li>Financial reports and statements can be generated in the "Financial Management" or "Accounting" section. Select the desired report type (e.g., income statement, balance sheet) and specify the reporting period to view or download the financial data.</li>
    
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