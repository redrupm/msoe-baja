import React from 'react';
import '../scss/Sponsorship.scss';

export default function Sponsorship() {
  return (
    <div className="sponsorship-page">
      <section className="sponsorship-hero">
        <h1 className="title">Become a Sponsor</h1>
        <p className="subtitle">Partner with MSOE Baja Racing</p>
      </section>

      <section className="sponsorship-content">
        <div className="sponsorship-section">
          <h2>Why Sponsor Us?</h2>
          <p>
            MSOE Baja Racing provides a unique opportunity for companies to engage with talented engineering 
            students who are passionate about hands-on design and fabrication. Our team members go on to work 
            for leading companies in automotive, manufacturing, and engineering industries.
          </p>
        </div>

        <div className="sponsorship-section">
          <h2>Sponsorship Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Brand Exposure</h3>
              <p>Your logo on our vehicle, trailer, and team apparel at competitions nationwide</p>
            </div>
            <div className="benefit-card">
              <h3>Talent Pipeline</h3>
              <p>Direct access to skilled engineering students for internships and full-time positions</p>
            </div>
            <div className="benefit-card">
              <h3>Social Media</h3>
              <p>Recognition across our social media platforms and website</p>
            </div>
            <div className="benefit-card">
              <h3>Networking</h3>
              <p>Invitations to team events and facility tours</p>
            </div>
          </div>
        </div>

        <div className="sponsorship-section">
          <h2>Sponsorship Levels</h2>
          <div className="levels">
            <div className="level-card gold">
              <h3>Gold Sponsor</h3>
              <p className="amount">$5,000+</p>
              <ul>
                <li>Large logo placement on vehicle</li>
                <li>Logo on team apparel</li>
                <li>Featured on website and social media</li>
                <li>Networking opportunities</li>
              </ul>
            </div>
            <div className="level-card silver">
              <h3>Silver Sponsor</h3>
              <p className="amount">$2,500 - $4,999</p>
              <ul>
                <li>Medium logo placement on vehicle</li>
                <li>Logo on team apparel</li>
                <li>Recognition on website</li>
              </ul>
            </div>
            <div className="level-card bronze">
              <h3>Bronze Sponsor</h3>
              <p className="amount">$1,000 - $2,499</p>
              <ul>
                <li>Small logo placement on vehicle</li>
                <li>Recognition on website</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sponsorship-section sponsorship-cta">
          <h2>Get Started</h2>
          <p>
            Interested in sponsoring MSOE Baja Racing? We'd love to discuss how we can create a partnership 
            that works for your organization.
          </p>
          <a href="mailto:bajaracing@msoe.edu" className="sponsorship-button">
            Contact Us About Sponsorship
          </a>
        </div>
      </section>
    </div>
  );
}
