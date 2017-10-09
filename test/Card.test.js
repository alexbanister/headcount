import React from 'react';
import { shallow } from 'enzyme';
import Card from '../src/Card';
import DistrictRepository from '../src/helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';

describe('Card', () => {
  const district = new DistrictRepository(kinderData);

  it('should create an instance of a card', () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(<Card
      selected={'COLORADO'}
      setComparePosition={mockFunc}
      district={district.data.COLORADO}
      key={district.data.COLORADO.location}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
