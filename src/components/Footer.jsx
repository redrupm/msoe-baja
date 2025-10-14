import React from 'react';
import '../scss/Footer.scss';

export default function Footer({className}) {
    return (
        <footer className={`footer ${className}`}>
            <div className="footer-content">
                {/* Social Links */}
                <div className="footer-section">
                    <h2>Follow Us</h2>
                    <div className="footer-links">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="footer-section">
                    <h2>Contact</h2>
                    <p><strong>President:</strong> pres@example.com</p>
                    <p><strong>Vice President:</strong> vp@example.com</p>
                </div>

                {/* Upcoming Event */}
                <div className="footer-section">
                    <h2>Up Next</h2>
                    <p>Fall Design Review – Sept 20, 2025</p>
                    {/* Optional: Add calendar embed or link */}
                </div>

                {/* Footnotes */}
                <div className="footer-footnotes">
                    <p>© 2025 MSOE Baja Racing. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
