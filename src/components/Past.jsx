import React from 'react';
import '../scss/Past.scss';

// Use only slide1 and slide2 images for a simple gallery
const imageFiles = ['slide1.jpeg', 'slide2.jpeg'];

// Repeat the two images to create a larger gallery (adjust count as desired)
const galleryFiles = Array.from({ length: 18 }).map((_, i) => imageFiles[i % imageFiles.length]);

export default function Past() {
    return (
        <section className="past-page">
            <div className="past-hero">
                <h1 className="title">Past Vehicles & Events</h1>
                <p className="subtitle">Photos from previous seasons, builds, and events.</p>
            </div>

            <div className="past-gallery">
                {galleryFiles.map((file, idx) => (
                    <div className="thumb" key={`${file}-${idx}`}>
                        {/* eslint-disable-next-line global-require, import/no-dynamic-require */}
                        <img src={require(`../images/${file}`)} alt={`Past ${idx}`} />
                    </div>
                ))}
            </div>
        </section>
    );
}