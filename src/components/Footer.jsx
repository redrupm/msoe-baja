import React from 'react';
import '../scss/Footer.scss';
import footerData from '../data/FooterData.json';

export default function Footer({ className }) {
    const contacts = (footerData && footerData.contacts) || [];
    const events = (footerData && footerData.events) || [];
    const copyright = (footerData && footerData.copyright) || '';

    const formatEventDisplay = (evt) => {
        if (!evt) return '';
        const title = evt.title || '';
        const dateStr = evt.date || '';
        const parsed = Date.parse(dateStr);
        const dateText = !isNaN(parsed)
            ? new Date(parsed).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
            : dateStr;
        return dateText ? `${title} – ${dateText}` : title;
    };

    return (
        <footer className={`footer ${className || ''}`}>
            <div className="footer-content">
                {/* Social Links */}
                <div className="footer-section">
                    <h2>Follow Us</h2>
                    <div className="footer-links">
                        <a href="https://www.instagram.com/msoe_baja" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://www.facebook.com/MSOEBaja/" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.linkedin.com/company/msoe-baja-racing" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>

                {/* Contact Info (driven from JSON) */}
                <div className="footer-section">
                    <h2>Contact</h2>
                    {contacts.length ? (
                        contacts.map((c, i) => (
                            <p key={i}><strong>{c.role}:</strong> <a href={`mailto:${c.email}`}>{c.email}</a></p>
                        ))
                    ) : (
                        <p>No contact info available.</p>
                    )}
                </div>

                {/* Upcoming Events (driven from JSON) */}
                <div className="footer-section">
                    <h2>Up Next</h2>
                    {events.length ? (
                        events.map((e, i) => (
                            <p key={i}>{formatEventDisplay(e)}</p>
                        ))
                    ) : (
                        <p>No upcoming events.</p>
                    )}
                </div>

                {/* Footnotes */}
                <div className="footer-footnotes">
                    <p>{copyright}</p>
                </div>
            </div>
        </footer>
    );
}
