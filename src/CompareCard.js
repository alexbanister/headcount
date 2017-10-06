import React from 'react';

const CompareCard = ( {compareInfo} ) => {
  return (
    <div className="card">
      <h2 className="district-name">{compareInfo.firstDistrict.title}</h2>
      <div className="card-data">{compareInfo.firstDistrict.average}</div>
      <h1>{compareInfo.difference.compared}</h1>
      <div className="card-data">{compareInfo.secondDistrict.average}</div>
      <h2 className="district-name">{compareInfo.secondDistrict.title}</h2>
    </div>
  );
};

export default CompareCard;
