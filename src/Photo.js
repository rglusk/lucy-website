import React from 'react';

const Photo = (props) => {
  return (
    <div className="photo-container">
      <img src={props.path} style={{ width: 350 }} alt={props.path} />
      <div className="photo-overlay">
        <div className="photo-description">{props.description}</div>
      </div>
    </div>
  );
};

export default Photo;