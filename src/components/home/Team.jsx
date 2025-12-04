import React, { useState } from 'react';
import '../../scss/Team.scss';
import teamMembers from "../../data/team.json"

export default function Team() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="team-section">
      {/* Executive Board always visible */}
      {(() => {
        const groups = teamMembers.reduce((acc, m) => {
          const key = m.section || 'General Board';
          if (!acc[key]) acc[key] = [];
          acc[key].push(m);
          return acc;
        }, {});

        const exec = groups['Executive Board'] || [];

        if (!exec.length) return null;

        return (
          <div className="board eboard" key="Executive Board">
            <h2 className="board-heading">Executive Board</h2>
            <hr className="role-sep" />
            <div className="team-grid eboard-grid">
              {exec.map((member, index) => (
                <div className="team-member eboard-member" key={index}>
                  <img src={require(`../../images/people/${member.name.replace(/\s/g, '')}.jpg`)} alt={member.name} />
                  <div className="info">
                    <div className="name-hover">
                      <h3>{member.name}</h3>
                      <div className="hover-details">
                        <p className="major">{member.major}</p>
                        {member.linkedin && (
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
      })()}

      {/* Branch Directors - always visible */}
      {(() => {
        const groups = teamMembers.reduce((acc, m) => {
          const key = m.section || 'General Board';
          if (!acc[key]) acc[key] = [];
          acc[key].push(m);
          return acc;
        }, {});

        const branchDirectors = groups['Branch Directors'] || [];
        if (!branchDirectors.length) return null;

        return (
          <div className="board" key="Branch Directors">
            <h2 className="board-heading">Branch Directors</h2>
            <hr className="role-sep" />
            <div className="team-grid eboard-grid">
              {branchDirectors.map((member, index) => (
                <div className="team-member" key={index}>
                  <img src={require(`../../images/people/${member.name.replace(/\s/g, '')}.jpg`)} alt={member.name} />
                  <div className="info">
                    <div className="name-hover">
                      <h3>{member.name}</h3>
                      <div className="hover-details">
                        <p className="major">{member.major}</p>
                        {member.linkedin && (
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
      })()}

      {/* Project Managers - always visible */}
      {(() => {
        const groups = teamMembers.reduce((acc, m) => {
          const key = m.section || 'General Board';
          if (!acc[key]) acc[key] = [];
          acc[key].push(m);
          return acc;
        }, {});

        const projectManagers = groups['Project Managers'] || [];
        if (!projectManagers.length) return null;

        return (
          <div className="board" key="Project Managers">
            <h2 className="board-heading">Project Managers</h2>
            <hr className="role-sep" />
            <div className="team-grid">
              {projectManagers.map((member, index) => (
                <div className="team-member" key={index}>
                  <img src={require(`../../images/people/${member.name.replace(/\s/g, '')}.jpg`)} alt={member.name} />
                  <div className="info">
                    <div className="name-hover">
                      <h3>{member.name}</h3>
                      <div className="hover-details">
                        <p className="major">{member.major}</p>
                        {member.linkedin && (
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
      })()}

      {/* Button to show/hide General Board */}
      <button
        className="toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="general-board"
      >
        {isOpen ? 'Hide rest of team' : 'Show rest of team'}
      </button>

      <div id="general-board" className={`team-content ${isOpen ? 'open' : 'collapsed'}`}>
        {(() => {
          const groups = teamMembers.reduce((acc, m) => {
            const key = m.section || 'General Board';
            if (!acc[key]) acc[key] = [];
            acc[key].push(m);
            return acc;
          }, {});

          const members = groups['General Board'] || [];
          if (!members.length) return null;

          return (
            <div className="board" key="General Board">
              <h2 className="board-heading">General Board</h2>
              <hr className="role-sep" />
              <div className="team-grid">
                {members.map((member, index) => (
                  <div className="team-member" key={index}>
                    <img src={require(`../../images/people/${member.name.replace(/\s/g, '')}.jpg`)} alt={member.name} />
                    <div className="info">
                      <div className="name-hover">
                        <h3>{member.name}</h3>
                        <div className="hover-details">
                          <p className="major">{member.major}</p>
                          {member.linkedin && (
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
        })()}
      </div>

    </section>
  );
}
