import React from 'react';
import PropTypes from 'prop-types';

const Card = ( {district} ) => {
  const districtKeys = Object.keys(district.data);
  const yearlyData = districtKeys.map( (districtKey) => {
    let dataValue = district.data[districtKey] > .5 ? "above-fifty" : "below-fifty";
    return (
      <h3 className={`data-line ${dataValue}`}>
        {districtKey}: {district.data[districtKey]}
      </h3>
    );
  });
  return (
    <div className="card">
      <h2 className="district-name">{district.location}</h2>
      <div className="card-data">{yearlyData}</div>
    </div>
  );
};

Card.propTypes = {
  district: React.PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
};

export default Card;
