import React from 'react';
import CompareCard from './CompareCard';
import Card from './Card';
// import DistrictRepository from './helper.js';

const Compare = ( {compareInfo, removeCompare} ) => {
  let compareCard;
  let firstCard;
  let secondCard;
  if (compareInfo.firstDistrict) {
    firstCard = <Card
      setComparePosition={() => removeCompare(1)}
      selected='compare-card'
      district={compareInfo.firstDistrict.data}
      key={`compare-${compareInfo.firstDistrict.title}`}/>
  }
  if (compareInfo.firstDistrict && compareInfo.secondDistrict) {
    compareCard = <CompareCard
      compareInfo={compareInfo}
    />;
    secondCard = <Card
      setComparePosition={() => removeCompare(2)}
      selected='compare-card'
      district={compareInfo.secondDistrict.data}
      key={`compare-${compareInfo.secondDistrict.title}`}/>
  }
  return (
    <div className='compare-container'>
      {firstCard}
      {compareCard}
      {secondCard}
    </div>
  );
};

export default Compare;
