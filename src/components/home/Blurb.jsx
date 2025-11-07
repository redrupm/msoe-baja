import React from 'react';
import homeData from '../../data/HomePageData.json';

export default function Blurb(){
  return(
    <section className="home-blurb">
      <div className="blurb-inner">
        {homeData && homeData.blurb.split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  );
}