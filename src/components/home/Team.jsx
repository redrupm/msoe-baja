import React, { useState } from 'react';
import '../../scss/Team.scss';
import teamMembers from "../../data/team.json"

export default function Team() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="team-section">
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide Team' : 'Meet the Team'}
      </button>

      <div className={`team-content ${isOpen ? 'open' : 'collapsed'}`}>
  <div className="team-grid">
    {teamMembers.map((member, index) => (
      <div className="team-member" key={index}>
        <img src={require(`../../images/${member.name.replace(/\s/g, '')}.jpg`)} alt={member.name} />
        <div className="info">
          <div className="name-hover">
            <h3>{member.name}</h3>
            <div className="hover-details">
              <p className="major">{member.major}</p>
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </section>
  );
}
