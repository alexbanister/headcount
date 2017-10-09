import React from 'react';
import PropTypes from 'prop-types';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryArea } from 'victory';

const Card = ( {district, setComparePosition, selected} ) => {
  const districtKeys = Object.keys(district.data);
  const yearlyData = districtKeys.map( (districtKey) => {
    let dataValue =
    district.data[districtKey] > .5 ? "above-fifty" : "below-fifty";
    return (
      <h3 className={`data-line ${dataValue}`}
        key={`${district.location} ${districtKey} -
        ${district.data[districtKey]}`}>
        {districtKey}: {district.data[districtKey]}
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
              tickFormat={(x) => (`${x * 100}%`)}
            />
            <VictoryLine
              interpolation='monotoneX'
              data={Object.values(district.data)}
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
  district: React.PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
};

export default Card;
