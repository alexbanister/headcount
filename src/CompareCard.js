import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory';
import PropTypes from 'prop-types';

const CompareCard = ( {compareInfo} ) => {
  return (
    <div className="card">
      <h2 className="district-name">{compareInfo.firstDistrict.title}</h2>
      <div className="card-data">{compareInfo.firstDistrict.average}</div>
      <h1>{compareInfo.difference.compared}</h1>
      <VictoryChart>
        <VictoryAxis
          dependentAxis
          tickFormat={(xValue) => (`${xValue * 100}%`)}
        />
        <VictoryLine
          interpolation='monotoneX'
          u={Object.values(compareInfo.firstDistrict.districtData.districtData)}
          style={{
            data: {stroke: "#EE7B2A" }
          }}
        />
        <VictoryLine
          interpolation='monotoneX'
          data={
            Object.values(compareInfo.secondDistrict.districtData.districtData)}
          style={{
            data: {stroke: "#349BF5" }
          }}
        />
      </VictoryChart>
      <div className="card-data">{compareInfo.secondDistrict.average}</div>
      <h2 className="district-name">{compareInfo.secondDistrict.title}</h2>
    </div>
  );
};

CompareCard.propTypes = {
  compareInfo: PropTypes.objectOf(PropTypes.object)
};

export default CompareCard;
