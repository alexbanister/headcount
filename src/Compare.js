import React from 'react';
import CompareCard from './CompareCard';
import Card from './Card';
// import DistrictRepository from './helper.js';

const Compare = ( {compareInfo} ) => {
  let compareCard;
  let firstCard;
  let secondCard;
  if (compareInfo.firstDistrict) {
    firstCard = <Card
      district={compareInfo.firstDistrict.data}
      key={`compare-${compareInfo.firstDistrict.title}`}/>
  }
  if (compareInfo.firstDistrict && compareInfo.secondDistrict) {
    compareCard = <CompareCard
      compareInfo={compareInfo}
    />;
    secondCard = <Card
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
