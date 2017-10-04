import React from 'react';

const DatasetButton = ( {dataSet} ) => {
  return (
    <option value={dataSet}>
      {dataSet}
    </option>
  );
};

export default DatasetButton;
