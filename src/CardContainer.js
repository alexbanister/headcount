import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const CardContainer = (
  {districtData, districtList,
    setComparePosition, firstDistrict, secondDistrict} ) => {
  const allCards = districtList.map( (place) => {
    let selectedClass = '';
    if (place === firstDistrict || place === secondDistrict) {
      selectedClass = 'selected';
    }
    return <Card
      selected={selectedClass}
      setComparePosition={setComparePosition}
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
  districtData: PropTypes.objectOf(PropTypes.object),
  districtList: PropTypes.arrayOf(PropTypes.string),
  setComparePosition: PropTypes.func,
  firstDistrict: PropTypes.string,
  secondDistrict: PropTypes.string
};


export default CardContainer;
