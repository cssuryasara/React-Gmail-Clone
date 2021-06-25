import React from 'react';
import './Section.css';

function Section({icon, title, selected, color}) {
  return (
    <div
      className={`section ${selected && "section--selected"}`}
      style={{
        borderBottom: `3px solid ${selected && color}`,
        color: `${selected && color}`,
      }}
    >
      {icon}
      <h4>{title}</h4>
    </div>
  );
}

export default Section;
