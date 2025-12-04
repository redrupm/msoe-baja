import React from 'react';
import '../scss/Current.scss';
import pageData from '../data/CurrentPageData.json';
import car1 from '../images/current/onyx.jpg';
import car2 from '../images/slide2.jpeg';

export default function Current() {
    const scrollToGallery = () => {
        const el = document.getElementById('gallery');
        if (!el) return;
        const header = document.getElementById('header');
        const headerOffset = header ? header.offsetHeight : 64;
        const top = el.getBoundingClientRect().top + window.scrollY - headerOffset - 8; // small gap
        window.scrollTo({ top, behavior: 'smooth' });
    };

    return (
        <section className="current-page">
            <div className="current-hero">
                <div className="hero-media">
                    <img src={car1} alt="Current vehicle main" />
                </div>

                <div className="hero-info">
                    <h1 className="title">Current Vehicle</h1>
                    {pageData && pageData.blurb.split('\n\n').map((para, i) => (
                        <p key={i} className="subtitle">{para}</p>
                    ))}

                                <div className="specs">
                                    <h3>Vehicle Specs</h3>
                                    <ul>
                                        {pageData && pageData.specs.map((s, idx) => (
                                            <li key={idx}><strong>{s.label}:</strong> {s.value}</li>
                                        ))}
                                    </ul>
                                    {pageData && pageData.note && (
                                        <p className="note">{pageData.note}</p>
                                    )}
                                </div>

                    <div className="actions">
                        <button className="primary" onClick={scrollToGallery}>View Gallery</button>
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