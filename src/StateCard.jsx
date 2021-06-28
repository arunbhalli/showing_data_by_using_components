import React from 'react';

const StateCard = ({icon,label,number}) => {
  return (
    <div className='stat-card'>
      <div className='stat-line'>
        <span>{icon}</span>
        <strong>{label}</strong>
      </div>
      <p>{number.toLocaleString()}</p>
    </div>
  );
};

export default StateCard;
