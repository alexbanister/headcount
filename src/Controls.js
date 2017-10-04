import React, { Component } from 'react';
import DatasetButton from './DatasetButton';

class Controls extends Component {
  constructor() {
    super();
    this.state = {
      dataSet: ''
    };
  }

  handleChange(event) {
    this.setState({dataSet: event.target.value});
    this.props.changeData(event.target.value);
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
        <input />
      </div>
    );
  }
}

export default Controls;
