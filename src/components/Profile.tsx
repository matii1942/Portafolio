import React from 'react';

export const Profile: React.FC = () => {
  return (
    <section id="profile">
      <div className="s-head">
        <span className="tag">Profile</span>
        <h2>What I do</h2>
      </div>
      <p className="lead">
        I build <b>full stack web applications</b> — CRUD systems, REST APIs and responsive
        interfaces, shipped to production.
      </p>
      <p className="note">
        My work runs from the interface people use to the database behind it: React and TypeScript on
        the front, Node.js/Express or Django on the back, MongoDB and SQL for data, deployed on
        Render and Vercel. Before development I spent ten years managing clinical data in an
        intensive care unit, where traceability and accuracy were not optional — that is the
        discipline I bring to code. My working hours overlap the full US business day and European
        afternoons.
      </p>
    </section>
  );
};
