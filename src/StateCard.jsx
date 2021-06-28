import React from 'react';

const StateCard = ({icon,label,number}) => {
  return (
    <div className='stat-card'>
      <div className='stat-line'>
        <span data-cy='icon'>{icon}</span>
        <strong data-cy='label'>{label}</strong>
      </div>
      <p data-cy='number'>{number.toLocaleString()}</p>
    </div>
  );
};

export default StateCard;
