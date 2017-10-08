import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryArea } from 'victory';

const CompareCard = ( {compareInfo} ) => {
  return (
    <div className="card">
      <h2 className="district-name">{compareInfo.firstDistrict.title}</h2>
      <div className="card-data">{compareInfo.firstDistrict.average}</div>
      <h1>{compareInfo.difference.compared}</h1>
      <VictoryChart>
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x * 100}%`)}
        />
        <VictoryLine
          data={Object.values(compareInfo.firstDistrict.data.data)}
          style={{
            data: {stroke: "#EE7B2A" }
          }}
        />
        <VictoryLine
          data={Object.values(compareInfo.secondDistrict.data.data)}
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

export default CompareCard;
