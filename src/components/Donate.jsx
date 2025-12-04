import React from 'react';
import '../scss/Donate.scss';
import pageData from '../data/DonatePageData.json';

export default function Donate() {
  return (
    <div className="donate-page">
      <section className="donate-hero">
        <h1 className="title">{pageData.hero.title}</h1>
        <p className="subtitle">{pageData.hero.subtitle}</p>
      </section>

      <section className="donate-content">
        {pageData.sections.map((section, index) => {
          const isCTA = section.buttons !== undefined;
          
          return (
            <div key={index} className={`donate-section ${isCTA ? 'donate-cta' : ''}`}>
              <h2>{section.heading}</h2>
              
              {section.content === 'list' ? (
                <ul>
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.content}</p>
              )}

              {section.buttons && (
                <div className="donate-buttons">
                  {section.buttons.map((button, i) => (
                    <a 
                      key={i}
                      href={button.url}
                      target={button.url.startsWith('http') ? '_blank' : undefined}
                      rel={button.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`donate-button ${button.type === 'secondary' ? 'secondary' : ''}`}
                    >
                      {button.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}
