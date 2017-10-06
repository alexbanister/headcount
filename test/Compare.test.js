import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Compare from '../src/Compare';
import DistrictRepository from '../src/helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';

describe('Compare', () => {
  const district = new DistrictRepository(kinderData);

  it('should create an instance of a compare container', () => {
    const wrapper = shallow(<Compare
      compareInfo={{}}
    />);
    expect(wrapper).toMatchSnapshot()
  });
});
