import React from 'react';
import PropTypes from 'prop-types';

const DatasetButton = ( {dataSet} ) => {
  return (
    <option value={dataSet}>
      {dataSet}
    </option>
  );
};

DatasetButton.propTypes = {
  dataSet: PropTypes.string
};

export default DatasetButton;
