import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from '../src/Card';
import DistrictRepository from '../src/helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';

describe('Card', () => {
  const district = new DistrictRepository(kinderData);

  it('should create an instance of a card', () => {

    const wrapper = shallow(<Card selected={district.data.COLORADO}
                                  setComparePosition={0}
                                  district={district.data.COLORADO}
                                  key={district.data.COLORADO.location}
                                />);

    expect(wrapper.find('.card').length).toEqual(1);
  });
});
