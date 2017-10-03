import React from 'react';
import Card from './Card';
import DistrictRepository from './helper.js';

const CardContainer = ( {districtData} ) => {
  const allCards = districtData.findAllMatches().map( (district) => {
    return <Card location={districtData.findByName(district)}
    />
  })

  return (
    <div>
      {allCards}
    </div>
  )
}

export default CardContainer;
