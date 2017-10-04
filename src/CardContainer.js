import React from 'react';
import Card from './Card';
// import DistrictRepository from './helper.js';

const CardContainer = ( {districtData, districtList} ) => {
  const allCards = districtList.map( (place) => {
    return <Card district={districtData.findByName(place)} />;
  });

  return (
    <div className="card-container">
      {allCards}
    </div>
  );
};

export default CardContainer;
