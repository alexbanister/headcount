import React, { Component } from 'react';

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
        <option value={fileName}>
          {fileName}
        </option>
      );
    });
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <select
          value={this.state.dataSet}
          onChange={this.handleChange.bind(this)}>

          <option value=''></option>
          {fileListDropdown}
        </select>
      </div>
    );
  }
}

export default Controls;
