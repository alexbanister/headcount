import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Controls from '../src/Controls';
import App from '../src/App';
import DistrictRepository from '../src/helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';

describe('Controls', () => {
  const district = new DistrictRepository(kinderData);

  it('should create an instance of a card container', () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(<Controls
      searchDistricts={mockFunc}
      fileList={Object.keys(district)}
      changeData={mockFunc}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
