import React from 'react';
import PropTypes from 'prop-types';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory';

const Card = ( {district, setComparePosition, selected} ) => {
  const districtKeys = Object.keys(district.districtData);
  const yearlyData = districtKeys.map( (districtKey) => {
    let dataValue =
    district.districtData[districtKey] > .5 ? "above-fifty" : "below-fifty";
    return (
      <h3 className={`data-line ${dataValue}`}
        key={`${district.location} ${districtKey} -
        ${district.districtData[districtKey]}`}>
        {districtKey}: {district.districtData[districtKey]}
      </h3>
    );
  });
  return (
    <div className={`card ${selected}`}
      onClick={() => setComparePosition(district.location)}>
      <h2 className="district-name">{district.location}</h2>
      <div className="card-body">
        <div className="chart-area">
          <VictoryChart>
            <VictoryAxis
              dependentAxis
              tickFormat={(xValue) => (`${xValue * 100}%`)}
            />
            <VictoryLine
              interpolation='monotoneX'
              data={Object.values(district.districtData)}
              style={{
                data: {stroke: "#EE7B2A", strokeWidth: 5 }
              }}
            />
          </VictoryChart>
        </div>
        <div className="card-data">{yearlyData}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  district: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  setComparePosition: PropTypes.func,
  selected: PropTypes.string

};

export default Card;
