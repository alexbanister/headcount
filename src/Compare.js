import React from 'react';
import CompareCard from './CompareCard';
import Card from './Card';
import PropTypes from 'prop-types';


const Compare = ( {compareInfo, removeCompare} ) => {
  let compareCard;
  let firstCard;
  let secondCard;
  if (compareInfo.firstDistrict) {
    firstCard = <Card
      setComparePosition={() => removeCompare(1)}
      selected='compare-card left'
      district={compareInfo.firstDistrict.districtData}
      key={`compare-${compareInfo.firstDistrict.title}`}/>;
  }
  if (compareInfo.firstDistrict && compareInfo.secondDistrict) {
    compareCard = <CompareCard
      compareInfo={compareInfo}
    />;
    secondCard = <Card
      setComparePosition={() => removeCompare(2)}
      selected='compare-card right'
      district={compareInfo.secondDistrict.districtData}
      key={`compare-${compareInfo.secondDistrict.title}`}/>;
  }
  return (
    <div className='compare-container'>
      {firstCard}
      {compareCard}
      {secondCard}
    </div>
  );
};

Compare.propTypes = {
  compareInfo: PropTypes.objectOf(PropTypes.object),
  removeCompare: PropTypes.func
};

export default Compare;
