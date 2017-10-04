import React from 'react';
import Card from './Card';
// import DistrictRepository from './helper.js';

const CardContainer = ( {districtData} ) => {
  const allCards = districtData.findAllMatches().map( (place) => {
    return <Card district={districtData.findByName(place)} />;
  });

  return (
    <div className="card-container">
      {allCards}
    </div>
  );
};

export default CardContainer;
