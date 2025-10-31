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
        {
          (() => {
            // group members by section
            const groups = teamMembers.reduce((acc, m) => {
              const key = m.section || 'General Board';
              if (!acc[key]) acc[key] = [];
              acc[key].push(m);
              return acc;
            }, {});

            const order = ['Executive Board', 'General Board'];

            return order.map((section) => {
              const members = groups[section];
              if (!members || members.length === 0) return null;

              const shortLabel = section === 'Executive Board' ? 'Executive Board' : 'General Board';

              return (
                <div className="board" key={section}>
                  <h2 className="board-heading">{shortLabel}</h2>
                  <hr className="role-sep" />
                  <div className="team-grid">
                    {members.map((member, index) => (
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
                          <hr className="role-sep" />
                          <p className="role">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            });
          })()
        }
      </div>

    </section>
  );
}
