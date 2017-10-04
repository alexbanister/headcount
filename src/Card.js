import React from 'react';

const Card = ( {district} ) => {
  const districtKeys = Object.keys(district.data);
  const yearlyData = districtKeys.map( (districtKey) => {
    return (
        <h3 className="data-line">{districtKey}: {district.data[districtKey]}</h3>
    )
  })
  return (
    <div className="card">
      <h2 className="district-name">{district.location}</h2>
      <div className="card-data">{yearlyData}</div>
    </div>
  )
}

export default Card;
