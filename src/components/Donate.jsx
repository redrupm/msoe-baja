import React from 'react';
import '../scss/Donate.scss';

export default function Donate() {
  return (
    <div className="donate-page">
      <section className="donate-hero">
        <h1 className="title">Support MSOE Baja Racing</h1>
        <p className="subtitle">Your donation helps us compete and innovate</p>
      </section>

      <section className="donate-content">
        <div className="donate-section">
          <h2>Why Donate?</h2>
          <p>
            MSOE Baja Racing is a student-led organization that designs, builds, and races off-road vehicles. 
            Your generous donations help us purchase materials, tools, and equipment needed to compete at the 
            highest level in SAE Baja competitions.
          </p>
        </div>

        <div className="donate-section">
          <h2>How Your Donation Helps</h2>
          <ul>
            <li>Materials and parts for vehicle construction</li>
            <li>Testing and safety equipment</li>
            <li>Travel expenses to competitions</li>
            <li>Tools and fabrication equipment</li>
            <li>Team development and training</li>
          </ul>
        </div>

        <div className="donate-section donate-cta">
          <h2>Make a Donation</h2>
          <p>
            To make a tax-deductible donation to MSOE Baja Racing, please contact the MSOE Development Office 
            or reach out to our team directly.
          </p>
          <div className="donate-buttons">
            <a href="https://www.msoe.edu/about-msoe/support-msoe/give-now/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="donate-button">
              Donate Online
            </a>
            <a href="mailto:bajaracing@msoe.edu" className="donate-button secondary">
              Contact Us About Donating
            </a>
          </div>
        </div>

        <div className="donate-section">
          <h2>Other Ways to Support</h2>
          <p>
            If you're unable to make a monetary donation, consider becoming a sponsor or helping us spread 
            the word about our program. Every bit of support makes a difference!
          </p>
        </div>
      </section>
    </div>
  );
}
