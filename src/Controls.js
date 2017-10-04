import React, { Component } from 'react';
import DatasetButton from './DatasetButton';
import PropTypes from 'prop-types';

class Controls extends Component {
  constructor() {
    super();
    this.state = {
      dataSet: '',
      searchValue: ''
    };
  }

  handleChange(event) {
    this.setState({dataSet: event.target.value});
    this.props.changeData(event.target.value);
  }

  handleSearch (event) {
    this.setState({searchValue: event.target.value});
    this.props.searchDistricts(event.target.value);
  }

  render() {
    const fileListDropdown = this.props.fileList.map( (fileName) => {
      return (
        <DatasetButton
          key={fileName}
          dataSet={fileName} />
      );
    });
    return (
      <div className='header'>
        <h1>Welcome To Headcount 2.0</h1>
        <select
          value={this.state.dataSet}
          onChange={this.handleChange.bind(this)}>

          <option value=''>Select a Dataset</option>
          {fileListDropdown}
        </select>
        <input
          value={this.state.searchValue}
          onChange={this.handleSearch.bind(this)} />
      </div>
    );
  }
}

Controls.propTypes = {
  searchDistricts: React.PropTypes.func,
  fileList: React.PropTypes.arrayOf(PropTypes.string),
  changeData: React.PropTypes.func
};

export default Controls;
