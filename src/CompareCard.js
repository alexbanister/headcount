import React from 'react';

const CompareCard = ( {CompareInfo} ) => {
  return (
    <div className="card">
      <h2 className="district-name">{CompareInfo.firstDistrict.title}</h2>
      <div className="card-data">{CompareInfo.firstDistrict.average}</div>
      <h1>{CompareInfo.difference}</h1>
      <div className="card-data">{CompareInfo.secondDistrict.average}</div>
      <h2 className="district-name">{CompareInfo.secondDistrict.title}</h2>
    </div>
  );
};

export default CompareCard;
