import React from 'react';
import '../scss/ContactUs.scss';

export default function ContactUs() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1 className="title">Contact Us</h1>
        <p className="subtitle">Get in touch with MSOE Baja Racing</p>
      </section>

      <section className="contact-content">
        <div className="contact-section">
          <h2>We'd Love to Hear From You</h2>
          <p>
            Whether you're interested in sponsorship opportunities, want to support our team, or have 
            questions about our program, we're here to help. Reach out to us using any of the methods below.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">✉️</div>
            <h3>Email</h3>
            <p>General inquiries and information</p>
            <a href="mailto:bajaracing@msoe.edu">bajaracing@msoe.edu</a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📱</div>
            <h3>Social Media</h3>
            <p>Follow us for updates and news</p>
            <div className="social-links">
              <a href="https://www.instagram.com/msoe_baja" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com/MSOEBaja/" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.linkedin.com/company/msoe-baja-racing" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Location</h3>
            <p>Visit us on campus</p>
            <address>
              Milwaukee School of Engineering<br />
              1025 N. Broadway<br />
              Milwaukee, WI 53202
            </address>
          </div>
        </div>

        <div className="contact-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq">
            <div className="faq-item">
              <h3>How can I join the team?</h3>
              <p>
                We welcome all MSOE students! Reach out to us via email or come to one of our meetings 
                during the academic year. No prior experience necessary—just enthusiasm and a willingness to learn.
              </p>
            </div>
            <div className="faq-item">
              <h3>What competitions do you participate in?</h3>
              <p>
                We compete in SAE Baja competitions throughout the year, including regional and national events. 
                These competitions test our vehicle's design, durability, and performance in various off-road challenges.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I tour your facilities?</h3>
              <p>
                Yes! We'd be happy to give you a tour of our shop and show you what we're working on. 
                Contact us to schedule a visit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
