import React from 'react';
import CompareCard from './CompareCard';
// import DistrictRepository from './helper.js';

const Compare = ( {CompareInfo} ) => {
  let compareCard;
  if (CompareInfo.firstDistrict === 'undefined' &&
      CompareInfo.secondDistrict !== 'undefined') {
    // compareCard = <CompareCard
    //   CompareInfo={CompareInfo}
    // />;
    console.log(CompareInfo);
  }
  return (
    <div>
      {compareCard}
    </div>
  );
};

export default Compare;
