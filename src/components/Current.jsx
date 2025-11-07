import React from 'react';
import '../scss/Current.scss';
import car1 from '../images/slide1.jpeg';
import car2 from '../images/slide2.jpeg';

export default function Current() {
    return (
        <section className="current-page">
            <div className="current-hero">
                <div className="hero-media">
                    <img src={car1} alt="Current vehicle main" />
                </div>

                <div className="hero-info">
                    <h1 className="title">Current Vehicle</h1>
                    <p className="subtitle">Our current competition vehicle — purpose-built for endurance and efficiency.</p>

                                <div className="specs">
                                    <h3>Vehicle Specs</h3>
                                    <ul>
                                        <li><strong>Chassis:</strong> TBD</li>
                                        <li><strong>Drivetrain:</strong> TBD</li>
                                        <li><strong>Suspension:</strong> TBD</li>
                                        <li><strong>Brakes:</strong> TBD</li>
                                        <li><strong>Weight:</strong> TBD</li>
                                    </ul>
                                    <p className="note">Technical specs are being finalized — check back soon for full details.</p>
                                </div>

                    <div className="actions">
                        <button className="primary">View Gallery</button>
                        <a className="secondary" href="#gallery">Jump to photos</a>
                    </div>
                </div>
            </div>

            <div id="gallery" className="gallery">
                <h2 className="title">Photos</h2>
                <div className="gallery-grid">
                    <img src={car1} alt="Vehicle photo 1" />
                    <img src={car2} alt="Vehicle photo 2" />
                </div>
            </div>
        </section>
    );
}