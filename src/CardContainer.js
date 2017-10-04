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

CardContainer.propTypes = {
  districtData: React.PropTypes.object,
  districtList: React.PropTypes.array
};


export default CardContainer;
