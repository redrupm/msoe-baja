import React from 'react';
import '../scss/Sponsorship.scss';
import pageData from '../data/SponsorshipPageData.json';

export default function Sponsorship() {
  return (
    <div className="sponsorship-page">
      <section className="sponsorship-hero">
        <h1 className="title">{pageData.hero.title}</h1>
        <p className="subtitle">{pageData.hero.subtitle}</p>
      </section>

      <section className="sponsorship-content">
        {pageData.sections.map((section, index) => {
          const isCTA = section.button !== undefined;
          
          return (
            <div key={index} className={`sponsorship-section ${isCTA ? 'sponsorship-cta' : ''}`}>
              <h2>{section.heading}</h2>

              {section.content === 'benefits' ? (
                <div className="benefits-grid">
                  {section.benefits.map((benefit, i) => (
                    <div key={i} className="benefit-card">
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>
                  ))}
                </div>
              ) : section.content === 'levels' ? (
                <div className="levels">
                  {section.levels.map((level, i) => (
                    <div key={i} className={`level-card ${level.tier}`}>
                      <h3>{level.name}</h3>
                      <p className="amount">{level.amount}</p>
                      <ul>
                        {level.benefits.map((benefit, j) => (
                          <li key={j}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <p>{section.content}</p>
              )}

              {section.button && (
                <a href={section.button.url} className="sponsorship-button">
                  {section.button.text}
                </a>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}
