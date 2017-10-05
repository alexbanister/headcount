import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

// import DistrictRepository from './helper.js';

const CardContainer = ( {districtData, districtList} ) => {
  const allCards = districtList.map( (place) => {
    return <Card
      district={districtData.findByName(place)}
      key={place}/>;
  });

  return (
    <div className="card-container">
      {allCards}
    </div>
  );
};

CardContainer.propTypes = {
  districtData: React.PropTypes.objectOf(PropTypes.object),
  districtList: React.PropTypes.arrayOf(PropTypes.string)
};


export default CardContainer;
