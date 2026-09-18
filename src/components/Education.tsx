import React from 'react';
import './Education.css';

export const Education: React.FC = () => {
  return (
    <section id="education">
      <div className="s-head">
        <span className="tag">Background</span>
        <h2>Education &amp; languages</h2>
      </div>
      <div className="background-grid">
        <div className="background-box">
          <h3>Education</h3>
          <ul>
            <li>
              <b>Systems Analysis</b> — ISFT N° 172, in progress
            </li>
            <li>
              <b>Full Stack Web Development</b> — UTN
            </li>
            <li>
              <b>Professional Nurse</b> — prior career
            </li>
          </ul>
        </div>
        <div className="background-box">
          <h3>Languages</h3>
          <ul>
            <li>
              <b>Spanish</b> — Native
            </li>
            <li>
              <b>English</b> — Advanced (C1)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
