import React from 'react';


const DatasetButton = ( {dataSet} ) => {
  return (
    <option value={dataSet}>
      {dataSet}
    </option>
  );
};

DatasetButton.propTypes = {
  dataSet: React.PropTypes.string
};

export default DatasetButton;
