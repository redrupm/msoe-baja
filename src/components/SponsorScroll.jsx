import React from 'react';
import '../scss/SponsorScroll.scss';

// Import all sponsor logos
const sponsors = [
  require('../images/logos/Sponsors/Aim_White.png'),
  require('../images/logos/Sponsors/Altair_White.png'),
  require('../images/logos/Sponsors/Amalga_White.png'),
  require('../images/logos/Sponsors/Ansys_White.png'),
  require('../images/logos/Sponsors/B&BSteel_White.png'),
  require('../images/logos/Sponsors/Carnevor_White.png'),
  require('../images/logos/Sponsors/CFS_White.png'),
  require('../images/logos/Sponsors/CompDrive_White.png'),
  require('../images/logos/Sponsors/DassaultSystemes_White.png'),
  require('../images/logos/Sponsors/Ellingsen_White.png'),
  require('../images/logos/Sponsors/Ernst_White.png'),
  require('../images/logos/Sponsors/Evology_White.png'),
  require('../images/logos/Sponsors/HarleyDavidson_White.png'),
  require('../images/logos/Sponsors/Hayes_White.png'),
  require('../images/logos/Sponsors/IEA_White.png'),
  require('../images/logos/Sponsors/JWSpeaker_White.png'),
  require('../images/logos/Sponsors/LawyerLuke_White.png'),
  require('../images/logos/Sponsors/MilwaukeeTool_White.png'),
  require('../images/logos/Sponsors/Navy_White.png'),
  require('../images/logos/Sponsors/OaklandGyros_White.png'),
  require('../images/logos/Sponsors/SAEInt_White.png'),
  require('../images/logos/Sponsors/Solidworks_White.png'),
  require('../images/logos/Sponsors/Soulsight_White.png'),
  require('../images/logos/Sponsors/SuperShox_White.png'),
  require('../images/logos/Sponsors/Weiser_White.png'),
  require('../images/logos/Sponsors/Weller_White.png'),
];

export default function SponsorScroll() {
  return (
    <div className="sponsor-scroll-container">
      <div className="sponsor-scroll-track">
        {/* Render logos twice for seamless loop */}
        {[...sponsors, ...sponsors].map((logo, index) => (
          <div className="sponsor-logo" key={index}>
            <img src={logo} alt={`Sponsor ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
